function copyToClipboard() {
  
  $('.slider-inner li').each(function(){
    var index = $(this).css('z-index')

    if(index == 1){

      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(this).find('.quote').html()).select();
      document.execCommand("copy");
      $temp.remove();
      //console.log($(this).find('.quote').html())
    }

  })

}
