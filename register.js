import { initPage } from './common.js';
import { db } from './firebase.js';
import { ref, get, child, set } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

initPage();

const form = document.getElementById('register-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = form.username.value.trim();
  const password = form.password.value;
  const email = form.email.value.trim();

  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, 'users/' + username));
  if (snapshot.exists()) {
    alert('Username taken');
    return;
  }

  const data = { password };
  if (email) {
    data.email = email;
  }

  await set(ref(db, 'users/' + username), data);
  document.cookie = `username=${encodeURIComponent(username)}; path=/`;
  window.location.href = 'index.html';
});
