import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  // Initialize Firebase
  

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}else{
    firebase.app();
}

export default firebase;