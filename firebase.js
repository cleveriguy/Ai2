import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvcSmQb09aZoy_u5y_guee75NWOtZzVwY",
  authDomain: "ai2-8c414.firebaseapp.com",
  projectId: "ai2-8c414",
  storageBucket: "ai2-8c414.firebasestorage.app",
  messagingSenderId: "555015899129",
  appId: "1:555015899129:web:8ef257129413d27f831f28"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
