 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
 import { getDatabase,set,ref,push} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyC_pIM6dVjD_b-gLsM61XFBEuJmYkvui3k",
   authDomain: "quiz-fmp-910cb.firebaseapp.com",
   databaseURL: "https://quiz-fmp-910cb-default-rtdb.firebaseio.com",
   projectId: "quiz-fmp-910cb",
   storageBucket: "quiz-fmp-910cb.appspot.com",
   messagingSenderId: "388575381918",
   appId: "1:388575381918:web:877e3ca9bb93cd81adae8f",
   measurementId: "G-LCDYJNRD2L"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase()

 var question = document.getElementById("question")
 var option = document.getElementById("option")
 var correctanswerelem = document.getElementById("correctanswer")

 var options =[]
 var correctanswer

 function renderoptions(){
    optionsParent.innerHTML= ''
    for(var i=0;i<options.length;i++){
        optionsParent.innerHTML += `<li onclick="setCorrectAnswer('${options[i]}')" class ='p-2 bg-light fs-5 rounded shadow my-2'>${options[i]}</li.`
    }
 }
 window.addoption = function(){
options.push(option.value)
console.log(options)
renderoptions()


 }

 window.setCorrectAnswer = function(a){
correctanswer=a
correctanswerelem.innerHTML=correctanswer
 }


 window.submitquestion= function(){
    var obj = {
        question: question.value,
        options:options,
        correctanswer:correctanswer,
    }
    obj.id = push(ref(db,'questions/')).key

    const reference = ref(db,`questions/${obj.id}`)
    set(reference,obj)
    console.log(obj)
 }
