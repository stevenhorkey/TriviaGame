var game = {
    variables : {
        correctAnswers : 0,
        incorrectAnswers : 0,
    },
    questions : [
        {
            question: "What color is a fire truck?",
            correctAnswer : "black",
            correctImg : "",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "What color is a cop car?",
            correctAnswer : "black",
            answers : ["black","white","pink","purple"]
        },
    ],
    functions : {
        initGame : function(){
            // Creates Start Button
            var startButton = $("<button></button>").addClass('start-button').html("<h3>Start Game!</h3>");
            $('.button').append(startButton);
            // When start is clicked, game starts
            $('.start-button').on("click", function(){
                $('div').off("click");
                game.functions.nextQuestion();
            });
        },
        nextQuestion : function(){
            $('.start-button').remove();
            // Picks a random number
            var random = Math.floor(Math.random() * game.questions.length);
            // Picks and displays/logs the random question
            var questionPick = game.questions[random].question;
            $('.question').append("<span></span>").addClass('.current-question').text(questionPick);
            console.log(questionPick); 

            // Creates a div for each possible answer and displays it under the current question.
            var answers = game.questions[random].answers;
            console.log(answers);
            for(var i = 0;i < answers.length ; i++){
                var temp = $("<div></div>").addClass("possible-answer").text(answers[i]);
                $('.answers').append(temp);
            }

            $('.possible-answer').on("click",function(){
                if(this !== game.questions[random].correctAnswer){
                    console.log("nope")
                    console.log(this)
                } else{
                    $('.possible-answers').remove();
                    $('.current-question').text("Correct!");
                    $('.answers').append("<img/>").attr('src',game.questions[random].correctImg);
                }
            })


        },
        endScreen : function(){

        }
    }
}

$(document).ready(function() {
    game.functions.initGame();
})






/*
Generate a series of questions and answers to use in the game

Have a start screen the the user to initiate the game
    - Create a start button div in jquery and display it in html

Randomly select one question and its corresponding answers to use and display to the user for a set amount of time

If the user chooses correct in the time alloted, display a congragulations page for a few seconds and then move onto the next question, all the while making sure that the next quesion cannot be the same as the first. 

If the user chooses incorrect or doesnt answer in time, then tell them that they didn't choose the right answer and display the correct on instead. 

Once all the questions are run through, display a final page with the number of correct answers, the number of incorrect answers, and the option to restart the game without reloading the page.

*/