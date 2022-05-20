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
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      null,
    ],
    "Hyper Text Markup Language"
  ),
  new Question(
    "Who is marking the Web standards?",
    ["Microsoft", "Google", "The World Wide Web Consortium", "Mozilla"],
    "The World Wide Web Consortium"
  ),
  new Question(
    "Choose the correct HTML element for the largest heading",
    ["‹h6›", "‹heading›", "‹h1›", "‹head›"],
    "‹h1›"
  ),
  new Question(
    "What is the correct HTML element for inserting a line break?",
    ["‹lb›", "‹br›", "‹break›", null],
    "‹br›"
  ),
  new Question(
    "What is the correct HTML for adding a background color?",
    [
      '‹body bg="yellow"›',
      "‹background›yellow‹/background›",
      '‹body style="background-color:yellow"›',
      null,
    ],
    '‹body style="background-color:yellow"›'
  ),
  // new Question(
  //   "Choose the correct HTML element to define important text",
  //   ["‹b›", "‹i›", "‹important›", "‹strong›"],
  //   "‹strong›"
  // ),
  // new Question(
  //   "Choose the correct HTML element to define emphasized text",
  //   ["‹i›", "‹italic›", "‹em›", null],
  //   "‹em›"
  // ),
  // new Question(
  //   "What is the correct HTML for creating a hyperlink?",
  //   [
  //     "‹a›http://www.w3schools.com‹/a›",
  //     '‹a name="http://www.w3schools.com"›W3Schools‹/a›',
  //     '‹a href="http://www.w3schools.com"›W3Schools‹/a›',
  //     '‹a url="http://www.w3schools.com"›W3Schools‹/a›',
  //   ],
  //   '‹a href="http://www.w3schools.com"›W3Schools‹/a›'
  // ),
  // new Question(
  //   "Which character is used to indicate an end tag?",
  //   ["/", "*", "‹", "^"],
  //   "/"
  // ),
  // new Question(
  //   "How can you open a link in a new tab/browser window?",
  //   [
  //     '‹a href="url" target="new"›',
  //     '‹a href="url" target="_blank"›',
  //     '‹a href="url" new›',
  //     null,
  //   ],
  //   '‹a href="url" target="_blank"›'
  // ),
  // new Question(
  //   "Which of these elements are all ‹table› elements?",
  //   [
  //     "‹table›‹head›‹tfoot›",
  //     "‹table›‹tr›‹tt›",
  //     "‹table›‹tr›‹td›",
  //     "‹thead›‹body›‹tr›",
  //   ],
  //   "‹table›‹tr›‹td›"
  // ),
  // new Question(
  //   "Inline elements are normally displayed without starting a new line.",
  //   ["True", "False", null, null],
  //   "True"
  // ),
  // new Question(
  //   "How can you make a numbered list?",
  //   ["‹ul›", "‹ol›", "‹dl›", "‹list›"],
  //   "‹ol›"
  // ),
  // new Question(
  //   "How can you make a bulleted list?",
  //   ["‹ol›", "‹dl›", "‹ul›", "‹list›"],
  //   "‹ul›"
  // ),
  // new Question(
  //   "what is the correct HTML for making a checkbox?",
  //   [
  //     '‹input type="checkbox"›',
  //     "‹check›",
  //     "‹checkbox›",
  //     '‹input type="check"›',
  //   ],
  //   '‹input type="checkbox"›'
  // ),
  // new Question(
  //   "What is the correct HTML for making a text input field?",
  //   [
  //     '‹textinput type="text"›',
  //     "‹textfield›",
  //     '‹input type="textfield"›',
  //     '‹input type="text"›',
  //   ],
  //   '‹input type="text"›'
  // ),
  // new Question(
  //   "What is the correct HTML for making a drop-down list?",
  //   ["‹list›", '‹input type="list"›', "‹select›", '‹input type="dropdown"›'],
  //   "‹select›"
  // ),
  // new Question(
  //   "What is the correct HTML for making a text area?",
  //   ['‹input type="textarea"›', "‹textarea›", '‹input type="textbox"›', null],
  //   "‹textarea›"
  // ),
  // new Question(
  //   "What is the correct HTML for inserting an image?",
  //   [
  //     '‹img alt="MyImage"›image.gif‹/img›',
  //     '‹image src="image.gif" alt="MyImage"›',
  //     '‹img href="image.gif" alt="MyImage"›',
  //     '‹img src="image.gif" alt="MyImage"›',
  //   ],
  //   '‹img src="image.gif" alt="MyImage"›'
  // ),
  // new Question(
  //   "What is the correct HTML for inserting a background image?",
  //   [
  //     '‹body style="background-image:url(background.gif)"›',
  //     '‹body bg="background.gif"›',
  //     '‹background img="background.gif"›',
  //     null,
  //   ],
  //   '‹body style="background-image:url(background.gif)"›'
  // ),
  // new Question(
  //   "An ‹iframe› is used to display a web page within a web page.",
  //   ["False", "There is no such thing as an ‹iframe›", "True", null],
  //   "True"
  // ),
  // new Question(
  //   "HTML comments start with ‹!--and end with--›",
  //   ["True", "False", null, null],
  //   "True"
  // ),
  // new Question(
  //   "Block elements are normally displayed without starting a new line.",
  //   ["False", "True", null, null],
  //   "False"
  // ),
  // new Question(
  //   "Which HTML element defines the title of a document?",
  //   ["‹head›", "‹title›", "‹meta›", null],
  //   "‹title›"
  // ),
  // new Question(
  //   "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
  //   ["alt", "longdesc", "src", "title"],
  //   "alt"
  // ),
  // new Question(
  //   "Which doctype is correct for HTML5?",
  //   [
  //     "‹!DOCTYPE html›",
  //     '‹!DOCTYPE HTML PUBLIC"-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd"›',
  //     "‹!DOCTYPE HTML5›",
  //     null,
  //   ],
  //   "‹!DOCTYPE html›"
  // ),
  // new Question(
  //   "Which HTML element is used to specify a footer for a document or section?",
  //   ["‹section›", "‹bottom›", "‹footer›", null],
  //   "‹footer›"
  // ),
  // new Question(
  //   "In HTML you can embed SVG elements directly into an HTML page.",
  //   ["True", "False", null, null],
  //   "True"
  // ),
  // new Question(
  //   "What is the correct HTML element for playing video files?",
  //   ["‹video›", "‹media›", "‹movie›", null],
  //   "‹video›"
  // ),
  // new Question(
  //   "What is the correct HTML element for playing audio files?",
  //   ["‹sound›", "‹audio›", "‹mp3›", null],
  //   "‹audio›"
  // ),
  // new Question(
  //   'The HTML global attribute, "contenteditable" is used to:',
  //   [
  //     "Update content from the server",
  //     "Specify whether the content of an element should be editable or not",
  //     "Specifies a context menu for an element. The menu appears when a user right-clicks on the element",
  //     "Return the position of the first found occurrence of content inside a string",
  //   ],
  //   "Specify whether the content of an element should be editable or not"
  // ),
  // new Question(
  //   "In HTML, onblur and onfocus are:",
  //   ["HTML elements", "Event elements", "Style elements", null],
  //   "Event elements"
  // ),
  // new Question(
  //   "Graphics defined by SVG is in which format",
  //   ["CSS", "XML", "HTML", null],
  //   "XML"
  // ),
  // new Question(
  //   "The HTML ‹canvas› element is used to:",
  //   [
  //     "display database records",
  //     "manipulate data in MySQL",
  //     "create draggable elements",
  //     "draw graphics",
  //   ],
  //   "draw graphics"
  // ),
  // new Question(
  //   "In HTML, which attribute is used to specify that an input field must be filled out?",
  //   ["formvaildate", "validate", "placeholder", "required"],
  //   "required"
  // ),
  // new Question(
  //   "Which input type defines a slider control?",
  //   ["range", "search", "slider", "controls"],
  //   "range"
  // ),
  // new Question(
  //   "Which HTML element is used to display a scalar measurement within a range?",
  //   ["‹measure›", "‹range›", "‹gauge›", "‹meter›"],
  //   "‹meter›"
  // ),
  // new Question(
  //   "Which HTML element defines navigation links?",
  //   ["‹navigate›", "‹navigation›", "‹nav›", null],
  //   "‹nav›"
  // ),
  // new Question(
  //   "In HTML, what does the ‹aside› element define?",
  //   [
  //     "Content aside from the page content",
  //     "A navigation list to be shown at the left side of the page",
  //     "The ASCⅡ character-set; to send information between computers on the internet",
  //     null,
  //   ],
  //   "Content aside from the page content"
  // ),
  // new Question(
  //   "Which HTML element is used to specify a header for a document or section?",
  //   ["‹head›", "‹header›", "‹top›", "‹section›"],
  //   "‹header›"
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
    if(quiz.questions[quiz.questionIndex].choice[i] == null) { choice[i].style.display = 'none'; }
    else {choice[i].style.display = 'block';}
  }

  footer();
}

