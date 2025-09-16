import { initPage } from './common.js';
import { db } from './firebase.js';
import { ref, get, child } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

initPage();

const form = document.getElementById('login-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = form.username.value.trim();
  const password = form.password.value;

  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, 'users/' + username));
  if (!snapshot.exists() || snapshot.val().password !== password) {
    alert('Invalid username or password');
    return;
  }

  document.cookie = `username=${encodeURIComponent(username)}; path=/`;
  window.location.href = 'index.html';
});
