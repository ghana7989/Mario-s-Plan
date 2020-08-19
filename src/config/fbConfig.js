import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBsdlcPWPYHuh5uYBmeqmNUk0bpmv5Dupk",
    authDomain: "marioplan-ca3b1.firebaseapp.com",
    databaseURL: "https://marioplan-ca3b1.firebaseio.com",
    projectId: "marioplan-ca3b1",
    storageBucket: "marioplan-ca3b1.appspot.com",
    messagingSenderId: "910394154614",
    appId: "1:910394154614:web:3d0c9b3bf597c9889c4957"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;