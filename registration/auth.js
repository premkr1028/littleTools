 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "hAIzaSyA8iQO4yH93s91_k_dpNab6OH0u17yEGyE",
    authDomain: "lil-tools.firebaseapp.com",
    projectId: "lil-tools",
    storageBucket: "lil-tools.appspot.com",
    messagingSenderId: "255755215330",
    appId: "1:255755215330:web:8e1a1492c00f19f89399bb",
    measurementId: "G-B07T7W40R5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);