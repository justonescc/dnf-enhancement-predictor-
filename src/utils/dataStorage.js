import { STORAGE_KEYS } from './constants.js';

export function saveCurrentSession(sessionData) {
  try {
    localStorage.setItem(STORAGE_KEYS.CURRENT_SESSION, JSON.stringify(sessionData));
    return true;
  } catch (error) {
    console.error('Failed to save session:', error);
    return false;
  }
}

export function loadCurrentSession() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CURRENT_SESSION);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to load session:', error);
    return null;
  }
}

export function clearCurrentSession() {
  try {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION);
    return true;
  } catch (error) {
    console.error('Failed to clear session:', error);
    return false;
  }
}

export function saveHistory(history) {
  try {
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
    return true;
  } catch (error) {
    console.error('Failed to save history:', error);
    return false;
  }
}

export function loadHistory() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.HISTORY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load history:', error);
    return [];
  }
}

export function addHistoryRecord(record) {
  const history = loadHistory();
  history.unshift(record);
  if (history.length > 100) {
    history.pop();
  }
  return saveHistory(history);
}