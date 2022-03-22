// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdO23oUXLJq_v_GL5t7hyPX4vtmDdDw9A",
  authDomain: "kidguard-bff83.firebaseapp.com",
  databaseURL: "https://kidguard-bff83-default-rtdb.firebaseio.com",
  projectId: "kidguard-bff83",
  storageBucket: "kidguard-bff83.appspot.com",
  messagingSenderId: "398441316730",
  appId: "1:398441316730:web:d423ce9aa15c8ef4ae16c3"
};

// Initialize Firebase
let app;
if(firebase.apps.length == 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

/**
 * 
 * @param {String} email - the user's email
 * @param {String} fullName - the user's full name
 * @param {String} password - the user's password
 * @param {function} _callback - function to update rather the user exists in the DB or not.
 */
export function addNewUser(email, fullName, password, _callback) {
    const dbRef = firebase.database().ref();
    dbRef.child("users").child(fullName).get().then((snapshot) => {
      if (snapshot.exists()) {
        _callback(true);
      } else {
        //no user found, then add:
        var ref = firebase.database().ref('users/' + fullName);
        ref.set({
            email: email,
            password: password,
          });
        _callback(ref)
      }
    }).catch((error) => {
      console.error(error);
    });
}  

