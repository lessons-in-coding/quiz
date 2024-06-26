let questions = [
  {
    question: "မြန်မာနိုင်ငံ၏မြို့တော်ကို နေပြည်တော်-ဟု မည်သည့်ခုနှစ်တွင် စတင်ကြေညာခဲ့ပါသနည်း?",
    options: ["2000", "1990", "2006", "2012"],
    answer: "2006",
  },
  {
    question: "Burma-အမည်ကို မည်သည့်ခုနှစ်တွင် Myanmar-ဟု စတင်ပြောင်းလဲခဲ့ပါသနည်း?",
    options: ["1988", "1989", "2007", "2010"],
    answer: "1989",
  },
  {
    question: "မြန်မာနိုင်ငံတော် ပြည်နယ်နှင့်တိုင်း(၁၄)ခုကို ကိုယ်စားပြုသော စပါးနှံအလံကို သုံးရောင်ခြယ် အလယ်ကြယ်တစ်ပွင်းအလံနှင့် မည်သည့်ခုနှစ်မှ စတင်ပြောင်းလဲခဲ့ပါသနည်း?",
    options: ["1988", "1990", "2010", "2014"],
    answer: "2010",
  },
  {
    question: "မြန်မာနိုင်ငံ၌ ၁ပြား, ၅ပြား, ၁၀ပြား, ၂၅ပြား, ၅၀ပြား, ၁ိ, ၁ကျပ်, ၅ကျပ်, ၁၀ကျပ်, ၁၅ကျပ်, ၂၅ကျပ်, ၃၅ကျပ်, ၄၅ကျပ်, ၅၀ကျပ်, ၇၅ကျပ်, ၉၀ကျပ်, ၁၀၀ကျပ်, ၂၀၀ကျပ်, ၅၀၀ကျပ်, ၁၀၀၀ကျပ်, ၅၀၀၀ကျပ်, ၁၀၀၀၀ကျပ်, ၂၀၀၀၀ကျပ်-ဟူ၍ရှိရာ ငွေကြေးအချို့ကို တရားမဝင်ငွေကြေးများဟု မည်သူက ကြေညာခဲ့ပါသနည်း?",
    options: ["ဦးနေဝင်း", "ဦးစောမောင်", "ဦးသန်းရွှေ", "ဦးသိန်းစိန်"],
    answer: "ဦးစောမောင်",
  },
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  const username = document.getElementById("username").value;
  if (username.trim() === "") {
    alert("Please enter your name.");
    return;
  }
  questions = shuffleArray(questions);
  document.getElementById("start-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  displayQuestion();
}

// function displayQuestion() {
//   document.getElementById("question").textContent = `Question ${
//     currentQuestion + 1
//   }: ${questions[currentQuestion].question}`;
//   const optionsContainer = document.querySelector(".options");
//   optionsContainer.innerHTML = "";
//   const shuffledOptions = shuffleArray(questions[currentQuestion].options);
//   shuffledOptions.forEach((option) => {
//     const optionDiv = document.createElement("div");
//     optionDiv.classList.add("option");
//     optionDiv.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
//     optionsContainer.appendChild(optionDiv);
//   });
//   document.getElementById("next-question").style.display = "block";
// }

// function displayQuestion() {
//     const questionContainer = document.getElementById("question");
//     questionContainer.innerHTML = ""; // Clear previous content
  
//     const questionNumberLine = document.createElement("div");
//     questionNumberLine.textContent = `Question ${currentQuestion + 1}: `;
    
//     const questionTextLine = document.createElement("div");
//     questionTextLine.textContent = questions[currentQuestion].question;
  
//     questionContainer.appendChild(questionNumberLine);
//     questionContainer.appendChild(questionTextLine);
  
//     const optionsContainer = document.querySelector(".options");
//     optionsContainer.innerHTML = ""; // Clear previous options
//     const shuffledOptions = shuffleArray(questions[currentQuestion].options);
//     shuffledOptions.forEach((option) => {
//       const optionDiv = document.createElement("div");
//       optionDiv.classList.add("option");
//       optionDiv.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
//       optionsContainer.appendChild(optionDiv);
//     });
//     document.getElementById("next-question").style.display = "block";
//   }

function displayQuestion() {
    const questionContainer = document.getElementById("question");
    questionContainer.innerHTML = ""; // Clear previous content
  
    const questionNumberLine = document.createElement("div");
    questionNumberLine.textContent = `Question ${currentQuestion + 1}: `;
    questionNumberLine.style.textAlign = "center"; // Center alignment
    questionNumberLine.style.color = "maroon"; // Maroon color
    questionNumberLine.style.position = "relative"; // Set position to relative
    questionNumberLine.style.paddingBottom = "10px"; // Offset beneath the text
    questionNumberLine.style.borderBottom = "1px solid black"; // Underline
  
    const questionTextLine = document.createElement("div");
    questionTextLine.textContent = questions[currentQuestion].question;
    questionTextLine.style.marginTop = "20px";
  
    questionContainer.appendChild(questionNumberLine);
    questionContainer.appendChild(questionTextLine);
  
    const optionsContainer = document.querySelector(".options");
    optionsContainer.innerHTML = ""; // Clear previous options
    const shuffledOptions = shuffleArray(questions[currentQuestion].options);
    shuffledOptions.forEach((option) => {
      const optionDiv = document.createElement("div");
      optionDiv.classList.add("option");
      optionDiv.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
      optionsContainer.appendChild(optionDiv);
    });
    document.getElementById("next-question").style.display = "block";
  }
  
  

function nextQuestion() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
    alert("Please select an answer!");
    return;
  }
  const answer = selectedAnswer.value;
  if (answer === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
  const username = document.getElementById("username").value;
  const percentage = (score / questions.length) * 100;
  let resultText;
  if (percentage >= 50) {
    resultText = `<span class="pass">You Pass!</span>`;
  } else {
    resultText = `<span class="fail">You Fail!</span>`;
  }
  document.getElementById(
    "result"
  ).innerHTML = `${username}, you scored ${score} out of ${questions.length}!<br>${resultText}`;
}

function testAgain() {
  currentQuestion = 0;
  score = 0;
  questions = shuffleArray(questions);
  document.getElementById("result-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  displayQuestion();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function clearPlaceholder(element) {
  element.placeholder = "";
}
