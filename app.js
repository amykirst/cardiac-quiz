// Steps
// On page load, show question 1
// Store current score as 0
// Store age as variable
// When user clicks "next", retrieve value of answer; calculate score and store in current score variable; show next question
// Repeat until reach last question
// Present question 5 as "Are you on high blood pressure medication?" Store answer in new variable
// On question 6, calculate score; add 2 if answer to high blood pressure medication was yes
// When user clicks "Next" on last question, calculate score; associate score with a percentage
// If score is over 7.5%, show high-risk screen; if score is lower than 7.5%, show low risk screen







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



