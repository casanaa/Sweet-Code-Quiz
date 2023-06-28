
var startBtn = document.getElementById("startBtn");
    var time = 75;
    var time_remaining = true;
    var time_start= false;
    var countdownTimer = document.getElementById("countdownTimer");
    var homeContainer =  document.getElementById("homeContainer");
    var quizContainer = document.getElementById("quizContainer");
    var questionHeading = document.getElementById("questionHeading");
    var answerChoiceA = document.getElementById("answerChoiceA");
    var answerChoiceB = document.getElementById("answerChoiceB");
    var answerChoiceC = document.getElementById("answerChoiceC");
    var answerChoiceD = document.getElementById("answerChoiceD");
    var correctAnswer = document.getElementById("correctAnswer");    
    var high_scores= [];
    var output="";

    //
    var score = 0;

    let i = 0;

    //Questions
    var questionArray = [
{
    question: "Question: Commonly used data types DO NOT INCLUDE:",
    imageSrc: "",
    answerChoice: ["A) <Strings>", "B) <Monkey Poo>", "C) <Alerts>", "D) <Bat Signals>"],
    correctAnswer: 2
}, 
{
    question: "Question: The condition in an if / else statement is enclosed within ________?",
    imageSrc: "",
    answerChoice: ["A) Flowers", "B) Cement", "D) Parenthesis", "D) These 4 Walls"],
    correctAnswer: 2
},
{
    question: "Question: Arrays in JavaScript can be used to store __________?",
    imageSrc: "",
    answerChoice: ["A) Numbers and Strings", "B) Other Arrays", "C) Booleans", "D) All of the Above"],
    correctAnswer: 3
}, 
{
    question: "Question: String values must be enclosed within ________ when being assigned to variables.",
    imageSrc: "",
    answerChoice: ["A) A ball of yarn", "B) My Shoe", "C) Quotes", "D) Spider Man's web shooter"],
    correctAnswer: 2
},
{
    question: "Question: What team is the BESt NFL team out there?",
    answerChoice: ["A) KC Chiefs", "B) KC Chiefs", "C) KC CHIEFS", "D) All of the above"],
    correctAnswer: 3
}];

//COUNTDOWN TIMER FUNCTION: set countdown timer and interval. Set time-related valiables.

//change the seconds variable every second.
var countdownTimerInterval = setInterval(setCountdownTimer, 1000);  




function setCountdownTimer() {
    if (time_start)
    time--;
    if(time<= 0) {
    end_quiz();
    time = 0;  
    // clearInterval(countdownTimerInterval);
        //alert user and stop quiz
    }
    document.getElementById("timer").innerHTML = time;
}

// START EVENT LISTENER: When user clicks Start button, start the countdown timer and quiz questions. Add an event listener to each button.
    startBtn.addEventListener("click", function() {
    quizContainer.style.display = "block";
    homeContainer.style.display ="none";
    countdownTimer.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start= true;
});

// QUESTIONS FUNCTION: display questions and multiple-choice answers

function setQuizQuestions() {
        questionHeading.textContent = questionArray[i].question;
        answerChoiceA.textContent = questionArray[i].answerChoice[0]; 
        answerChoiceB.textContent = questionArray[i].answerChoice[1]; 
        answerChoiceC.textContent = questionArray[i].answerChoice[2]; 
        answerChoiceD.textContent = questionArray[i].answerChoice[3]; 
        };

// When user answers a question: then user is presented with another question

// Store user answer choices. Clear elements and update score count.

// Change to next question
answerChoiceA.addEventListener('click', function(event) {
        event.stopPropagation();
        correctAnswer= questionArray[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);
        // check answer
        if (0 === correctAnswer) { 
            // display message to user for 1  second stating if the answer is correct or incorrect
            document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
            setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
            // when user answers a question correctly, increase the score
            score++;    
            // display updated score progress
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 5;
            // when user answers a question inccorrectly, subtract from the time
            document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionArray.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
    });

answerChoiceB.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionArray[i].correctAnswer;
    console.log(correctAnswer);
        if (1 === correctAnswer) { 
            document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
            score++;
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 5;
            document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionArray.length -1) {
        end_quiz();
        } else {
         i++ 
        setQuizQuestions();
        };
    });

answerChoiceC.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionArray[i].correctAnswer;
    console.log(correctAnswer);
    if (2 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionArray.length -1) {
    end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
    });

answerChoiceD.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer= questionArray[i].correctAnswer.value;
    console.log(correctAnswer);
    if (3 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionArray.length -1) {
       end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
});

        //end quiz
        function end_quiz(){
            document.getElementById("game_over").style.display= "block";
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("countdownTimer").style.display= "none";
            document.getElementById("score_keeper").style.display= "none";
            document.getElementById("AnswerResponse").innerHTML="";
            document.getElementById("end_score").innerHTML= score;
            }

        //submit score and initals
            function submit_score() {
             high_scores.push(document.getElementById("initials").value + " " + score);
             view_high_scores();
            }

        // localStorage.setItem("score",JSON.stringify(AnswerResponse));
        // localStorage.setItem("initials", JSON.stringify(initials));
        
        function view_high_scores(){
        
        // changing the screen output
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("game_over").style.display= "none";
            document.getElementById("high_scores_page").style.display="block";
        
            output="";
            for(let k=0; k<high_scores.length; k++){
                 output = output + "  " + high_scores[k];
            }
            document.getElementById("high_scores").innerHTML= output;                
             clear_up();
        }

        // refresh the site to the home container page
        function go_home(){	
                document.getElementById("high_scores_page").style.display= "none";
                document.getElementById("homeContainer").style.display= "block";
                clear_up();
        }
        
        // clear the highscore
        function clear_hs(){
            high_scores = [];
            // high_scores.splice(0, high_scores.length);
          }
        
        // refresh the site 
        function clear_up(){
        
        time=75;
        time_remaining=true;
        time_start=false;
        i=0;
        score=0;
        }