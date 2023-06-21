 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";

 import { getAuth, createUserWithEmailAndPassword ,signOut, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

 import { getFirestore ,collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAe7x_z-sIdxqPpne9FscYY1QgT7tniXEc",
   authDomain: "q-app-76fde.firebaseapp.com",
   projectId: "q-app-76fde",
   storageBucket: "q-app-76fde.appspot.com",
   messagingSenderId: "595127828356",
   appId: "1:595127828356:web:8c70cb66616386241867d1"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const db = getFirestore(app);

async function data(){
try {
  const docRef = await addDoc(collection(db, "user"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
  alert("inserted")
} catch (e) {
  console.error("Error adding document: ", e);
}

}
data();

window.signupUser = function(){
  let email = document.getElementById('userEmail').value;
  let password = document.getElementById('userPassword').value;

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("signup success");
    location.href = "../index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message);
    // ..
  });
}



window.signoutUser = function(){
    signOut(auth).then(()=>{
      alert("logout");
      location.href = "./Login/login.html"
    }).catch((e)=>{
      alert(e);
    })
}


window.loginUser = function(){
  let email = document.getElementById('userEmailLogin').value;
  let password = document.getElementById('userPasswordLogin').value;

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("login Successfull");
    location.href = "../index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });

}



function checkLoginUser(address){
onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const uid = user.uid;
    if(address == "../index.html"){
    alert("userlogin")
    location.href = address;
  }
  
} else{
  if(address == "./Login/login.html"){
    alert("not found")
  location.href = address;
  }
  }
});
}

export {checkLoginUser}