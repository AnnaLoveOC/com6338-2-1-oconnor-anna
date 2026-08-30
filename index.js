// Your code here

// variable containing the array of question objects
    //question - This should be a string containing the question text.
    //answer - This should be a boolean containing the correct answer.
var questionsArr = [
    //Question 1
    {
        question: "The Earth revolves around the Sun.",
        answer: true,
    },
    
    //Question 2 
    {
        question: "There are 10 days in a week.",
        answer: false,
    },

    //Question 3
    {
        question: "Water freezes at 32°F.",
        answer: true,
    },

    //Question 4
    {
        question: "A triangle has four sides.",
        answer: false,
    },

    //Question 5
    {
        question: "Red and blue mixed together makes purple.",
        answer: true,
    },
    
];


//function that will contain the code for the quiz
function runQuiz() {
    //this counts the number of correct answers
    var correctAnswers = 0;

    for (var i=0; i < questionsArr.length; i++) {
        var answer = confirm(questionsArr[i].question);

        if (answer === questionsArr[i].answer) {
            correctAnswers++;
        }

    }

    var percentCorrect = (correctAnswers / questionsArr.length) * 100;

    alert("Your score is: " + Math.round(percentCorrect) + "%");


};