// Game Object
// Game variables and questions to choose from
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
            correctAnswer : "A broken mirror never reflects again; fallen flowers never go back to the old branches",
            correctImg : "http://moziru.com/images/drawn-lines-transparent-11.gif",
            answers : ["A broken mirror never reflects again; fallen flowers never go back to the old branches","A strong yawn","The grass is too tall for that","The thoughts taste rather thorough"]
        },
        {
            question: "What is the sound of one hand clapping?",
            correctAnswer : "Sneezing on a hankerchief and placing it on the turtle",
            correctImg : "http://www.mathematik.com/4DCube/movie4d.gif",
            answers : ["Sneezing on a hankerchief and placing it on the turtle","Snap","Metta Panna","Swoosh"]
        },
        {
            question: "When the many are reduced to one, to what is the one reduced?",
            correctAnswer : "None yet all in form and void",
            correctImg : "https://media.giphy.com/media/Wh5BnkKZnZVIc/giphy.gif",
            answers : ["None yet all in form and void","A mother and her babe walk softly","As the trees brush the side of the abandoned house","All in terms of some"]
        },
        {
            question: "What is the way?",
            correctAnswer : "An open-eyed man falling into the well",
            correctImg : "https://s-media-cache-ak0.pinimg.com/originals/7f/85/fa/7f85fa5102dd19a06b16eef95b898b3d.gif",
            answers : ["An open-eyed man falling into the well","If I could be sure I would know","Some wane, some wax","A koala climbing the yard stick out back"]
        },
        {
            question: "Why do you not enter?",
            correctAnswer : "I do not see myself as outside. Why enter?",
            correctImg : "https://media.giphy.com/media/V0QgLa6vw3ZTO/giphy.gif",
            answers : ["I do not see myself as outside. Why enter?","Right in two","Because you surely could if I did","The morose colour of being itself"]
        },
        {
            question: "What is the colour of wind?",
            correctAnswer : "One and the same as the color of sand",
            correctImg : "https://data.whicdn.com/images/231236201/original.gif",
            answers : ["One and the same as the color of sand","If a scream could perturb eternity","All the lives of quite men","An impression on a yard of wax"]
        },
        {
            question: "What is Buddha?",
            correctAnswer : "This flax weighs three pounds",
            correctImg : "https://media.giphy.com/media/GW90ZhpdFQ9by/source.gif",
            answers : ["This flax weighs three pounds","Oh the wonders of the water","A clear and precise man on the mountain top","Sighs can only express the profundity of the void"]
        },
        {
            question: "Where does one find their parents before they were born?",
            correctAnswer : "Under the portch",
            correctImg : "https://media.giphy.com/media/12lFldfuLH3HUc/source.gif",
            answers : ["Under the portch","Inside the food of the stray dog","Can I get a sneeze please?","Half-time"]
        },
        {
            question: "Why is philosophy like heaping up snow in a silver bowl?",
            correctAnswer : "Your canteen is leaking",
            correctImg : "https://s-media-cache-ak0.pinimg.com/originals/ba/e4/0c/bae40c718bf3e7860abe5591b4aac3b4.gif",
            answers : ["Your canteen is leaking","Some say it's merely a lost cause","Why the will to truth?","All snow melts and dissapears by the light of the sun"]
        },
        {
            question: "All is under the law of change. Why?",
            correctAnswer : "In the morning it was raining now the sun's bright",
            correctImg : "https://s-media-cache-ak0.pinimg.com/originals/fa/5c/a0/fa5ca02aea7684f58e947f12152fcfaa.gif",
            answers : ["In the morning it was raining now the sun's bright","Cry as I do","Pink","Impermanance is the only constant"]
        },
        {
            question: "You attain enlightenment through intense practice but it doesn't change, it remains.",
            correctAnswer : "Stand up, run around ...",
            correctImg : "https://media.giphy.com/media/VCITpPB0t9kic/source.gif",
            answers : ["Stand up, run around ...","Sit, sing in sound...","Tastes of almond","Red is the sight I desire"]
        },
        {
            question: "What is it that even an explorer or scientist cannot evade?",
            correctAnswer : "In the morning it was raining now the sun's bright",
            correctImg : "https://media.giphy.com/media/3hc1IgATIp5wk/giphy.gif",
            answers : ["In the morning it was raining now the sun's bright","The ledge of fallibility","Testing the dark waters of the unknown","Leaves of green"]
        },
        {
            question: "How fast does the dove retreat into its wing?",
            correctAnswer : "Just in time to catch the mouse",
            correctImg : "https://s-media-cache-ak0.pinimg.com/originals/a8/d8/4c/a8d84c93f089b1c73ad234a137c0a205.gif",
            answers : ["Just in time to catch the mouse","A sight for sorry eyes","Ba ba ba dum","Lakes filled with rock moss"]
        },
        {
            question: "Where is the nest of the last koan?",
            correctAnswer : "Relatively spontaneous",
            correctImg : "https://s-media-cache-ak0.pinimg.com/originals/67/21/6a/67216aed87816a4cae60df0e6c1e02d3.gif",
            answers : ["Chant after chant I am left unsatisfied","Turning of the tables","A thrice blink of the eyes","Relatively spontaneous"]
        },
        {
            question: "Could I ever speak the same sentence again before your eye's opened for the first time?",
            correctAnswer : "Maybe",
            correctImg : "https://s-media-cache-ak0.pinimg.com/originals/b8/f5/76/b8f576804829af4c2e0547bf25093a53.jpg",
            answers : ["Maybe","A rather high octave","The dimensions of bent steel","Once upon a time"]
        },
    ],
    functions : {
        // Initializes the game and all functions within it
        initGame : function(){
            $('.koan-info').show();
            // Sets scores and called questions to 0
            correctAnswers = 0;
            incorrectAnswers = 0;
            alreadyDone = [];
            // Creates Start Button and adds it to screen
            var button = $("<button></button>").html("<h3>Start Game</h3>");
            $('.button').append(button);
            // Hides text from previous game played
            $('.final').hide();
            // Prepares image to be shown after game restarts
            $('.image').show();
            // When start is clicked, game starts
            $('button').on("click", function(){
                $('.koan-info').hide();
                $('div').off("click");
                $('button').hide();
                game.functions.chooseQuestion();
            });
        },
        chooseQuestion : function(){
            // Sets scores to 0
            var correctAnswers = 0;
            var incorrectAnswers = 0;
            // Removes previous question is there was one
            $('.section').children().remove();
            // Gets a random number to call corresponding question
            random = Math.floor(Math.random() * game.questions.length);
            // If the question has already been called, than choose a different question. If all have been called, move onto the end screen
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
            // Prepares clock to run
            var clock = true;
            // Sets length of time user has to answer question
            var questionTime = 20;
            // Removes the correct image from previous question
            $('.correctImg').remove();
            // Picks and displays/logs the random question
            var questionPick = game.questions[random].question;
            $('.question').append("<span></span>").addClass('.current-question').text(questionPick);
            console.log(questionPick); 

            // sets question answers to variable answers.
            var answers = game.questions[random].answers;
            console.log(answers);
            // This shuffles the array so that the answers displayed are not shown in the same position everytime.
            answers.sort(function(){ 
                return 0.5 - Math.random() 
            });
            // Displays possible answers to screen for user to choose from.
            for(var i = 0;i < answers.length ; i++){
                var temp = $("<li></li>").addClass("possible-answer").text(answers[i]);
                $('.answers-list').append(temp);
            }

            // Clock preparation
            $('.clock').text("00:"+questionTime.toString());
            $('.clock').show();
            setTimeout(countDown,1000);
            // Function to change clock text color and tick down
            function countDown(){
                if(clock){
                    $('.clock').show();
                    questionTime--;
                    if(questionTime > 0){
                        setTimeout(countDown,1000);
                    }
                    questionTime = questionTime.toString();
                    if(questionTime < 10){
                        $('.clock').text("00:0"+questionTime);
                        $('.clock').css("color", "rgb(88, 22, 22)");
                    } else {
                        $('.clock').text("00:"+questionTime); 
                        $('.clock').css("color", "black");
                    }
                } else {
                    return;
                }
            }
            // When user clicks on a possible answer, this checks if it is correct and if so, adds one to the correct answers score. If not, it adds one to the incorrect answers score. Eitherway the correct answer is displayed.
            $('.possible-answer').on("click",function(){
                clearTimeout(timeOut);
                if($(this).text() === game.questions[random].correctAnswer){
                    console.log("correct");
                    console.log($(this).text());
                    correctDisplay();
                    $('.question').text("Correct...");
                    correctAnswers = correctAnswers + 1;
                    incorrectAnswers = incorrectAnswers - 1;
                } else{
                    correctDisplay();
                    $('.question').text("Incorrect... The correct answer was: " + game.questions[random].correctAnswer);
                }
            })

            function correctDisplay() {
                clock = false;
                $('.clock').hide();
                incorrectAnswers = incorrectAnswers + 1;
                $('.question').text("The correct answer was: " + game.questions[random].correctAnswer);
                $('.possible-answer').hide();
                $('.section').children().remove();
                var image = $('<img/>').attr('src',game.questions[random].correctImg);
                image.addClass('correctImg');
                $('.image').append(image);
                $('div').off("click");
                setTimeout(game.functions.chooseQuestion,1000 * 4);
            }
            // If no answer is choosen, this setTimeout never gets cleared and leads to the correct display and an increment in incorrect answers.
            var timeOut = setTimeout(correctDisplay, 1000 * questionTime);
            timeOut;
        },
        // Endscreen function which displays game over and the incorrect as well as correct answers. The previous gif keeps running.
        endScreen : function(){
            $('.question').text('Game Over...');
            $('.final').show();
            $('.correctCount').text("Correct Answers: "+correctAnswers.toString());
            $('.incorrectCount').text("Incorrect Answers: "+incorrectAnswers.toString());
            var button = $("<button></button>").html("<h3>Restart</h3>");
            $('.button').append(button);
            // When restart is clicked, game restarts
            $('button').on("click", function(){
                $('div').off("click");
                $('button').remove();
                $('.question').text("")
                $('.image').hide()
                game.functions.initGame();
            });
        },
        hoverChange : function(){
            // Changes background color and styling when hover on main title. The game can be restarted at any point by clicking on the main title
            $('a').hover(function(){
                $('body').animate({
                    backgroundColor: 'rgba(88, 22, 22, 1.0)',
                });
                $('.enso').animate({
                    opacity: '1.0',
                });
                $('.text-section').fadeOut()
                $('.image').fadeOut()
            },function(){
                $('body').animate({
                    backgroundColor: 'rgb(245, 238, 229)',
                });
                $('.enso').animate({
                    opacity: '0.2',
                }, "fast");
                $('.text-section').fadeIn();
                $('.image').fadeIn();  
            });
        }
    }
}

$(document).ready(function() {
    game.functions.initGame();
    game.functions.hoverChange();
})