import { DECAY_CONFIG, LUCK_THRESHOLDS } from './constants.js';

export function updateLuckProbability(currentProbability, isSuccess, successRate) {
  const goodLuckProb = currentProbability;
  const badLuckProb = 1 - currentProbability;

  let likelihoodGood, likelihoodBad;

  if (isSuccess) {
    likelihoodGood = successRate * 1.3;
    likelihoodBad = successRate * 0.7;
  } else {
    likelihoodGood = (1 - successRate) * 0.7;
    likelihoodBad = (1 - successRate) * 1.3;
  }

  const posteriorGood = likelihoodGood * goodLuckProb;
  const posteriorBad = likelihoodBad * badLuckProb;
  const normalization = posteriorGood + posteriorBad;

  return posteriorGood / normalization;
}

export function applyLuckDecay(probability, sequenceLength) {
  if (sequenceLength % DECAY_CONFIG.DECAY_INTERVAL !== 0) {
    return probability;
  }

  const decayed = probability * (1 - DECAY_CONFIG.DECAY_RATE);
  return Math.max(decayed, DECAY_CONFIG.MIN_PROBABILITY);
}

export function generateSuggestion(probability) {
  if (probability > LUCK_THRESHOLDS.STRONGLY_RECOMMENDED) {
    return {
      level: 'strongly_recommended',
      icon: '✅',
      text: '强烈建议现在增幅！',
      color: 'text-green-500'
    };
  } else if (probability > LUCK_THRESHOLDS.RECOMMENDED) {
    return {
      level: 'recommended',
      icon: '✅',
      text: '可以增幅了',
      color: 'text-green-400'
    };
  } else if (probability > LUCK_THRESHOLDS.CONSIDER) {
    return {
      level: 'consider',
      icon: '⚠️',
      text: '可以考虑，建议再垫1-2次',
      color: 'text-yellow-500'
    };
  } else {
    return {
      level: 'not_recommended',
      icon: '❌',
      text: '继续垫手，运气还未回升',
      color: 'text-red-400'
    };
  }
}

export function analyzeBadgeSequence(badgeSequence, badgeSuccessRate) {
  let probability = 0.5;

  badgeSequence.forEach((item, index) => {
    probability = updateLuckProbability(probability, item.result === 'success', badgeSuccessRate);
    probability = applyLuckDecay(probability, index + 1);
  });

  const suggestion = generateSuggestion(probability);

  return {
    goodLuckProbability: probability,
    suggestion: suggestion,
    sequenceLength: badgeSequence.length
  };
}