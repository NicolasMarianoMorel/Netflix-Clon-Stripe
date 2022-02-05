import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCiKl5xrAJ5n9T5jyYmvoYkoq9hb3VOoCs",
  authDomain: "netflix-clone-bf301.firebaseapp.com",
  projectId: "netflix-clone-bf301",
  storageBucket: "netflix-clone-bf301.appspot.com",
  messagingSenderId: "703140489386",
  appId: "1:703140489386:web:5638e5669d2e27d6dd48d3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;