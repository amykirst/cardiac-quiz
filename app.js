

function setHeight() {
  var desiredHeight = $(window).height() - $("header").outerHeight(true) - 60; // top and bottom padding
  $(".mainWrap").css("min-height", desiredHeight);
  //console.log($(window).height());
  //console.log($("header").outerHeight(true));
  //console.log(desiredHeight);
}

function quesProcess() {
  var position = 0;
  var quesNum =  position + 1;
  var totalQues = $(".question").length;
  var score = 0;
  // display total number of questions
  $(".questionNumber").append(totalQues);

  
  $("button").click(function() {
    position++;
    quesNum = position + 1;
  
    // hide previous question
    $(".question").hide();

    // show next question
    if (position < totalQues) {
      $(".question").eq(position).show();
      $(".questionNumber").text("Question " + quesNum + " of " + totalQues);
    } else {
      $(".question, .questionNumber, button").hide();   
    } 
    
    // score question
    console.log("The value of the answer was: " + $(".question").prev().val());


    }); // end button click function
 
} // end quesProcess function

$(document).ready(function() {
  // set mainWrap on page load
  setHeight();

  $(window).resize(function() {
    setHeight();
  });

  quesProcess();
});