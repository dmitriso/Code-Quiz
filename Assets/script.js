// Pulled HTML elements to use
var timerEl = document.getElementById("timer");
var answerEl = document.getElementById("choices");
var quizEl = document.getElementById("quiz");
var questionNumber = document.getElementById("questionNum")
var questionEl = document.getElementById("question");
var startButton = document.getElementById("submit");
var userSubmit = document.getElementById("userSubmit")
var score = 0;
var i = 0;
var timeLeft = 50;
// Creates Choice Elements (buttons)
var allChoices = document.getElementById("choices");
var choice1 = document.getElementById("button1");
var choice2 = document.getElementById("button2");
var choice3 = document.getElementById("button3");
var choice4 = document.getElementById("button4");



// Arrays containing all questions and corresponding answers
var questions = [
        {

                // Questions
                question: "Inside which element do you put JavaScript?",
                // Array storing all choices
                choices: ["<var>", "<script>", "<section>", "<code>"],
                // Answer
                correct: "<script>",
        },
        {

                question: "Which is the correct way to write a comment in JavaScript?",
                choices: ["{# ... #}", "<!--- ... ---!>", "// ...", "\\ ..."],
                correct: "// ...",
        },
        {

                question: "Which of the following is used to identify the array?",
                choices: [" ===", "typeof", "isarrayType()", "=="],
                correct: "typeof",
        },
        {

                question: "Which one of the following is correct?",
                choices: ["i =+ 1;", "i += 1;", "i = i++1;", "+i+;"],
                correct: "i += 1;",
        },
        {
                question: "",
                choices: [],
                correct: "",

        }

];
// when user clicks button quiz starts and timer starts
document.getElementById("startBtn").addEventListener("click", startGame);

function startGame() {
        // hides start screen 
        document.getElementById("startScreen").classList.add("hidden");
        // reveals quiz
        document.getElementById("quiz").classList.remove("hidden");
        // displays choices
        allChoices.removeAttribute("style", "display:none");
        choice1.removeAttribute("style", "display:none");
        choice2.removeAttribute("style", "display:none");
        choice3.removeAttribute("style", "display:none");
        choice4.removeAttribute("style", "display:none");

        counter();
        populate();
};

// Timing counter function
function counter() {

        var timer = setInterval(function () {
                timerEl.textContent = "Time:" + timeLeft;
                timeLeft--;
                // console.log(timeLeft);
                // If time runs out before quiz is done then the test stops
                if (timeLeft === 0) {
                        timerEl.textContent = "";
                        clearInterval(timer);
                        choice1.setAttribute("style", "display:none");
                        choice2.setAttribute("style", "display:none");
                        choice3.setAttribute("style", "display:none");
                        choice4.setAttribute("style", "display:none");
                        allChoices.setAttribute("style", "display:none");
                        document.getElementById("quiz").classList.add("hidden");
                        document.getElementById("endQuiz").classList.remove("hidden");
                        document.getElementById("timer").classList.add("hidden");
                }
        }, 1000);
};

// Generate a questions by creating an element
function populate() {

        // if time allows try to refactor this code with a loop
        questionEl.textContent = questions[i].question;

        choice1.textContent = questions[i].choices[0];
        choice1.setAttribute("value", questions[i].choices[0]);
        choice1.addEventListener("click", checkAnswer);

        choice2.textContent = questions[i].choices[1];
        choice2.setAttribute("value", questions[i].choices[1]);
        choice2.addEventListener("click", checkAnswer);

        choice3.textContent = questions[i].choices[2];
        choice3.setAttribute("value", questions[i].choices[2]);
        choice3.addEventListener("click", checkAnswer);

        choice4.textContent = questions[i].choices[3];
        choice4.setAttribute("value", questions[i].choices[3]);
        choice4.addEventListener("click", checkAnswer);

};
populate();
// Function that checks if answer is correct
function checkAnswer() {
        var correctAnswer = questions[i].correct;
        if (this.value === correctAnswer) {
                score = timeLeft;
                timeLeft += 10;
                console.log(score);
        } else {
                timeLeft -= 10;
                console.log(score);
        }
        i++;
        populate();
        endGame();
}

// A fucntion that ends the game when all questions have been answered
function endGame() {

        if (i === 4) {
                timer.textContent = "";
                clearInterval(timer);
                choice1.setAttribute("style", "display:none");
                choice2.setAttribute("style", "display:none");
                choice3.setAttribute("style", "display:none");
                choice4.setAttribute("style", "display:none");
                allChoices.setAttribute("style", "display:none");
                document.getElementById("quiz").classList.add("hidden");
                document.getElementById("endQuiz").classList.remove("hidden");
                document.getElementById("timer").classList.add("hidden");

        }
}


// When user clicks submit button at end of quiz then user information is stored in local data
document.getElementById("userSubmit").addEventListener("click", function (event) {
        event.preventDefault();
        var userName = document.getElementById("userName").value.trim();
        var user = {
                Name: userName,
                score: score,
        };

        localStorage.setItem("userData", JSON.stringify(user))

});

