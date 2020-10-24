// Setting Timer for the trivia

var initials = document.querySelector("#initials")
var submit_initials = document.querySelector("#submit_initials")

var timerCount = 100
var timerEl = document.querySelector("#timer")

timerEl.textContent = timerCount

var timer = window.setInterval(function () {
  timerCount--;
  timerEl.textContent = timerCount

  if (timerCount === 0) {
    clearInterval(timer)
  }
}, 1000)

// Setting up trivia questions in a function and objects including question, choices and correct answer

var questions = [
  {
    q: "Red grapes can make white wine. True or False??",
    choices: ["True", "False"],
    a: "True"
  },
  {
    q: "Wines get darker as they age. True or False?",
    choices: ["True", "False"],
    a: "False"
  },
  {
    q: "British wine is another name for English wine. True or False?",
    choices: ["True", "False"],
    a: "False"
  },
  {
    q: "The wine with the fewest calories is dry. True or False?",
    choices: ["True", "False"],
    a: "True"
  },
  {
    q: "Because of its alcohol content, wine has more calories than the same amount of grape juice. True or False?",
    choices: ["True", "False"],
    a: "False"
  }
]

// Setting the question number to 0 before the loop starts
var questionsPointer = 0

// declaring all IDs from HTML to use into JS

var question = document.querySelector("#questions")
var optionA = document.querySelector("#optionA")
var optionB = document.querySelector("#optionB")
var results = document.querySelector("#results")

// initially set the initial name and submit button hidden
initials.style.visibility = "hidden";
submit_initials.style.visibility = "hidden";

// declaring the function a with to start a loop for the questionnaire

function setQuestions() { 
  
  if (questionsPointer === questions.length) {
    
    clearInterval(timer)
    alert("You are done with " + timerCount + " time left")

    initials.style.visibility = "visible";
    submit_initials.style.visibility = "visible";

    question.style.visibility = "hidden";
    optionA.style.visibility = "hidden";
    optionB.style.visibility = "hidden";

    submit_initials.addEventListener("click", function(){ 
      results.textContent = "Hey " + initials.value + ", your score is " + timerCount + "!";
    
      initials.style.visibility = "hidden";
    submit_initials.style.visibility = "hidden";

    });
  

    return

  }


  question.textContent = questions[questionsPointer].q
  optionA.textContent = questions[questionsPointer].choices[0]
  optionB.textContent = questions[questionsPointer].choices[1]
  

}

// run this trivia questions in a series
setQuestions()

// alerting if the answer is correct and we're moving on to the next question

optionA.addEventListener("click", function () {
  if (optionA.getAttribute("data-answer") === questions[questionsPointer].a) {
    alert("This is correct, timer stays same. Moving on to next Q")
    questionsPointer++
    setQuestions()
  } else {
    alert("Wrong answer. Penalizing 10 seconds. Moving on to next Q")
    timerCount -= 10
    questionsPointer++
    setQuestions()
  }
})

// alreting if the answer is wrong 10 seconds have been subtracted from the timer

optionB.addEventListener("click", function () {
  if (optionB.getAttribute("data-answer") === questions[questionsPointer].a) {
    alert("This is correct, timer stays same. Moving on to next Q")
    questionsPointer++
    setQuestions()
  } else {
    alert("Wrong answer. Penalizing 10 seconds. Moving on to next Q")
    timerCount -= 10
    questionsPointer++
    setQuestions()
  }
})