const questions  = [
    {
        question: "What does the \"DOM\" stand for in JavaScript?",
        choices: ["Document Object Model", "Data Object Management", "Desktop Object Model", "Dynamic Object Mapping"],
        answer: " Document Object Model"
    },
    {
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        choices: [" push()", "pop()", "shift()", " unshift()"],
        answer: "push()"
    },
    {
        question: "What is the purpose of the \"typeof\" operator in JavaScript?",
        choices: ["To declare a new variable", "To assign a value to a variable", "To check the type of a variable or expression","None of the above"],
        answer: "To check the type of a variable or expression"
    }
];
let currentQuestion = 0;
let score = 0;
function getRandomQuestion(questions) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * questions.length);

    // get random item
    const randomQuestion = questions[randomIndex].question;
    const mcq=questions[randomIndex].choices;
    document.querySelector('.question_box').innerHTML =randomQuestion;

    for (let i=0; i<3; i++){

}

getRandomQuestion(questions);