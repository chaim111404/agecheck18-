// sw.js – Service Worker בסיסי
self.addEventListener('install', event => {
    console.log('Service Worker מותקן');
    self.skipWaiting();
  });
  
  self.addEventListener('activate', event => {
    console.log('Service Worker הופעל');
  });
  
  self.addEventListener('fetch', event => {
    // אפשר להשאיר ריק – זה מספיק כדי שהדפדפן יציע התקנה
  });