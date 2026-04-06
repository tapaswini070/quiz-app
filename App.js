const quizQuestions = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Rome",
    correct: "c"
  },
  {
    question: "Which planet is known as the Red Planet?",
    a: "Earth",
    b: "Mars",
    c: "Jupiter",
    d: "Saturn",
    correct: "b"
  },
  {
    question: "Which language is used for web apps?",
    a: "Python",
    b: "Java",
    c: "JavaScript",
    d: "C++",
    correct: "c"
  },
  {
    question: "What does CSS stand for?",
    a: "Computer Style Sheets",
    b: "Cascading Style Sheets",
    c: "Creative Style System",
    d: "Colorful Style Sheets",
    correct: "b"
  },
  {
    question: "Which HTML tag is used to create a link?",
    a: "<link>",
    b: "<a>",
    c: "<href>",
    d: "<url>",
    correct: "b"
  },
  {
    question: "Which company developed JavaScript?",
    a: "Microsoft",
    b: "Google",
    c: "Netscape",
    d: "Apple",
    correct: "c"
  }
];

let index=0;
let total= quizQuestions.length;
let right=0;
let wrong=0;
const queBox=document.getElementById("questions");
const options=document.querySelectorAll(".option")
const  loadQuestions=()=>{
    if(index==total){
        return endQuiz();
    }
    reset();
    const data=quizQuestions[index] 
    queBox.innerText=`${index+1}) ${data.question}`;
    options[0].nextElementSibling.innerText=data.a;
    options[1].nextElementSibling.innerText=data.b;
    options[2].nextElementSibling.innerText=data.c;
    options[3].nextElementSibling.innerText=data.d;
}
const submitQuiz=()=>{
    const data =quizQuestions[index]
    const ans=getAnswer()
    if(ans===data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestions();
    return;
}
const getAnswer=()=>{
    let answer;
    
    options.forEach((option)=>{
        if(option.checked){
            answer= option.value;
            
        }
    })
    return answer;
}
const reset=()=>{
    options.forEach((option)=>{
        option.checked= false
    })
}
const endQuiz=()=>{
    
    document.querySelector(".box").innerHTML=`
    <div class="result">
    <h3>Thank you for playing the Quiz</h3>
    <h2>${right} / ${total} is correct</h2><br/>
    <p>Right=${right} & Wrong=${wrong}</p>
    </div>`
    
}
loadQuestions();