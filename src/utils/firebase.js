import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC3OUrpdOIRcbdOeUE_L38VTwk6RtruAfQ",
  authDomain: "react-admin-panel-28c4e.firebaseapp.com",
  databaseURL:
    "https://react-admin-panel-28c4e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-admin-panel-28c4e",
  storageBucket: "react-admin-panel-28c4e.appspot.com",
  messagingSenderId: "128623398559",
  appId: "1:128623398559:web:7530bb01089cab2a785caa",
};

const app = initializeApp(firebaseConfig);
const firebaseDB = getDatabase(app);

export default firebaseDB;
