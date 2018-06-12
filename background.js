window.chrome.runtime.onInstalled.addListener(function() {
   window.chrome.storage.sync.set({color: '#3aa757'}, function() {
     console.log("The color is green.");
   });
 });
