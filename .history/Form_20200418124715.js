var firebaseConfig = {
  apiKey: "AIzaSyCfAnJ8IZ19x3hgCF8V6S6nAUZOh7veTo4",
  authDomain: "usd-to-inr.firebaseapp.com",
  databaseURL: "https://usd-to-inr.firebaseio.com",
  projectId: "usd-to-inr",
  storageBucket: "usd-to-inr.appspot.com",
  messagingSenderId: "237751339068",
  appId: "1:237751339068:web:5bc2f2d78adb794157db39",
  measurementId: "G-S37779X1VE",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

function sign_up() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email, password);
  promise.catch;
}
