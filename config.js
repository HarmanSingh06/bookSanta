import firebase from 'firebase';
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDx3UVjQfjoZ5jjC1COyEjSHGUGhu9ECLo",
  authDomain: "booksanta-14773.firebaseapp.com",
  databaseURL: "https://booksanta-14773-default-rtdb.firebaseio.com",
  projectId: "booksanta-14773",
  storageBucket: "booksanta-14773.appspot.com",
  messagingSenderId: "690746374249",
  appId: "1:690746374249:web:1740e4e5dcce03755ccaf8"
};

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();