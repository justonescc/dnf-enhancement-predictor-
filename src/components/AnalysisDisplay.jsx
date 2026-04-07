import React from 'react';

export function AnalysisDisplay({ analysis, badgeSequence }) {
  if (!analysis) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">【实时分析】</h2>
        <div className="text-center text-gray-400 py-8">
          请先选择增幅目标并开始垫徽章
        </div>
      </div>
    );
  }

  const probabilityPercentage = Math.round(analysis.goodLuckProbability * 100);
  const progressWidth = Math.min(analysis.goodLuckProbability * 100, 100);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold text-white mb-4">【实时分析】</h2>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white font-medium">好运概率：</span>
          <span className="text-white font-bold">{probabilityPercentage}%</span>
        </div>
        <div className="w-full bg-black/30 rounded-full h-4 overflow-hidden">
          <div
            className="h-full transition-all duration-500 ease-out"
            style={{
              width: `${progressWidth}%`,
              background: `linear-gradient(90deg, #EF4444 0%, #F59E0B 50%, #10B981 100%)`
            }}
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="text-white font-medium mb-2">📊 徽章记录：</div>
        {badgeSequence.length === 0 ? (
          <div className="text-gray-400 text-sm">暂无记录</div>
        ) : (
          <div className="grid grid-cols-5 gap-2 max-h-32 overflow-y-auto">
            {badgeSequence.map((item, index) => (
              <div
                key={index}
                className={`
                  px-3 py-2 rounded text-center text-sm font-medium
                  ${item.result === 'success'
                    ? 'bg-dnf-success/20 text-green-400'
                    : 'bg-dnf-failure/20 text-red-400'
                  }
                `}
              >
                第{index + 1}次：{item.result === 'success' ? '✅' : '❌'}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={`
        p-4 rounded-lg text-center font-bold text-lg
        ${analysis.suggestion.level === 'strongly_recommended' ? 'bg-green-500/20 animate-pulse' : ''}
        ${analysis.suggestion.level === 'recommended' ? 'bg-green-400/10' : ''}
        ${analysis.suggestion.level === 'consider' ? 'bg-yellow-500/10' : ''}
        ${analysis.suggestion.level === 'not_recommended' ? 'bg-red-400/10' : ''}
      `}>
        <div className="text-2xl mb-1">{analysis.suggestion.icon}</div>
        <div className={analysis.suggestion.color}>
          {analysis.suggestion.text}
        </div>
      </div>
    </div>
  );
}