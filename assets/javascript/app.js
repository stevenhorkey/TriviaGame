var game = {
    variables : {
        correctAnswers : 0,
        incorrectAnswers : 0,
        alreadyDone : [],
        random : 0
    },
    questions : [
        {
            question : "How does an enlightened one return to the ordinary world?",
            correctAnswer : "A broken mirror never reflects again; fallen flowers never go back to the old branches.",
            correctImg : "https://media.giphy.com/media/3xIxziWvKoRSsCPweX/giphy.gif",
            answers : ["A broken mirror never reflects again; fallen flowers never go back to the old branches.","white","pink","purple"]
        },
        {
            question: "What is the sound of one hand clapping?",
            correctAnswer : "black",
            correctImg : "https://media.giphy.com/media/26gs6Y4Mke6i0MUi4/giphy.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "When the many are reduced to one, to what is the one reduced?",
            correctAnswer : "black",
            correctImg : "https://media.giphy.com/media/cFkiFMDg3iFoI/giphy.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "What is the way?",
            correctAnswer : "An open-eyed man falling into the well.",
            correctImg : "https://media.giphy.com/media/23BST5FQOc8k8/giphy.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "Why do you not enter?",
            correctAnswer : "I do not see myself as outside. Why enter?",
            correctImg : "https://media.giphy.com/media/eXg8Ij7JgnyDu/giphy.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "What is the colour of wind?",
            correctAnswer : "black",
            correctImg : "https://media.giphy.com/media/cKmwAbwsqiQBG/giphy.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "What is Buddha?",
            correctAnswer : "This flax weighs three pounds.",
            correctImg : "https://media.giphy.com/media/7ihrrsltW7wHe/giphy.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "What is the sound of one hand clapping?",
            correctAnswer : "black",

            answers : ["black","white","pink","purple"]
        },
        {
            question: "Why is philosophy like heaping up snow in a silver bowl?",
            correctAnswer : "black",
            correctImg : "https://media.giphy.com/media/zmXtqmGUf8uhW/giphy.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "All is under the law of change. Why?",
            correctAnswer : "In the morning it was raining now the sun's bright.",
            correctImg : "https://media.giphy.com/media/U5EbTzI11iWSA/giphy.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "You attain enlightenment through intense practice but it doesn't change, it remains.",
            correctAnswer : "Stand up, run around ... ",
            correctImg : "https://media.giphy.com/media/Sux3kje9eOx1e/giphy.gif",
            answers : ["Stand up, run around ... ","white","pink","purple"]
        },
        {
            question: "What is it that even an explorer or scientist cannot evade?",
            correctAnswer : "In the morning it was raining now the sun's bright.",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "All is under the law of change. Why?",
            correctAnswer : "In the morning it was raining now the sun's bright.",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "All is under the law of change. Why?",
            correctAnswer : "In the morning it was raining now the sun's bright.",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "All is under the law of change. Why?",
            correctAnswer : "In the morning it was raining now the sun's bright.",
            answers : ["black","white","pink","purple"]
        },
    ],
    functions : {
        initGame : function(){
            // Creates Start Button
            var startButton = $("<button></button>").addClass('start-button').html("<h3>Start Game!</h3>");
            $('.button').append(startButton);
            // Sets scores to 0
            correctAnswers = 0;
            incorrectAnswers = 0;
            alreadyDone = [];
            // When start is clicked, game starts
            $('.start-button').on("click", function(){
                $('div').off("click");
                $('.start-button').remove();
                game.functions.chooseQuestion();
            });
        },
        chooseQuestion : function(){
            $('.section').children().remove();
            random = Math.floor(Math.random() * game.questions.length);
            alreadyDone.push(random);
            
            for(var i = 0; i < game.questions.length; i++){
                if(alreadyDone[i] !== random){
                    this.displayQuestion(random)
                } else {
                    this.chooseQuestion;
                }
            }
        },
        displayQuestion : function(){
            
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

            // When user clicks on a possible answer, this checks if it is correct and if so, adds one to the correct answers score. If not, it adds one to the incorrect answers score. Eitherway the correct answer is displayed.
            $('.possible-answer').on("click",function(){
                clearTimeout(timeOut);
                if($(this).text() === game.questions[random].correctAnswer){
                    console.log("nope")
                    console.log($(this).text());
                    correctDisplay();
                    $('.question').text("Correct!");
                    correctAnswers++
                } else{
                    correctDisplay();
                    $('.question').text("Incorrect! The correct answer was: " + game.questions[random].correctAnswer);
                    incorrectAnswers++
                }
            })

            function correctDisplay() {
                $('.question').text("The correct answer was: " + game.questions[random].correctAnswer);
                $('.possible-answer').remove();
                $('.section').children().remove();
                var image = $('<img/>').attr('src',game.questions[random].correctImg);
                $('.answers').append(image);
                setTimeout(game.functions.chooseQuestion,1000 * 5);
            }

            var timeOut = setTimeout(correctDisplay, 1000 * 5);
            timeOut;
                
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