// receive messages from content.js
chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
    // console.log('background.js relaying message: ', msg);
    chrome.runtime.sendNativeMessage(
      "org.aught.matchcommand",
      msg,
      function(response) {
        // console.log('background.js relaying response: ', response);
        port.postMessage(response);
      }
    );
  });
});
