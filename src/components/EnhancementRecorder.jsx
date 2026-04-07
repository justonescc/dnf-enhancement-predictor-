import React from 'react';

export function EnhancementRecorder({ disabled, onRecord }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">【增幅记录】</h2>

      <div className="text-white mb-3">完成增幅后记录结果：</div>

      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => onRecord('success')}
          disabled={disabled}
          className={`
            py-3 px-4 rounded-lg font-bold transition-all duration-200
            ${disabled
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-dnf-success text-white hover:bg-green-600 hover:scale-105'
            }
          `}
        >
          ✅ 成功
        </button>

        <button
          onClick={() => onRecord('failure')}
          disabled={disabled}
          className={`
            py-3 px-4 rounded-lg font-bold transition-all duration-200
            ${disabled
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-dnf-failure text-white hover:bg-red-600 hover:scale-105'
            }
          `}
        >
          ❌ 失败
        </button>

        <button
          onClick={() => onRecord('skip')}
          className="py-3 px-4 rounded-lg font-bold bg-white/20 text-white hover:bg-white/30 transition-all duration-200"
        >
          ⏭️ 跳过
        </button>
      </div>

      {!disabled && (
        <div className="mt-3 text-sm text-gray-400 text-center">
          记录你的实际增幅结果，帮助我们验证预测准确性
        </div>
      )}
    </div>
  );
}
