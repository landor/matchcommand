console.info('init');

// var port = chrome.runtime.connectNative('org.aught.matchcommand');
// port.onMessage.addListener(function(msg) {
//   console.log("Received" + msg);
// });
// port.onDisconnect.addListener(function() {
//   console.log("Failed to connect: " + chrome.runtime.lastError.message);
// });
// port.postMessage({test:'test'});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.info('request', request);
  chrome.runtime.sendNativeMessage(
    "org.aught.matchcommand",
    request,
    function(response) {
      console.log("Received response" + response);
      console.info(response);
    }
  );
});
