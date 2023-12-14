// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, onValue, push, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAM1Cy5obhoVw1WdTqzfHNqq3zeCOihdpY",
    authDomain: "printpont-39b91.firebaseapp.com",
    databaseURL: "https://printpont-39b91-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "printpont-39b91",
    storageBucket: "printpont-39b91.appspot.com",
    messagingSenderId: "230249978742",
    appId: "1:230249978742:web:1c7bdb1d7530a2c6d97857"
  };


// Initialize Firebase
const APP = initializeApp(FIREBASE_CONFIG);

function initialize(){
    const FORM_MESSAGE= document.getElementById("form-message");
    FORM_MESSAGE.addEventListener("submit",addMessage);
  showMessages();
}

function showMessages(){
  const MESSAGES_REF = ref(getDatabase(), "messages/");

  onValue(MESSAGES_REF, showAllMessages);
}

function showAllMessages(snapshot){
  const VALUES=snapshot.val();

  const SENT_MESSAGES = document.getElementById("sent-messages");
  SENT_MESSAGES.innerHTML="";

  for (let value in VALUES){
    const SENDER=VALUES[value].sender;
    const VALUE=VALUES[value].text;
  
    SENT_MESSAGES.innerHTML += `<p><span id="text">${SENDER}: </span> ${VALUE}</p>`
    }
}
function addMessage(e){
    e.preventDefault();
    const MESSAGE_SENDER = e.target["message-sender"].value;
    const MESSAGE_TEXT = e.target["message-text"].value;
    const MESSAGES_REF = ref(getDatabase(), "messages/");
    const newMessage= {
        sender: MESSAGE_SENDER,
        text: MESSAGE_TEXT
    }

    push(MESSAGES_REF, newMessage);
}

initialize();