
// import * as firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyBfgITax_fFYr1NTyw5ecpjUDOnWygJFKc",
//     authDomain: "reactmovie-f883e.firebaseapp.com",
//     projectId: "reactmovie-f883e",
//     storageBucket: "reactmovie-f883e.appspot.com",
//     messagingSenderId: "867548514627",
//     appId: "1:867548514627:web:17c2fe4da3ea18b36047f6"
// };
// const app = initializeApp(firebaseConfig);

// var fireDb = firebase.initializeApp(firebaseConfig);


// export default fireDb.database().ref();  




// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from '@firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfgITax_fFYr1NTyw5ecpjUDOnWygJFKc",
    authDomain: "reactmovie-f883e.firebaseapp.com",
    projectId: "reactmovie-f883e",
    storageBucket: "reactmovie-f883e.appspot.com",
    messagingSenderId: "867548514627",
    appId: "1:867548514627:web:17c2fe4da3ea18b36047f6"
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig)
const firebaseApp = initializeApp(firebaseConfig);