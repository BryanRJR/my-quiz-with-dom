const challenge = document.getElementById("soal");
const startCh = document.getElementById("start");
const restart = document.getElementById("restart");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const directions = document.getElementById("directions");
const scoreSheet = document.getElementById("score");
const home = document.getElementById("home");

//soal
const pA = document.getElementById("A");
const pB = document.getElementById("B");
const pC = document.getElementById("C");
const pD = document.getElementById("D");
let questions = [
    {
        number : "Number: 1",
        question: "If you equal me, and me equal you. then we...",
        pA:"Lovers",
        pB:"Stranger",
        pC:"Friendzone",
        pD:"PHP",
        correct:"A",
        
    }, {
        number : "Number: 2",
        question: "What does a flying elephant look like?",
        pA:"Body",
        pB:"Impossible ",
        pC:"Tail",
        pD:"Dream",
        correct:"B",
        
    }, {
        number : "Number: 3",
        question: "What a color of Indonesia Flags?",
        pA:"White, Green",
        pB:"Yellow, Blue",
        pC:"Red, White",
        pD:"White, Red",
        correct:"C",
        
    }, {
        number : "Number: 4",
        question: "Which is not a programming languages?",
        pA:"Javascript",
        pB:"Dart",
        pC:"HTML",
        pD:"Kotlin",
        correct:"C",
        
    }, {
        number : "Number: 5",
        question: "Who is a 7th Hokage in Konoha",
        pA:"Shikamaru",
        pB:"Kakashi",
        pC:"Tsunade",
        pD:"Naruto",
        correct:"D",
        
    }
];

// init var utk function
const lastAnswer = questions.length -1;
let questionIndex = 0;
let clock;
let score = 0;
let count = 21; 

// obj info
function Prender(){
    let thisQuestion = questions[questionIndex];
    home.innerText = thisQuestion.number;
    question.innerHTML = "<p>" + thisQuestion.question + "</p>"; 
    pA.innerHTML = thisQuestion.pA;
    pB.innerHTML = thisQuestion.pB;
    pC.innerHTML = thisQuestion.pC;
    pD.innerHTML = thisQuestion.pD;
};

function Ch_start(){ 
    home.innerHTML = "CHALLENGE AGAIN?";
    count = 20;
    clock = setInterval(Ch_counter,1000); 
    console.log("challenge started");
    directions.style.display = "none";
    startCh.style.display = "none";  
    Prender(); 
    challenge.style.display= "block"; 

};

//add event listener
startCh.addEventListener("click", Ch_start); 
restart.addEventListener("click", Ch_restart);

function Ch_restart(){
    scoreSheet.style.display = "none";
    score = 0;
    count = 20; 
    questionIndex = 0; 
    console.log("challenge started");
    restart.style.display = "none";    
    Prender(); 
    challenge.style.display= "block"; 

};

//check answer
function checkAnswer(ABCD){
    if(ABCD === questions[questionIndex].correct){ 
        score += 10; 
        console.log("score:" + score);
        localStorage.setItem("score",score);
    } else{
        count = count - 5; 
    };
    
    if(questionIndex < lastAnswer){
        questionIndex++; 
        console.log(questionIndex);
        console.log(lastAnswer);
        Prender()    
    } else{
        count = 21;
        endChallenge();
    };
};
    
//counter
function Ch_counter(){
    if(count <= 20 ){
        if(count >= 0){
            counter.innerHTML = "Timer: " + count; 
            count = count-1; 
        } else{
            count = 21;
            endChallenge();
        }
    }   
};

//show and hide diff elmnt
function endChallenge(){
    home.innerHTML = "CHALLENGE AGAIN?";
    console.log("challenge has ended");
    challenge.style.display= "none";
    restart.style.display="block";
    scoreSheet.innerText = "Score :" + score;
    scoreSheet.style.display = "block";
}

