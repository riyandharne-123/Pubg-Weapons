$(document).ready(function(){
    $("#assault_rifle").click(function(){
      $(".intro").hide();
      $(".container-AR").show();
    });
    $("#smg").click(function(){
        $(".container-AR").hide();
        $(".container-SMG").show();
        $('.intro').hide();
      });
      $('#go-back').click(function(){
        $(".container-SMG").hide();
        $('.container-AR').hide();
        $(".intro").show();
      });
});