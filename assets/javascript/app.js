var game = {
    variables : {
        correctAnswers : 0,
        incorrectAnswers : 0,
        alreadyDone : [],
        random : 0,
        questionTime : 0,
    },
    questions : [
        {
            question : "How does an enlightened one return to the ordinary world?",
            correctAnswer : "A broken mirror never reflects again; fallen flowers never go back to the old branches.",
            correctImg : "http://moziru.com/images/drawn-lines-transparent-11.gif",
            answers : ["A broken mirror never reflects again; fallen flowers never go back to the old branches.","white","pink","purple"]
        },
        {
            question: "What is the sound of one hand clapping?",
            correctAnswer : "Sneezing on a hankerchief and placing it on the turtle.",
            correctImg : "http://www.mathematik.com/4DCube/movie4d.gif",
            answers : ["Sneezing on a hankerchief and placing it on the turtle.","white","pink","purple"]
        },
        {
            question: "When the many are reduced to one, to what is the one reduced?",
            correctAnswer : "black",
            correctImg : "https://media.giphy.com/media/Wh5BnkKZnZVIc/giphy.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "What is the way?",
            correctAnswer : "An open-eyed man falling into the well.",
            correctImg : "https://s-media-cache-ak0.pinimg.com/originals/7f/85/fa/7f85fa5102dd19a06b16eef95b898b3d.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "Why do you not enter?",
            correctAnswer : "I do not see myself as outside. Why enter?",
            correctImg : "https://media.giphy.com/media/V0QgLa6vw3ZTO/giphy.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "What is the colour of wind?",
            correctAnswer : "black",
            correctImg : "https://data.whicdn.com/images/231236201/original.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "What is Buddha?",
            correctAnswer : "This flax weighs three pounds.",
            correctImg : "https://media.giphy.com/media/GW90ZhpdFQ9by/source.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "What is the sound of one hand clapping?",
            correctAnswer : "black",
            correctImg : "https://media.giphy.com/media/12lFldfuLH3HUc/source.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "Why is philosophy like heaping up snow in a silver bowl?",
            correctAnswer : "black",
            correctImg : "https://s-media-cache-ak0.pinimg.com/originals/ba/e4/0c/bae40c718bf3e7860abe5591b4aac3b4.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "All is under the law of change. Why?",
            correctAnswer : "In the morning it was raining now the sun's bright.",
            correctImg : "https://s-media-cache-ak0.pinimg.com/originals/fa/5c/a0/fa5ca02aea7684f58e947f12152fcfaa.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "You attain enlightenment through intense practice but it doesn't change, it remains.",
            correctAnswer : "Stand up, run around ... ",
            correctImg : "https://media.giphy.com/media/VCITpPB0t9kic/source.gif",
            answers : ["Stand up, run around ... ","white","pink","purple"]
        },
        {
            question: "What is it that even an explorer or scientist cannot evade?",
            correctAnswer : "In the morning it was raining now the sun's bright.",
            correctImg : "https://media.giphy.com/media/3hc1IgATIp5wk/giphy.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "All is under the law of change. Why?",
            correctAnswer : "In the morning it was raining now the sun's bright.",
            correctImg : "https://s-media-cache-ak0.pinimg.com/originals/a8/d8/4c/a8d84c93f089b1c73ad234a137c0a205.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "All is under the law of change. Why?",
            correctAnswer : "In the morning it was raining now the sun's bright.",
            correctImg : "https://s-media-cache-ak0.pinimg.com/originals/67/21/6a/67216aed87816a4cae60df0e6c1e02d3.gif",
            answers : ["black","white","pink","purple"]
        },
        {
            question: "All is under the law of change. Why?",
            correctAnswer : "In the morning it was raining now the sun's bright.",
            correctImg : "http://37.media.tumblr.com/491dc6f017786ed1ea192bd9b4289aae/tumblr_n6vuiwKOoA1rat0tqo1_500.gif",
            answers : ["black","white","pink","purple"]
        },
    ],
    functions : {
        initGame : function(){
            // Creates Start Button
            var startButton = $("<button></button>").addClass('start-button').html("<h3>Start Game</h3>");
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
            if(!alreadyDone.includes(random)){
                game.functions.displayQuestion(random);
                alreadyDone.push(random);    
            } else if(game.questions.length === alreadyDone.length){
                game.functions.endScreen();
            }
            else {
                game.functions.chooseQuestion();
            }
        },
        displayQuestion : function(random){
            var questionTime = 20
            $('.correctImg').remove();
            // Picks and displays/logs the random question
            var questionPick = game.questions[random].question;
            $('.question').append("<span></span>").addClass('.current-question').text(questionPick);
            console.log(questionPick); 

            // Creates a div for each possible answer and displays it under the current question.
            var answers = game.questions[random].answers;
            console.log(answers);
            // This shuffles the array so that the answers displayed are not shown in the same position everytime.
            answers.sort(function() { return 0.5 - Math.random() });
            for(var i = 0;i < answers.length ; i++){
                var temp = $("<li></li>").addClass("possible-answer").text(answers[i]);
                $('.answers-list').append(temp);
            }

            // Clock tick
            $('.clock').text("00:"+questionTime.toString())
            $('.clock').show();
            setTimeout(countDown,1000);

            function countDown(){
            questionTime--;
            if(questionTime > 0){
                setTimeout(countDown,1000);
            }
            questionTime = questionTime.toString();
            $('.clock').text("00:"+questionTime);
            }

            // When user clicks on a possible answer, this checks if it is correct and if so, adds one to the correct answers score. If not, it adds one to the incorrect answers score. Eitherway the correct answer is displayed.
            $('.possible-answer').on("click",function(){
                clearTimeout(timeOut);
                if($(this).text() === game.questions[random].correctAnswer){
                    console.log("correct")
                    console.log($(this).text());
                    correctDisplay();
                    $('.question').text("Correct...");
                    correctAnswers++
                    incorrectAnswers--
                } else{
                    correctDisplay();
                    $('.question').text("Incorrect... The correct answer was: " + game.questions[random].correctAnswer);
                }
            })

            function correctDisplay() {
                $('.clock').hide();
                incorrectAnswers++                
                $('.question').text("The correct answer was: " + game.questions[random].correctAnswer);
                $('.possible-answer').remove();
                $('.section').children().remove();
                var image = $('<img/>').attr('src',game.questions[random].correctImg);
                image.addClass('correctImg')
                $('.image').append(image);
                $('div').off("click");
                setTimeout(game.functions.chooseQuestion,1000 * 5);
            }

            var timeOut = setTimeout(correctDisplay, 1000 * questionTime);
            timeOut;
        },
        endScreen : function(){
            $('.question').text('Game Over...')
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