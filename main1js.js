

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyC-HDW1I23ylkCFy4DkW7yD5Tg-ep23BTA",

    authDomain: "portfolio-81a6b.firebaseapp.com",

    databaseURL: "https://portfolio-81a6b-default-rtdb.firebaseio.com",

    projectId: "portfolio-81a6b",

    storageBucket: "portfolio-81a6b.appspot.com",

    messagingSenderId: "204779660728",

    appId: "1:204779660728:web:7fe74a081b89e89d7adb4d",

    measurementId: "G-8PW0DBT5X8"

  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  document.getElementById("submit") .addEventListener('click', function(e){

    set(ref(db ,'user/' + document.getElementById("name") .value),
    {

       name: document.getElementById("name") .value,
       feedback: document.getElementById("feedback") .value

    });
        alert("Your Message Has Been Sent");
  })

