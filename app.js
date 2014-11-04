// Need to provide option to restart quiz
// Need to provide error message if option is not selected before "next" is hit

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

  // display total number of questions
  $(".questionNumber").append(totalQues);

  
  $("button").click(function() {
    position++;
    quesNum = position + 1; // Why do I need to declare this again here? Shouldn't it be updating the quesNum in the quesProcess function?
  
    // hide previous question
    $(".question").hide();

    // show next question
    if (position < totalQues) {
      $(".question").eq(position).show();
      $(".questionNumber").text("Question " + quesNum + " of " + totalQues);
    } else {
      $(".question, .questionNumber, button").hide();   
    } 

    }); // end button click function

  // score question 
  $("form :input").change(function() {
    //console.log("The value of the answer is: " + $(this).val());
    //console.log(position);
    //console.log(quesNum);
    if(quesNum == 1) {
    	age = $(this).val();
    	
    	if( age >= 20 && age <= 34) {
    		score = -7;
    	} 
    	else if (age >= 35 && age <= 39) {
    		score = -3;
        }
        else if (age >= 40 && age <= 44) {
          score = 0;
        }
        else if (age >= 45 && age <= 49) {
          score = 3;
        }
        else if (age >= 50 && age <= 54) {
          score = 6;
        }
        else if (age >= 55 && age <= 59) {
          score = 8;
        }
        else if (age >= 60 && age <= 64) {
          score = 10;
        }
        else if (age >= 65 && age <= 69) {
          score = 12;
        }
        else if (age >= 70 && age <= 74) {
          score = 14;
        }
        else if (age >= 75 && age <= 79) {
          score = 16;
        }
    } // end question 1 if statement
    if(quesNum == 2) {
    	var cholesterol = $(this).val();
    	if(cholesterol == "Less than 160") {
          score = score + 0;
    	}
    	 if( (cholesterol == "160-199") && (age >= 20 && age <= 39) ) {   
          score = score + 4;
    	} 
        if( (cholesterol == "160-199") && (age >= 40 && age <= 49) ) {   
          score = score + 3;
    	} 
    	if( (cholesterol == "160-199") && (age >= 50 && age <= 59) ) {   
          score = score + 2;
    	}
    	if( (cholesterol == "160-199") && (age >= 60 && age <= 79) ) {   
          score = score + 1;
    	}  
    	if( (cholesterol == "200-239") && (age >= 20 && age <= 39) ) {   
          score = score + 8;
    	} 
    	if( (cholesterol == "200-239") && (age >= 40 && age <= 49) ) {   
          score = score + 6;
    	} 
    	if( (cholesterol == "200-239") && (age >= 50 && age <= 59) ) {   
          score = score + 4;
    	} 
    	if( (cholesterol == "200-239") && (age >= 60 && age <= 69) ) {   
          score = score + 2;
    	} 
    	if( (cholesterol == "200-239") && (age >= 70 && age <= 79) ) {   
          score = score + 1;
    	} 
    	if( (cholesterol == "240-279") && (age >= 20 && age <= 39) ) {   
          score = score + 11;
    	} 
    	if( (cholesterol == "240-279") && (age >= 40 && age <= 49) ) {   
          score = score + 8;
    	} 
    	if( (cholesterol == "240-279") && (age >= 50 && age <= 59) ) {   
          score = score + 5;
    	} 
    	if( (cholesterol == "240-279") && (age >= 60 && age <= 69) ) {   
          score = score + 3;
    	} 
    	if( (cholesterol == "240-279") && (age >= 70 && age <= 79) ) {   
          score = score + 2;
    	} 
    	if( (cholesterol == "Greater than 279") && (age >= 20 && age <= 39) ) {   
          score = score + 13;
    	} 
    	if( (cholesterol == "Greater than 279") && (age >= 40 && age <= 49) ) {   
          score = score + 10;
    	} 
    	if( (cholesterol == "Greater than 279") && (age >= 50 && age <= 59) ) {   
          score = score + 7;
    	} 
    	if( (cholesterol == "Greater than 279") && (age >= 60 && age <= 69) ) {   
          score = score + 4;
    	} 
    	if( (cholesterol == "Greater than 279") && (age >= 70 && age <= 79) ) {   
          score = score + 2;
    	} 
    } // end question 2 if statement
     if(quesNum == 3) {
     
            
     	}

     } // end question 3 if statement
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