import React, { useState, useEffect } from 'react';
import { EnhancementSelector } from './components/EnhancementSelector.jsx';
import { BadgeInputPanel } from './components/BadgeInputPanel.jsx';
import { AnalysisDisplay } from './components/AnalysisDisplay.jsx';
import { EnhancementRecorder } from './components/EnhancementRecorder.jsx';
import { ENHANCEMENT_RATES } from './utils/constants.js';
import { analyzeBadgeSequence } from './utils/bayesianCalculator.js';
import { saveCurrentSession, loadCurrentSession, clearCurrentSession, addHistoryRecord } from './utils/dataStorage.js';

function App() {
  const [selectedEnhancement, setSelectedEnhancement] = useState(null);
  const [badgeSequence, setBadgeSequence] = useState([]);
  const [analysis, setAnalysis] = useState(null);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const savedSession = loadCurrentSession();
    if (savedSession) {
      setSelectedEnhancement(savedSession.selectedEnhancement);
      setBadgeSequence(savedSession.badgeSequence || []);
    }
  }, []);

  useEffect(() => {
    if (selectedEnhancement) {
      saveCurrentSession({
        selectedEnhancement,
        badgeSequence
      });
    }
  }, [selectedEnhancement, badgeSequence]);

  useEffect(() => {
    if (selectedEnhancement && badgeSequence.length > 0) {
      const config = ENHANCEMENT_RATES[selectedEnhancement];
      const result = analyzeBadgeSequence(badgeSequence, config.badgeRate);
      setAnalysis(result);
    } else {
      setAnalysis(null);
    }
  }, [badgeSequence, selectedEnhancement]);

  const handleSelectEnhancement = (enhancement) => {
    setSelectedEnhancement(enhancement);
    setBadgeSequence([]);
    setAnalysis(null);
  };

  const handleRecordBadge = (result) => {
    const newEntry = {
      result,
      timestamp: new Date().toISOString()
    };
    setBadgeSequence([...badgeSequence, newEntry]);
  };

  const handleResetBadge = () => {
    setBadgeSequence([]);
    setAnalysis(null);
  };

  const handleViewHistory = () => {
    setShowHistory(true);
  };

  const handleRecordEnhancement = (result) => {
    if (!selectedEnhancement || badgeSequence.length === 0) {
      alert('请先垫徽章再增幅');
      return;
    }

    const record = {
      target: selectedEnhancement,
      badgeSequence: [...badgeSequence],
      goodLuckProbability: analysis.goodLuckProbability,
      enhancementResult: result,
      timestamp: new Date().toISOString()
    };

    addHistoryRecord(record);

    setBadgeSequence([]);
    setAnalysis(null);

    if (result !== 'skip') {
      alert(`已记录增幅${result === 'success' ? '成功' : '失败'}！感谢你的反馈，这将帮助我们改进算法。`);
    }
  };

  const canRecordEnhancement = selectedEnhancement && badgeSequence.length > 0;

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-dnf-gold mb-2">
            DNF增幅预测器
          </h1>
          <p className="text-gray-400">基于贝叶斯概率分析的增幅时机预测工具</p>
        </div>

        <EnhancementSelector
          selectedEnhancement={selectedEnhancement}
          onSelect={handleSelectEnhancement}
        />

        <BadgeInputPanel
          disabled={!selectedEnhancement}
          onRecord={handleRecordBadge}
          onReset={handleResetBadge}
          onViewHistory={handleViewHistory}
        />

        <AnalysisDisplay
          analysis={analysis}
          badgeSequence={badgeSequence}
        />

        <EnhancementRecorder
          disabled={!canRecordEnhancement}
          onRecord={handleRecordEnhancement}
        />

        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>⚠️ 本工具仅供娱乐参考，实际增幅结果以游戏内为准</p>
          <p className="mt-1">数据来源：DNF手游官方公布概率</p>
        </div>
      </div>

      {showHistory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowHistory(false)}
        >
          <div
            className="bg-dnf-blue rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">📊 历史记录</h2>
              <button
                onClick={() => setShowHistory(false)}
                className="text-white hover:text-dnf-gold text-2xl"
              >
                ✕
              </button>
            </div>

            <HistoryList />
          </div>
        </div>
      )}
    </div>
  );
}

function HistoryList() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistoryData = async () => {
      const { loadHistory } = await import('./utils/dataStorage.js');
      const data = loadHistory();
      setHistory(data);
    };
    loadHistoryData();
  }, []);

  if (history.length === 0) {
    return (
      <div className="text-center text-gray-400 py-8">
        暂无历史记录
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {history.map((record, index) => {
        const date = new Date(record.timestamp);
        const dateStr = date.toLocaleString('zh-CN');

        return (
          <div key={index} className="bg-black/20 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="text-white font-bold">{record.target}</div>
                <div className="text-sm text-gray-400">{dateStr}</div>
              </div>
              <div className={`
                px-3 py-1 rounded font-bold
                ${record.enhancementResult === 'success'
                  ? 'bg-dnf-success/20 text-green-400'
                  : record.enhancementResult === 'failure'
                  ? 'bg-dnf-failure/20 text-red-400'
                  : 'bg-gray-600/20 text-gray-400'
                }
              `}>
                {record.enhancementResult === 'success' ? '✅ 成功' :
                 record.enhancementResult === 'failure' ? '❌ 失败' : '⏭️ 跳过'}
              </div>
            </div>
            <div className="text-sm text-gray-400">
              垫手次数：{record.badgeSequence.length} |
              预测概率：{Math.round(record.goodLuckProbability * 100)}%
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
