// 문제 객체(생성자 함수)
function Question(text, choice, answer) {
  this.text = text; // 질문 텍스트
  this.choice = choice; // 선택할 답들(배열)
  this.answer = answer; // 정답 정보
}

// 퀴즈 정보 객체
function Quiz(questions) {
  this.score = 0; // 점수
  this.questions = questions; // 문제
  this.questionIndex = 0; // 문제 번호
}

// 정답 확인 메서드
Quiz.prototype.correctAnswer = function (answer) {
  return answer == this.questions[this.questionIndex].answer;
};

const questions = [
  new Question(
    "What does HTML stand for?",
    [
      "A : Hyper Text Markup Language",
      "B : Hyperlinks and Text Markup Language",
      "C : Home Tool Markup Language",
      null,
    ],
    "A : Hyper Text Markup Language"
  ),
  new Question(
    "Who is marking the Web standards?",
    [
      "A : Microsoft",
      "B : Google",
      "C : The World Wide Web Consortium",
      "D : Mozilla",
    ],
    "C : The World Wide Web Consortium"
  ),
  new Question(
    "Choose the correct HTML element for the largest heading",
    ["A : ‹h6›", "B : ‹heading›", "C : ‹h1›", "D : ‹head›"],
    "C : ‹h1›"
  ),
  // new Question(
  //   "What is the correct HTML element for inserting a line break?",
  //   ["A : ‹lb›", "B : ‹br›", "C : ‹break›", null],
  //   "B : ‹br›"
  // ),
  // new Question(
  //   "What is the correct HTML for adding a background color?",
  //   [
  //     'A : ‹body bg="yellow"›',
  //     "B : ‹background›yellow‹/background›",
  //     'C : ‹body style="background-color:yellow"›',
  //     null,
  //   ],
  //   'C : ‹body style="background-color:yellow"›'
  // ),
  // new Question(
  //   "Choose the correct HTML element to define important text",
  //   ["A : ‹b›", "B : ‹i›", "C : ‹important›", "D : ‹strong›"],
  //   "D : ‹strong›"
  // ),
  // new Question(
  //   "Choose the correct HTML element to define emphasized text",
  //   ["A : ‹i›", "B : ‹italic›", "C : ‹em›", null],
  //   "C : ‹em›"
  // ),
  // new Question(
  //   "What is the correct HTML for creating a hyperlink?",
  //   [
  //     "A : ‹a›http://www.w3schools.com‹/a›",
  //     'B : ‹a name="http://www.w3schools.com"›W3Schools‹/a›',
  //     'C : ‹a href="http://www.w3schools.com"›W3Schools‹/a›',
  //     'D : ‹a url="http://www.w3schools.com"›W3Schools‹/a›',
  //   ],
  //   'C : ‹a href="http://www.w3schools.com"›W3Schools‹/a›'
  // ),
  // new Question(
  //   "Which character is used to indicate an end tag?",
  //   ["A : /", "B : *", "C : ‹", "^"],
  //   "A : /"
  // ),
  // new Question(
  //   "How can you open a link in a new tab/browser window?",
  //   [
  //     'A : ‹a href="url" target="new"›',
  //     'B : ‹a href="url" target="_blank"›',
  //     'C : ‹a href="url" new›',
  //     null,
  //   ],
  //   'B : ‹a href="url" target="_blank"›'
  // ),
  // new Question(
  //   "Which of these elements are all ‹table› elements?",
  //   [
  //     "A : ‹table›‹head›‹tfoot›",
  //     "B : ‹table›‹tr›‹tt›",
  //     "C : ‹table›‹tr›‹td›",
  //     "D : ‹thead›‹body›‹tr›",
  //   ],
  //   "C : ‹table›‹tr›‹td›"
  // ),
  // new Question(
  //   "Inline elements are normally displayed without starting a new line.",
  //   ["A : True", "B : False", null, null],
  //   "A : True"
  // ),
  // new Question(
  //   "How can you make a numbered list?",
  //   ["A : ‹ul›", "B : ‹ol›", "C : ‹dl›", "D : ‹list›"],
  //   "B : ‹ol›"
  // ),
  // new Question(
  //   "How can you make a bulleted list?",
  //   ["A : ‹ol›", "B : ‹dl›", "C : ‹ul›", "D : ‹list›"],
  //   "C : ‹ul›"
  // ),
  // new Question(
  //   "what is the correct HTML for making a checkbox?",
  //   [
  //     'A : ‹input type="checkbox"›',
  //     "B : ‹check›",
  //     "C : ‹checkbox›",
  //     'D : ‹input type="check"›',
  //   ],
  //   'A : ‹input type="checkbox"›'
  // ),
  // new Question(
  //   "What is the correct HTML for making a text input field?",
  //   [
  //     'A : ‹textinput type="text"›',
  //     "B : ‹textfield›",
  //     'C : ‹input type="textfield"›',
  //     'D : ‹input type="text"›',
  //   ],
  //   'D : ‹input type="text"›'
  // ),
  // new Question(
  //   "What is the correct HTML for making a drop-down list?",
  //   ["A : ‹list›", 'B : ‹input type="list"›', "C : ‹select›", 'D : ‹input type="dropdown"›'],
  //   "C : ‹select›"
  // ),
  // new Question(
  //   "What is the correct HTML for making a text area?",
  //   ['A : ‹input type="textarea"›', "B : ‹textarea›", 'C : ‹input type="textbox"›', null],
  //   "B : ‹textarea›"
  // ),
  // new Question(
  //   "What is the correct HTML for inserting an image?",
  //   [
  //     'A : ‹img alt="MyImage"›image.gif‹/img›',
  //     'B : ‹image src="image.gif" alt="MyImage"›',
  //     'C : ‹img href="image.gif" alt="MyImage"›',
  //     'D : ‹img src="image.gif" alt="MyImage"›',
  //   ],
  //   'D : ‹img src="image.gif" alt="MyImage"›'
  // ),
  // new Question(
  //   "What is the correct HTML for inserting a background image?",
  //   [
  //     'A : ‹body style="background-image:url(background.gif)"›',
  //     'B : ‹body bg="background.gif"›',
  //     'C : ‹background img="background.gif"›',
  //     null,
  //   ],
  //   'A : ‹body style="background-image:url(background.gif)"›'
  // ),
  // new Question(
  //   "An ‹iframe› is used to display a web page within a web page.",
  //   ["A : False", "B : There is no such thing as an ‹iframe›", "C : True", null],
  //   "C : True"
  // ),
  // new Question(
  //   "HTML comments start with ‹!--and end with--›",
  //   ["A : True", "B : False", null, null],
  //   "A : True"
  // ),
  // new Question(
  //   "Block elements are normally displayed without starting a new line.",
  //   ["A : False", "B : True", null, null],
  //   "A : False"
  // ),
  // new Question(
  //   "Which HTML element defines the title of a document?",
  //   ["A : ‹head›", "B : ‹title›", "C : ‹meta›", null],
  //   "B : ‹title›"
  // ),
  // new Question(
  //   "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
  //   ["A : alt", "B : longdesc", "C : src", "D : title"],
  //   "A : alt"
  // ),
  // new Question(
  //   "Which doctype is correct for HTML5?",
  //   [
  //     "A : ‹!DOCTYPE html›",
  //     'B : ‹!DOCTYPE HTML PUBLIC"-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd"›',
  //     "C : ‹!DOCTYPE HTML5›",
  //     null,
  //   ],
  //   "A : ‹!DOCTYPE html›"
  // ),
  // new Question(
  //   "Which HTML element is used to specify a footer for a document or section?",
  //   ["A : ‹section›", "B : ‹bottom›", "C : ‹footer›", null],
  //   "C : ‹footer›"
  // ),
  // new Question(
  //   "In HTML you can embed SVG elements directly into an HTML page.",
  //   ["A : True", "B : False", null, null],
  //   "A : True"
  // ),
  // new Question(
  //   "What is the correct HTML element for playing video files?",
  //   ["A : ‹video›", "B : ‹media›", "C : ‹movie›", null],
  //   "A : ‹video›"
  // ),
  // new Question(
  //   "What is the correct HTML element for playing audio files?",
  //   ["A : ‹sound›", "B : ‹audio›", "C : ‹mp3›", null],
  //   "B : ‹audio›"
  // ),
  // new Question(
  //   'The HTML global attribute, "contenteditable" is used to:',
  //   [
  //     "A : Update content from the server",
  //     "B : Specify whether the content of an element should be editable or not",
  //     "C : Specifies a context menu for an element. The menu appears when a user right-clicks on the element",
  //     "D : Return the position of the first found occurrence of content inside a string",
  //   ],
  //   "B : Specify whether the content of an element should be editable or not"
  // ),
  // new Question(
  //   "In HTML, onblur and onfocus are:",
  //   ["A : HTML elements", "B : Event elements", "C : Style elements", null],
  //   "B : Event elements"
  // ),
  // new Question(
  //   "Graphics defined by SVG is in which format",
  //   ["A : CSS", "B : XML", "C : HTML", null],
  //   "B : XML"
  // ),
  // new Question(
  //   "The HTML ‹canvas› element is used to:",
  //   [
  //     "A : display database records",
  //     "B : manipulate data in MySQL",
  //     "C : create draggable elements",
  //     "D : draw graphics",
  //   ],
  //   "D : draw graphics"
  // ),
  // new Question(
  //   "In HTML, which attribute is used to specify that an input field must be filled out?",
  //   ["A : formvaildate", "B : validate", "C : placeholder", "D : required"],
  //   "D : required"
  // ),
  // new Question(
  //   "Which input type defines a slider control?",
  //   ["A : range", "B : search", "C : slider", "D : controls"],
  //   "A : range"
  // ),
  // new Question(
  //   "Which HTML element is used to display a scalar measurement within a range?",
  //   ["A : ‹measure›", "B : ‹range›", "C : ‹gauge›", "D : ‹meter›"],
  //   "D : ‹meter›"
  // ),
  // new Question(
  //   "Which HTML element defines navigation links?",
  //   ["A : ‹navigate›", "B : ‹navigation›", "C : ‹nav›", null],
  //   "C : ‹nav›"
  // ),
  // new Question(
  //   "In HTML, what does the ‹aside› element define?",
  //   [
  //     "A : Content aside from the page content",
  //     "B : A navigation list to be shown at the left side of the page",
  //     "C : The ASCⅡ character-set; to send information between computers on the internet",
  //     null,
  //   ],
  //   "A : Content aside from the page content"
  // ),
  // new Question(
  //   "Which HTML element is used to specify a header for a document or section?",
  //   ["A : ‹head›", "B : ‹header›", "C : ‹top›", "D : ‹section›"],
  //   "B : ‹header›"
  // ),
];

