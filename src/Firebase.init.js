import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain ,
  // projectId:process.env.REACT_APP_projectId ,
  // storageBucket:process.env.REACT_APP_storageBucket ,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId ,
  // appId:process.env.REACT_APP_appId ,
  // measurementId:process.env.REACT_APP_measurementId 
  apiKey: "AIzaSyB4mGxXJEhN-RLB6gQ0RXoQZjxve5iZBd0",
  authDomain: "bikeparts-b2bb7.firebaseapp.com",
  projectId: "bikeparts-b2bb7",
  storageBucket: "bikeparts-b2bb7.appspot.com",
  messagingSenderId: "50933261960",
  appId: "1:50933261960:web:f4464ff445bf3ea797613d",
  measurementId: "G-WQQ8E1FLYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)

export default auth;