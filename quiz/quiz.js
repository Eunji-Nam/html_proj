const quizData = [

    {
        question : 'What does HTML stand for?',
        answers : {
        a : "Hyper Text Markup Language",
        b : "Hyperlinks and Text Markup Language",
        c : "Home Tool Markup Language"

        },
    correct : 'a'
    },
    {
        question : 'Who is making the Web standards?',
        answers : {
            a : 'The World Wide Web Consortium  ',
            b : 'Microsoft',
            c : 'Mozilla',
            d : 'Google'
        },
    correct : 'a'
    },
    {
        question : 'Choose the correct HTML element for the largest heading',
        answers : {
                a : 'h6',
                b : 'h1',
                c : 'head',
                d : 'heading'
        },
    correct : 'b'
    }
]

const quizDisplay = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');

let currentSlide = 0;
const resultDisplay = document.getElementById('result');

function buildQuiz(){
     let output = [ ]; 
      quizData.forEach(  
          (currentQuestion, questionNum) => { 
                      const answers = [ ];     
                      for(item in currentQuestion.answers){  
                                  answers.push(`<label>
                                               <input type="radio" name="question${questionNum}" value="${item}">
                                                   ${item} : ${currentQuestion.answers[item]}
                                               </label>`);
                         }
                            output.push(`<div class="slide"><div class="question"> ${currentQuestion.question}</div>
                                         <div class="answer">${answers.join('</br>')}</div></div>`);
                   }              
      );
         quizDisplay.innerHTML = output.join('</br>');
   }
   
function showResult(){
        const answerDisplays = quizDisplay.querySelectorAll('.answer');  
          let numCorrect = 0; 

           quizData.forEach( (currentQuestion, questionNum)=>{
                  const answerDisplay = answerDisplays[questionNum]; 
                  const selector = `input[name=question${questionNum}]:checked`;  
                  const userAnswer = (answerDisplay.querySelector(selector) || {}).value;  


                   if(userAnswer === currentQuestion.correct){    
                           numCorrect++;
                           answerDisplays[questionNum].style.color = 'lightgreen';
                   }else{
                           answerDisplays[questionNum].style.color = 'red';
                   }
           });
                  
             
             submitBtn.style.display = 'none';
             resultDisplay.innerHTML = `<h3 style="color:#333;">${quizData.length}개중에서 ${numCorrect}개 맞추셨습니다.</h3>`
   }
 
   
function showSlide(n){
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
      if(currentSlide === 0){
          previousBtn.style.display = 'none';
      }else{
          previousBtn.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
          nextBtn.style.display = 'none';
          submitBtn.style.display = 'inline-block';
      }else{
          nextBtn.style.display = 'inline-block';
          submitBtn.style.display = 'none';
              if(document.getElementById('retry')){
                      document.getElementById('retry').style.display = 'none';
                }
         
      }
}

function showNextSlide(){  showSlide(currentSlide+1); }
function showPreviousSlide(){ showSlide(currentSlide-1); }


   buildQuiz(); 
 const slides = document.querySelectorAll('.slide');
   showSlide(currentSlide);
    previousBtn.addEventListener('click',showPreviousSlide);
    nextBtn.addEventListener('click',showNextSlide);
   submitBtn.addEventListener('click',showResult);   