import * as firebase from "firebase/app"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoe2vKn8OI9aJ1LR0-dcKhpgITdDKlFZc",
  authDomain: "nwitter-9e1c8.firebaseapp.com",
  projectId: "nwitter-9e1c8",
  storageBucket: "nwitter-9e1c8.appspot.com",
  messagingSenderId: "379907418211",
  appId: "1:379907418211:web:90f2f7f606cff496393056"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);