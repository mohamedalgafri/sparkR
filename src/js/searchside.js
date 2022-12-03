import $ from 'jquery'


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
  