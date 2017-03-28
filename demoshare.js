
  //<![CDATA[
  //Need to return false here, otherwise the event will bubble up and trigger the hide on body
  $(document).ready(function() {
    $('.drop-menu').click(function() {
      $('.drop-menu-content').toggle();
      return false;
    });
    $('body, .drop-menu-content span').click(function() {
      $('.drop-menu-content').hide();
    });
  });
  //]]>