// 퀴즈 객체 생성
const quiz = new Quiz(questions);

// 문제 출력 함수
function updateQuiz() {
  const question = document.getElementById("question");
  const idx = quiz.questionIndex + 1;
  const choice = document.querySelectorAll(".btn");

  // 문제 출력
  question.innerHTML =
    "문제" + idx + ") " + quiz.questions[quiz.questionIndex].text;

  // 선택 출력
  for (let i = 0; i <= 3; i++) {
    choice[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];
    // console.log(quiz.questions[quiz.questionIndex].choice[i])

    if (quiz.questions[quiz.questionIndex].choice[i] == null) {
      choice[i].style.display = "none";
    } else {
      choice[i].style.display = "block";
    }
  }

  if (idx - 1 === 0) {
    previousBtn.style.display = "none";
  } else {
    previousBtn.style.display = "inline-block";
  }

  // console.log(idx);
  questionCount();
}

// 진행 중인 문제 수 확인
function questionCount() {
  const questionCount = document.getElementById("questionCount");
  questionCount.innerHTML =
    "문제 " + (quiz.questionIndex + 1) + " / " + quiz.questions.length;
}

const btn = document.querySelectorAll(".btn");

// 입력 및 정답 확인 함수
function checkAnswer(i) {
  btn[i].addEventListener("click", function () {
    const answer = btn[i].innerText;

    // console.log(quiz.questions[quiz.questionIndex].answer)

    const correct = quiz.questions[quiz.questionIndex].answer.substr(0, 1);

    if (quiz.correctAnswer(answer)) {
      alert("🟢정답입니다");
      quiz.score++;
    } else {
      alert(`❌틀렸습니다. 정답은 "${correct}" 입니다.`);
    }

    if (quiz.questionIndex < quiz.questions.length - 1) {
      quiz.questionIndex++;
      updateQuiz();
    } else {
      result();
    }
  });
}

