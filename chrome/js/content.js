jQuery(document).ready(function($){

  /* BEGIN match xdebug output */

  // mangle xdebug to get picked up by krumo format
  $('.xdebug-error th').each(function(){
    this.innerHTML = this.innerHTML.replace(/in (.+) on line <i>([0-9]+)<\/i>/g, "in <span class=\"krumo-callee-file\" data-filename=\"$1\" data-linenumber=\"$2\">$1</span> on line <i>$2</i>");
  });
  
  /* END match xdebug output */

  /* BEGIN match krumo output */

  $('.krumo-callee-file').css({
    'cursor': 'pointer',
    'text-decoration': 'underline'
  });
  $('body').on('click', '.krumo-callee-file', function(){
    var filename = this.dataset['filename'];
    var linenumber = this.dataset['linenumber'];

    chrome.runtime.sendMessage(
      {filename: filename, linenumber: linenumber},
      function(response) {
        // console.log(response);
      }
    );
  });
  // trigger on load for debug
  // $('.krumo-callee-file').first().click();
  
  /* END match krumo output */

});
