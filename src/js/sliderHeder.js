import $ from 'jquery'


////////////////////////////////////////////////////////////
$(".arrowNaxt").click(()=>{

  var newShow = $(".textslied.active",$("#slider")).next(".textslied");
  if(newShow.length === 0)
    newShow = $(".textslied",$("#slider")).first();

    $(".textslied",$("#slider")).removeClass("active");
    $(newShow).addClass("active");

    var newImg = $(newShow).attr("data-img");
  $(".ImgSlider").attr("src",newImg);


$(".ImgSlider").addClass('add_keyframe');



})



$(".arrowPrve").click(()=>{
var newShow = $(".textslied.active",$("#slider")).prev(".textslied");
if(newShow.length === 0)
  newShow = $(".textslied",$("#slider")).last();

  $(".textslied",$("#slider")).removeClass("active");
  $(newShow).addClass("active");

  $(".ImgSlider").attr("src",$(newShow).attr("data-img"));
})


