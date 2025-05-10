

    const questions = [
    {
        question: "Which keyword is used to inherit a class in Java?",
        answers: [
            { text: "this", correct: false },
            { text: "super", correct: false },
            { text: "extends", correct: true },
            { text: "implements", correct: false }
        ]
    },
    {
        question: "Which method is the entry point of a Java program?",
        answers: [
            { text: "start()", correct: false },
            { text: "main()", correct: true },
            { text: "run()", correct: false },
            { text: "init()", correct: false }
        ]
    },
    {
        question: "Which of the following is not a Java primitive type?",
        answers: [
            { text: "int", correct: false },
            { text: "boolean", correct: false },
            { text: "String", correct: true },
            { text: "double", correct: false }
        ]
    },
    {
        question: "Which of these is a valid declaration of a Java array?",
        answers: [
            { text: "int[] arr;", correct: true },
            { text: "arr[] int;", correct: false },
            { text: "int arr;", correct: false },
            { text: "array int[];", correct: false }
        ]
    },
    {
        question: "What is the size of an int variable in Java?",
        answers: [
            { text: "8 bits", correct: false },
            { text: "16 bits", correct: false },
            { text: "32 bits", correct: true },
            { text: "64 bits", correct: false }
        ]
    },
    {
        question: "What is the default value of a boolean variable in Java?",
        answers: [
            { text: "true", correct: false },
            { text: "false", correct: true },
            { text: "0", correct: false },
            { text: "null", correct: false }
        ]
    },
    {
        question: "Which exception is thrown when a divide by zero occurs?",
        answers: [
            { text: "NullPointerException", correct: false },
            { text: "IOException", correct: false },
            { text: "ArithmeticException", correct: true },
            { text: "ArrayIndexOutOfBoundsException", correct: false }
        ]
    },
    {
        question: "Which of the following is used to handle exceptions in Java?",
        answers: [
            { text: "goto", correct: false },
            { text: "try-catch", correct: true },
            { text: "catch-throw", correct: false },
            { text: "if-else", correct: false }
        ]
    },
    {
        question: "Which of the following is not an access modifier in Java?",
        answers: [
            { text: "public", correct: false },
            { text: "protected", correct: false },
            { text: "friendly", correct: true },
            { text: "private", correct: false }
        ]
    },
    {
        question: "Which Java keyword is used to create an object?",
        answers: [
            { text: "class", correct: false },
            { text: "new", correct: true },
            { text: "this", correct: false },
            { text: "void", correct: false }
        ]
    }
];

 const q=document.getElementById("question");
 const a=document.querySelector(".ans");
 const next=document.getElementById("next");
 let current=0;
 let score=0;
 function start()
 {
    current=0;
    score=0;
    next.innerHTML="Next";
    document.querySelector(".app").style.height = "250px";
    show();
 }
 function show()
 {
    reset();
    let currentquestion=questions[current];
    let questionNo=current+1;
    q.innerHTML=questionNo+". "+currentquestion.question;
    currentquestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        a.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectans);
    });

 }
 function selectans(e)
 {
    const select=e.target;
    const iscorrect=select.dataset.correct==="true";
    if(iscorrect)
 {
    select.classList.add("correct");
    score++;
 }else
 {
    select.classList.add("incorrect");
 }
 Array.from(a.children).forEach(button=>{
    if(button.dataset.correct === "true")
 {
    button.classList.add("correct");
 }
 });
 next.style.display="block";
 }
 function reset()
 {
    next.style.display="none";
    while(a.firstChild)
 {
    a.removeChild(a.firstChild);
 }
 }
 function showscore()
 {
    reset();
    q.innerHTML=`You Scored ${score} out of ${questions.length}!`;
    let dis=document.querySelector(".app");
    dis.style.height="150px";
    next.innerHTML="Play Again";
    next.style.display="block";
 }
 function handlenext()
 {
    current++;
    if(current<questions.length)
 {
    show();
 }else
 {
    showscore();
 }
 }
 next.addEventListener("click",()=>{
    if(current<questions.length){
        handlenext();
    }else
    {
        start();
    }
})
 start();