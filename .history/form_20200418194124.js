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

const auth = firebase.auth();

function sign_up() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));

  alert("New Account Signed Up....!");
  var f = 1;
}

function login() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => alert(e.message));

  alert("Signed In - " + email.value);
}

function sign_out() {
  auth.signOut();
  alert("Signed Out");
}

auth.onAuthStateChanged(function (user) {
  if (user) {
    var email = user.email;
    alert(
      "Active User " +
        email +
        " is present. If another user needs to access please Sign out."
    );
  } else {
    alert("No Active User");
  }
});

function currency() {
  if (f == 1) {
    window.open(
      "file:///C:/Users/Hemanth%20Kumar/Desktop/Files/USD%20to%20INR/currency.html"
    );
  }
}
