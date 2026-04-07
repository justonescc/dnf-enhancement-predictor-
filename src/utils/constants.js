// 增幅成功率映射表
export const ENHANCEMENT_RATES = {
  '+6→+7': {
    rate: 0.60,
    badge: '6级→7级',
    badgeRate: 0.60,
    label: '+6→+7'
  },
  '+7→+8': {
    rate: 0.70,
    badge: '5级→6级',
    badgeRate: 0.70,
    label: '+7→+8'
  },
  '+8→+9': {
    rate: 0.60,
    badge: '6级→7级',
    badgeRate: 0.60,
    label: '+8→+9'
  },
  '+9→+10': {
    rate: 0.50,
    badge: '7级→8级',
    badgeRate: 0.50,
    label: '+9→+10'
  },
  '+10→+11': {
    rate: 0.40,
    badge: '8级→9级',
    badgeRate: 0.40,
    label: '+10→+11'
  },
  '+11→+12': {
    rate: 0.30,
    badge: '9级→10级',
    badgeRate: 0.30,
    label: '+11→+12'
  }
};

// 好运概率阈值
export const LUCK_THRESHOLDS = {
  STRONGLY_RECOMMENDED: 0.75,
  RECOMMENDED: 0.65,
  CONSIDER: 0.55
};

// 运气衰减参数
export const DECAY_CONFIG = {
  DECAY_INTERVAL: 3,
  DECAY_RATE: 0.05,
  MIN_PROBABILITY: 0.40
};

// localStorage键名
export const STORAGE_KEYS = {
  CURRENT_SESSION: 'dnf_predictor_current_session',
  HISTORY: 'dnf_predictor_history'
};