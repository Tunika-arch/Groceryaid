function openBttn () {
// console.log("working")
// shows the hidden content
    document.getElementById('close').style.width = '100%';

}

function closeBttn () {
    // hides the hidden content
    document.getElementById('close').style.width = '0%';
    // remove the click button after the story is read
    document.getElementById('noshow').style.display = 'none'; 
    
}

// Define all variables
const startButton = document.getElementById('start-btn')
const nextButton  = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
// initiate start button
startButton.addEventListener('click', startGame)
// initiae next button
nextButton.addEventListener('click', () => {
    // increase the question by 1
    currentQuestionIndex ++ 
    setNextQuestion()
})
let shuffleQuestion, currentQuestionIndex
const questionElement = document.getElementById('question')
const answersButtonElement = document.getElementById('answer-buttons')


function startGame () {
startButton.classList.add('hide');
// show questions randomly
shuffleQuestion = questions.sort(() => Math.random () -.5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestion[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
const button = document.createElement('button')
button.innerText = answer.text
button.classList.add('btn') 
if(answer.correct) {
    // check if answer is correct, add a data attribute to button
    button.dataset.correct = answer.correct
}
button.addEventListener('click', selectAnswer)
// add to the answer butons
answersButtonElement.appendChild(button)
    })

}

function resetState() {
    // default backgroud color
    clearStatusClass(document.body) 
    // hide nextbutton
    nextButton.classList.add('hide')
    // loop through answer buttons
    while (answersButtonElement.firstChild) {
        answersButtonElement.removeChild(answersButtonElement.firstChild)
    } 
}
function selectAnswer (e) {
    // get the element selected
const selectedButon = e.target
// check for correctness
const correct = selectedButon.dataset.correct
setStusClass(document.body, correct)
// loop t hrough answer buttons
Array.from(answersButtonElement.children).forEach(button =>  {
setStusClass(button, button.dataset.correct)
})
// chech if it's on the last question 
if (shuffleQuestion.length > currentQuestionIndex +1) {
    nextButton.classList.remove('hide')
} else {
    // change text of start button
    startButton.innerText = 'Wanna Try Again?'
    // display 'wanna try again button'
    startButton.classList.remove('hide')
}
}

function setStusClass(element, correct) {
    // return to its original state
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions  = [
{
    question: 'What is the first item?',
    answers:[ 
       { text: 'Yoghurt', correct: true},
    { text:'Tomato', correct: false}
]
},
{
    question: 'What is the second item?',
    answers:[ 
       { text: 'Eggs', correct: false},
    { text:'Bread', correct: true}
]
},
{
    question: 'What is the third item?',
    answers:[ 
       { text: 'Banana', correct: true},
    { text:'Oil', correct: false}
]
},
{
    question: 'What is the fourth item?',
    answers:[ 
       { text: 'Banana', correct: false},
    { text:'Oil', correct: true}
]
},
{
    question: 'What is the fifth item?',
    answers:[ 
       { text: 'Tomato', correct: true},
    { text:'Rice', correct: false}
]
},
{
    question: 'What is the sixth item?',
    answers:[ 
       { text: 'Eggs', correct: true},
    { text:'Tomato', correct: false}
]
},
{
    question: 'What is the seventh item?',
    answers:[ 
       { text: 'Cheese', correct: false},
    { text:'Rice', correct: true}
]
},
{
    question: 'What is the eight item?',
    answers:[ 
       { text: 'Cheese', correct: true},
    { text:'Rice', correct: false}
]
},
{
    question: 'What is  the ninth item?',
    answers:[ 
       { text: 'Rice', correct: false},
    { text:'Vinegar', correct: true}
]
},
{
    question: 'What is the tenth item?',
    answers:[ 
       { text: 'Sugar', correct: true},
    { text:'Vinegar', correct: false}
]
},


]