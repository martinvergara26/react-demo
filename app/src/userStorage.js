const STORAGE_KEY = 'react-demo-markers';

export function saveMarker (id) {
  let savedMarkers = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  savedMarkers.push(parseInt(id));
  savedMarkers = Array.from(new Set(savedMarkers));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedMarkers));
}

export function deleteMarker (id) {
  let savedMarkers = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  savedMarkers = savedMarkers.filter(m => m !== parseInt(id));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedMarkers));
}


export function getSavedMarkers () {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}