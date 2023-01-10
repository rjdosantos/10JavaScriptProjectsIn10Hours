const quizData = [
  {
    question: "Quando anos tinha o pelé?",
    a: "10",
    b: "17",
    c: "27",
    d: "110",
    correct: 'c'
  }, 
  {
    question: "Idade do bostil?",
    a: "10",
    b: "17",
    c: "27",
    d: "110",
    correct: 'c'
  },
  {
    question: "Idade do wolverine?",
    a: "10",
    b: "17",
    c: "27",
    d: "110",
    correct: 'c'
  },
  {
    question: "Minha idade?",
    a: "29",
    b: "33",
    c: "55",
    d: "24",
    correct: 'c'
  }
]

const questionEl = document.getElementById("question")

const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");


let contagemAtual = 0;

loadQuiz();
function loadQuiz() {
  const quizDataAtual = quizData[contagemAtual];
  console.table(quizDataAtual);
  questionEl.innerHTML = quizDataAtual.question;

  a_text.innerHTML = quizDataAtual.a;
  b_text.innerHTML = quizDataAtual.b;
  c_text.innerHTML = quizDataAtual.c;
  d_text.innerHTML = quizDataAtual.d;
  
}

function votar() {
  contagemAtual++;

loadQuiz();
}



// Todo: mostrar os resultados
// Pegar os valores corretos