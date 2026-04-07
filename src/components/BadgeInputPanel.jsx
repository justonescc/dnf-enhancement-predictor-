import React from 'react';

export function BadgeInputPanel({ disabled, onRecord, onReset, onViewHistory }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold text-white mb-4">【步骤2：垫徽章】</h2>

      <div className="text-white mb-3">徽章合成结果：</div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <button
          onClick={() => onRecord('success')}
          disabled={disabled}
          className={`
            py-6 px-8 rounded-lg font-bold text-xl transition-all duration-200
            ${disabled
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-dnf-success text-white hover:bg-green-600 hover:scale-105 active:scale-95'
            }
          `}
        >
          ✅ 成功
        </button>

        <button
          onClick={() => onRecord('failure')}
          disabled={disabled}
          className={`
            py-6 px-8 rounded-lg font-bold text-xl transition-all duration-200
            ${disabled
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-dnf-failure text-white hover:bg-red-600 hover:scale-105 active:scale-95'
            }
          `}
        >
          ❌ 失败
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={onReset}
          disabled={disabled}
          className={`
            py-2 px-4 rounded-lg font-medium transition-all duration-200
            ${disabled
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-white/20 text-white hover:bg-white/30'
            }
          `}
        >
          🔄 重置本次垫手
        </button>

        <button
          onClick={onViewHistory}
          className="py-2 px-4 rounded-lg font-medium bg-white/20 text-white hover:bg-white/30 transition-all duration-200"
        >
          📊 查看历史记录
        </button>
      </div>
    </div>
  );
}