function footer() {
  const footer = document.getElementById("footer");
  footer.innerHTML =
    "문제 " + (quiz.questionIndex + 1) + " / " + quiz.questions.length;
}

const btn = document.querySelectorAll(".btn");

// 입력 및 정답 확인 함수
function checkAnswer(i) {
  btn[i].addEventListener("click", function () {
    const answer = btn[i].innerText;
    // console.log(quiz.questions[quiz.questionIndex].answer)
    if (quiz.correctAnswer(answer)) {
      alert("🟢정답입니다");
      quiz.score++;
    } else {
      alert(`❌틀렸습니다. 정답은 ${quiz.questions[quiz.questionIndex].answer}입니다.`);
    }

    if (quiz.questionIndex < quiz.questions.length - 1) {
      quiz.questionIndex++;
      updateQuiz();
    } else {
      result();
    }
  });
}

function result() {
  const quizDiv = document.getElementById("quiz");
  const per = parseInt((quiz.score * 100) / quiz.questions.length);
  const txt =
    "<h1>결과</h1>" +
    '<h2>당신의 점수: ' +
    quiz.score +
    "/" +
    quiz.questions.length +
    "<br><br>" +
    per +
    "점" +
    "</h2>";

  quizDiv.innerHTML = txt;

}

for (let i = 0; i < btn.length; i++) {
  checkAnswer(i);
}

updateQuiz();
