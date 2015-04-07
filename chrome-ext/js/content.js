// set up port to communicate with background.js
var port = chrome.runtime.connect({name: "matchcommand"});
port.onMessage.addListener(function(msg) {
  // console.log('content.js received response: ', msg);
});

jQuery(document).ready(function($){

  // mangle xdebug output
  $('.xdebug-error th').each(function(){
    this.innerHTML = this.innerHTML.replace(/in (.+) on line <i>([0-9]+)<\/i>/g, "in <span class=\"matchcommand-element\" data-filename=\"$1\" data-linenumber=\"$2\">$1</span> on line <i>$2</i>");
  });

  // mangle krumo output
  $('.krumo-callee-file').addClass('matchcommand-element');

  // matchcommand css
  $('.matchcommand-element').css({
    'cursor': 'pointer',
    'text-decoration': 'underline'
  });
  
  // intercept click and send message to native messaging host
  $('body').on('click', '.matchcommand-element', function(e){
    e.preventDefault();
    // send message to background.js
    // console.log('content.js sending message');
    port.postMessage({
      filename: this.dataset['filename'],
      linenumber: this.dataset['linenumber']
    });
  });

});