// 뒤로가기 버튼 추가
const previousBtn = document.getElementById("previous");

function showPrevious() {
  if (quiz.questionIndex < quiz.questions.length) {
    quiz.questionIndex--;
    updateQuiz();
  }
}

previousBtn.addEventListener("click", showPrevious);

function result() {
  const quizDiv = document.getElementById("quiz");
  // 정수로 점수 표현
  const per = parseInt((quiz.score * 100) / quiz.questions.length);

  const txt =
    "<h1>결과</h1>" +
    "<h2>당신의 점수: " +
    per +
    "점 ( " +
    quiz.score +
    "/" +
    quiz.questions.length +
    " )" +
    "</h2>" +
    `<span>
    <button id="submitbutton" class="result-btn"> 결과확인 </button>
    </span>
    <span>
    <button id="retry" class="result-btn"> 재도전 </button>
    </span></br>`;

  quizDiv.innerHTML = txt;

  const submitBtn = document.getElementById("submitbutton");

  submitBtn.addEventListener("click", showResult);

  function showResult(i) {
    // const answers = checkAnswer(i).innerText;
    // const answerDisplay = answers[quiz.questionIndex];
    // if (quiz.correctAnswer(answers)) {
    //   answerDisplay.style.color = 'blue';
    // } else {
    //   answerDisplay.style.color = 'red';
    // }
  }
  
  // 재시작 버튼
  const retryBtn = document.getElementById("retry");

  retryBtn.addEventListener("click", retry);

  function retry() {
    if (quiz.questionIndex + 1 === quiz.questions.length) {
      window.location.reload(true);
    }
  }
  console.log(quiz.questions[0]);
}

for (let i = 0; i < btn.length; i++) {
  checkAnswer(i);
}

updateQuiz();
