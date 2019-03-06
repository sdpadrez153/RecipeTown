(function($){
    $(function(){
  
      $('.sidenav').sidenav();
      $('.parallax').parallax();
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    // var instances = M.Sidenav.init(elems, options);
  });


  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });

  