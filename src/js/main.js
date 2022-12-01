
  // ScrollReveal({
  //   // reset:true,
  //   distance:'100px',
  //   duration:2500,
  //   delay:0
  // })
  
  // ScrollReveal().reveal('.left' , {delay:0 , origin:'left'})
  // ScrollReveal().reveal('.right' , {delay:0 , origin:'right'})
  // ScrollReveal().reveal('.bottom' , {delay:0 , origin:'bottom'})
  // ScrollReveal().reveal('.top' , {delay:0 , origin:'top'})
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




///////////////////////searchside/////////////////////////////

$( "#searchside" ).click(function(event) {
  $( ".serchpop" ).slideToggle();

  disabledEventPropagation(event);
  //console.log('2nd event');

});

$('.serchpop').click(function(event) {

  disabledEventPropagation(event);
  //console.log('3rd event');

});


$(document).click(function() {
  $(".serchpop").slideUp();
  //console.log('1st event');

});
$("#closepopser").click(function() {
  $(".serchpop").slideUp();
  //console.log('1st event');

});


function disabledEventPropagation(event) {
  if (event.stopPropagation) {
    event.stopPropagation();
  } else if (window.event) {
    window.event.cancelBubble = true;
  }
}

////////////////////////////////////////////////////////////


///////////////////////navmob/////////////////////////////

$( ".drobbavmob" ).click(function(event) {
  $( ".drobbavmob ul" ).slideToggle();


  disabledEventPropagation(event);
  //console.log('2nd event');

});

$('.drobbavmob ul').click(function(event) {

  disabledEventPropagation(event);
  //console.log('3rd event');

});


$(document).click(function() {
  $(".drobbavmob ul").slideUp();
  //console.log('1st event');

});



///////////////////////////////////////////




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



//////////////////////////////////////////////////////

