import $ from 'jquery'


$(".btnnav").click(function(){
    $(".navbarMobile").addClass("open");
  });
  $(".closebtn").click(function(){
    $(".navbarMobile").removeClass("open");
  });
  $(".linkmob").click(function(){
    $(".navbarMobile").removeClass("open");
  });
  
  $(".btnnav").click(function(){
    $("body").addClass("active");
  });
  $(".closebtn").click(function(){
    $("body").removeClass("active");
  });
  
  