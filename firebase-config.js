
const firebaseConfig = {
  apiKey: "AIzaSyCL4BouK3rDB4Mvg7z-xhqlagKJuCnshTg",
  authDomain: "dlc-website-41e57.firebaseapp.com",
  projectId: "dlc-website-41e57",
  storageBucket: "dlc-website-41e57.firebasestorage.app",
  messagingSenderId: "546749782741",
  appId: "1:546749782741:web:299cf935c8de0b3001a05c"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const form = document.getElementById('feedback-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  await db.collection('feedback').add({ name, message, timestamp: new Date() });
  alert('Thank you for your feedback!');
  form.reset();
});
