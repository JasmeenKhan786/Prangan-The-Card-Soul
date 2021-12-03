import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBThgtH84R9xnFTJoHGY6Lg0n_oAq26ShM",
  authDomain: "final-app-tcs.firebaseapp.com",
  projectId: "final-app-tcs",
  storageBucket: "final-app-tcs.appspot.com",
  messagingSenderId: "247693970614",
  appId: "1:247693970614:web:48bb419c062ba885096a17"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig)
}
export default firebase.firestore()