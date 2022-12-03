import $ from 'jquery'

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

function disabledEventPropagation(event) {
  if (event.stopPropagation) {
    event.stopPropagation();
  } else if (window.event) {
    window.event.cancelBubble = true;
  }
}
