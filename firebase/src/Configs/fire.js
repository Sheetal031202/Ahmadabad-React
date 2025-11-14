import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPFvKxi5GyRArLxm2_jA8gj04uY7729QE",
  authDomain: "todo-project-1-318f7.firebaseapp.com",
  projectId: "todo-project-1-318f7",
  storageBucket: "todo-project-1-318f7.firebasestorage.app",
  messagingSenderId: "642503844149",
  appId: "1:642503844149:web:ed325557633bcf419bec7c",
  measurementId: "G-M4NDZL55GW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
export { auth, provider };