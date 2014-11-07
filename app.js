// Need to provide option to restart quiz
// Need to provide error message if option is not selected before "next" is hit
// Edit text on results page


function setHeight() {
  var desiredHeight = $(window).height() - $("header").outerHeight(true) - 60; // top and bottom padding
  $(".mainWrap").css("min-height", desiredHeight);
  //console.log($(window).height());
  //console.log($("header").outerHeight(true));
  //console.log(desiredHeight);
}

function quesProcess() {
    var position = 0;
    var totalQues = $(".question").length;
    var score = 0;
    var quesNum = position + 1;
    var age;
    var BPMed;
    var percentage;

    // display total number of questions
    $(".questionNumber").append(totalQues);

    // calculate percentage
    function calculatePerc() {
        if (score < 9) {
          percentage = 0;
        }
        if (score >= 9 && score <= 12) {
          percentage = 1;
        }
        if (score == 13 || score == 14) {
          percentage = 2;
        }
        if (score == 15) {
          percentage = 3;
        }
        if (score == 16) {
          percentage = 4;
        }
        if (score == 17) {
          percentage = 5;
        }
        if (score == 18) {
          percentage = 6;
        }
        if (score == 19) {
          percentage = 8;
        }
        if (score == 20) {
          percentage = 11;
        }
        if (score == 21) {
          percentage = 14;
        }
        if (score == 22) {
          percentage = 17;
        }
        if (score == 23) {
          percentage = 22;
        }
        if (score == 24) {
          percentage = 27;
        }
        if (score == 25) {
          percentage = 30;
        }
        console.log("Percentage is: " + percentage);
      } // end calculatePerc function
      
    // Show Results
    function showResults() {
        if (percentage < 8) {
          $(".resultCategory").text(
            "You're not at risk for a heart attack in the next 10 years.");
          $(".results").append("<p>Your risk of a heart attack is " +
            percentage +
            "%. Only scores of 7.5% or above are at risk of a heart attack in the next 10 years.</p><p>Keep up the good work!</p>"
          );
        } else {
          $(".resultCategory").text(
            "Uh oh! You're at risk of a heart attack in the next 10 years.");
          $(".results").append("<p>Your risk of a heart attack is " +
            percentage +
            "%. Scores of 7.5% or higher are at risk of a heart attack.</p> <p>We recommend that you speak to your doctor about ways to reduce your risk. If you don’t have a doctor, click on the button below to find one near you.</p> <div class='doctorButton'><a href='http://www.chsbuffalo.org/Physicians'>Find a Doctor</a></div>"
          );
        }
      } // end showResults function

    $("button").click(function() {
      position++;
      quesNum = position + 1; // Why do I need to declare this again here? Shouldn't it be updating the quesNum in the quesProcess function?
      // hide previous question
      $(".question").hide();
      // show next question 
      if (position < totalQues) {
        $(".question").eq(position).show();
        $(".questionNumber").text("Question " + quesNum + " of " +
          totalQues);
      } else {
        $(".question, .questionNumber, button").hide();
        // calculate risk percentage
        calculatePerc();
        //show results template
        $(".results").show();
        showResults();
      }
    }); // end button click function

    // score question 
    $("form :input").change(function() {
      //console.log("The value of the answer is: " + $(this).val());
      //console.log(position);
      //console.log(quesNum);
      if (quesNum == 1) {
        age = $(this).val();
        if (age >= 20 && age <= 34) {
          score = -7;
        } else if (age >= 35 && age <= 39) {
          score = -3;
        } else if (age >= 40 && age <= 44) {
          score = 0;
        } else if (age >= 45 && age <= 49) {
          score = 3;
        } else if (age >= 50 && age <= 54) {
          score = 6;
        } else if (age >= 55 && age <= 59) {
          score = 8;
        } else if (age >= 60 && age <= 64) {
          score = 10;
        } else if (age >= 65 && age <= 69) {
          score = 12;
        } else if (age >= 70 && age <= 74) {
          score = 14;
        } else if (age >= 75 && age <= 79) {
          score = 16;
        }
        console.log(score);
      } // end question 1 if statement
      if (quesNum == 2) {
        var cholesterol = $(this).val();
        if (cholesterol == "Less than 160") {
          score = score + 0;
        }
        if ((cholesterol == "160-199") && (age >= 20 && age <= 39)) {
          score = score + 4;
        }
        if ((cholesterol == "160-199") && (age >= 40 && age <= 49)) {
          score = score + 3;
        }
        if ((cholesterol == "160-199") && (age >= 50 && age <= 59)) {
          score = score + 2;
        }
        if ((cholesterol == "160-199") && (age >= 60 && age <= 79)) {
          score = score + 1;
        }
        if ((cholesterol == "200-239") && (age >= 20 && age <= 39)) {
          score = score + 8;
        }
        if ((cholesterol == "200-239") && (age >= 40 && age <= 49)) {
          score = score + 6;
        }
        if ((cholesterol == "200-239") && (age >= 50 && age <= 59)) {
          score = score + 4;
        }
        if ((cholesterol == "200-239") && (age >= 60 && age <= 69)) {
          score = score + 2;
        }
        if ((cholesterol == "200-239") && (age >= 70 && age <= 79)) {
          score = score + 1;
        }
        if ((cholesterol == "240-279") && (age >= 20 && age <= 39)) {
          score = score + 11;
        }
        if ((cholesterol == "240-279") && (age >= 40 && age <= 49)) {
          score = score + 8;
        }
        if ((cholesterol == "240-279") && (age >= 50 && age <= 59)) {
          score = score + 5;
        }
        if ((cholesterol == "240-279") && (age >= 60 && age <= 69)) {
          score = score + 3;
        }
        if ((cholesterol == "240-279") && (age >= 70 && age <= 79)) {
          score = score + 2;
        }
        if ((cholesterol == "Greater than 279") && (age >= 20 && age <= 39)) {
          score = score + 13;
        }
        if ((cholesterol == "Greater than 279") && (age >= 40 && age <= 49)) {
          score = score + 10;
        }
        if ((cholesterol == "Greater than 279") && (age >= 50 && age <= 59)) {
          score = score + 7;
        }
        if ((cholesterol == "Greater than 279") && (age >= 60 && age <= 69)) {
          score = score + 4;
        }
        if ((cholesterol == "Greater than 279") && (age >= 70 && age <= 79)) {
          score = score + 2;
        }
        console.log(score);
      } // end question 2 if statement
      if (quesNum == 3) {
        var smoker = $("input[name=smoker]:checked").val();
        //console.log(smoker);
        if (smoker == "No") {
          score = score + 0;
        }
        if ((smoker == "Yes") && (age >= 20 && age <= 39)) {
          score = score + 9;
        }
        if ((smoker == "Yes") && (age >= 40 && age <= 49)) {
          score = score + 7;
        }
        if ((smoker == "Yes") && (age >= 50 && age <= 59)) {
          score = score + 4;
        }
        if ((smoker == "Yes") && (age >= 60 && age <= 69)) {
          score = score + 2;
        }
        if ((smoker == "Yes") && (age >= 70 && age <= 79)) {
          score = score + 1;
        }
        console.log(score);
      } // end question 3 if statement
      if (quesNum == 4) {
        var HDL = $(this).val();
        if (HDL == "60") {
          score = score - 1;
        }
        if (HDL == "50-59") {
          score = score + 0;
        }
        if (HDL == "40-49") {
          score = score + 1;
        }
        if (HDL == "Less than 40") {
          score = score + 2;
        }
        console.log(score);
      } // end question 4 if statement
      if (quesNum == 5) {
        BPMed = $("input[name=medication]:checked").val();
        // May need to put variable in outer function so next if statement can access
      } // end question 5 if statement
      if (quesNum == 6) {
        var SBP = $(this).val();
        if (SBP == "Less than 120") {
          score = score + 0;
        }
        if ((SBP == "120-129") && (BPMed == "Yes")) {
          score = score + 3;
        }
        if ((SBP == "120-129") && (BPMed == "No")) {
          score = score + 1;
        }
        if ((SBP == "130-139") && (BPMed == "Yes")) {
          score = score + 4;
        }
        if ((SBP == "130-139") && (BPMed == "No")) {
          score = score + 2;
        }
        if ((SBP == "140-159") && (BPMed == "Yes")) {
          score = score + 5;
        }
        if ((SBP == "140-159") && (BPMed == "No")) {
          score = score + 3;
        }
        if ((SBP == "Greater than 159") && (BPMed == "Yes")) {
          score = score + 6;
        }
        if ((SBP == "Greater than 159") && (BPMed == "No")) {
          score = score + 4;
        }
        console.log(score);
      } // end question 6 if statement
    });
  } // end quesProcess function

  
$(document).ready(function() {
  // set mainWrap on page load
  setHeight();
  $(window).resize(function() {
    setHeight();
  });
  quesProcess();
});