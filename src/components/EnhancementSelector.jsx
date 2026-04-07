import React from 'react';
import { ENHANCEMENT_RATES } from '../utils/constants.js';

export function EnhancementSelector({ selectedEnhancement, onSelect }) {
  const enhancements = Object.keys(ENHANCEMENT_RATES);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold text-white mb-4">【步骤1：选择增幅目标】</h2>

      <div className="text-white mb-3">我要增幅：</div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {enhancements.map((key) => {
          const config = ENHANCEMENT_RATES[key];
          const isSelected = selectedEnhancement === key;
          const ratePercentage = Math.round(config.rate * 100);

          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className={`
                px-4 py-3 rounded-lg font-bold transition-all duration-200
                ${isSelected
                  ? 'bg-dnf-gold text-dnf-blue scale-105 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
                }
              `}
            >
              {key}
            </button>
          );
        })}
      </div>

      {selectedEnhancement && (
        <div className="bg-black/30 rounded-lg p-4 text-white">
          <div className="flex justify-between items-center mb-2">
            <span>当前选择：</span>
            <span className="font-bold text-dnf-gold">{selectedEnhancement}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span>成功率：</span>
            <span className="font-bold">{Math.round(ENHANCEMENT_RATES[selectedEnhancement].rate * 100)}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span>请垫：</span>
            <span className="font-bold text-dnf-info">
              {ENHANCEMENT_RATES[selectedEnhancement].badge} 徽章
            </span>
          </div>
          <div className="text-sm text-gray-400 mt-2">
            徽章成功率：{Math.round(ENHANCEMENT_RATES[selectedEnhancement].badgeRate * 100)}%
          </div>
        </div>
      )}
    </div>
  );
}
