// Pulled HTML elements to use
var timerEl = document.getElementById("timer");
var answerEl = document.getElementById("choices");
var quizEl = document.getElementById("quiz");
var questionNumber = document.getElementById("questionNum")
var questionEl = document.getElementById("question");
var startButton = document.getElementById("submit");
// Creates Choice Elements (buttons)
var allChoices = document.createElement("ul");
var choice1 = document.createElement("button");
var choice2 = document.createElement("button");
var choice3 = document.createElement("button");
var choice4 = document.createElement("button");


// Arrays containing all questions and corresponding answers
var questions = [
        {
                number: 1,
                // Questions
                question: "Inside which element do you put JavaScript?",
                // Choices
                choices: ["<var>", "<script>", "<section>", "<code>"],
                // Answer
                correct: "b",
        },
        {
                number: 2,
                question: "Which is the correct way to write a comment in JavaScript?",
                choices: ["{# ... #}", "<!--- ... ---!>", "// ...", "\\ ..."],
                correct: "c",
        },
        {
                number:3,
                question: "Which of the following is used to identify the array?",
                choices: [" ===", "typeof", "isarrayType()", "=="],
                correct: "b",
        },
        {
                number:4,
                question: "Which one of the following is correct?",
                choices: ["i =+ 1;", "i += 1;", "i = i++1;", "+i+;"],
                correct: "b",
        }
];
// when user clicks button quiz starts and timer starts
document.getElementById("startBtn").addEventListener("click", startGame);

function startGame() {
        // hides start screen 
        // document.getElementById("startScreen").classList.add("hidden");
        // // reveals quiz
        // document.getElementById("quiz").classList.remove("hidden");
        // // displays choices
        // choice1.removeAttribute("style", "display:none");
        // choice2.removeAttribute("style", "display:none");
        // choice3.removeAttribute("style", "display:none");
        // choice4.removeAttribute("style", "display:none");

        counter();
        // populate();
};

// Timing counter function
function counter() {
        var timeLeft = 125;
        var timer = setInterval(function () {
                timerEl.textContent = "Time:" + timeLeft;
                timeLeft--;
                // console.log(timeLeft);
                if (timeLeft === 0) {
                        timerEl.textContent = "";
                        clearInterval(timer);
                }
        }, 1000);
};

// generate a questions by creating an element
// function populate() {
//         questionNumber.textContent = questions[i].number;
//         questionEl



       
// }
// populate();
// using set attribute to hide the previous content
// 