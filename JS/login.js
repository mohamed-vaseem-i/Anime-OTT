

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyC8UXjRVjJYFHGa5qQcXxjeGIG-GaxygQk",
  authDomain: "login-cee79.firebaseapp.com",
  projectId: "login-cee79",
  storageBucket: "login-cee79.appspot.com",
  messagingSenderId: "631395607545",
  appId: "1:631395607545:web:45fd2f3293108e30555328"
};


const app = initializeApp(firebaseConfig);




//submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault() 
    const auth = getAuth();
    //inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      window.location.href="home.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

    const getLocStoreEmail = localStorage.getItem("Username").value;
    const getLocStorePass = localStorage.getItem("Password").value;

    
    if(email!=getLocStorePass){
      span1.textContent = "Please Enter Email";
      span1.style.color = "red";
      span1.style.display = "block";
    }
    if(password!==getLocStorePass){
      span2.textContent = "Please Enter Password";
      span2.style.color = "red";
      span2.style.display = "block";
    }
    else if(email == getLocStoreEmail && password == getLocStorePass){
      alert("You Have loginned successful");
      span1.style.display = "none";
      span2.style.display = "none";
      if(getLocStoreEmail==""||getLocStorePass==""){
        localStorage.setItem("Username",email);
        localStorage.setItem("Password",password);
      }
      
    }
});



const signup = document.getElementById("signup");
signup.addEventListener("click",()=>{
  window.location.href = "signup.html";
})

const span1 = document.getElementById("sp1");
const span2 = document.getElementById("sp2");
