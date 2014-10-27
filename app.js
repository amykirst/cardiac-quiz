// Set mainWrap so that if content is short, mainWrap extends 30px above bottom of window

function setHeight() {
	var desiredHeight = $(window).height() - $("header").outerHeight(true) - 60; // top and bottom padding
	$(".mainWrap").css("min-height", desiredHeight);
	console.log($(window).height());
	console.log($("header").outerHeight(true));
	console.log(desiredHeight);
}

$(document).ready(function() {
  // set mainWrap on page load
  setHeight();

  $(window).resize(function() {
    setHeight();
  });

}); 



