jQuery(document).ready(function($){
  $('.krumo-callee-file').css({
    'cursor': 'pointer',
    'text-decoration': 'underline'
  });
  $('body').on('click', '.krumo-callee-file', function(){
    var filename = this.dataset['filename'];
    var linenumber = this.dataset['linenumber'];
    console.info(filename, linenumber);

    chrome.runtime.sendMessage(
      {filename: filename, linenumber: linenumber},
      function(response) {
        console.log(response);
      }
    );
  });

  // $('.krumo-callee-file').first().click();
});
