function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyBCRTDcsBmHLSSW8JCsl8L8XnMqo1ijkpc",
    authDomain: "kwitter-shreyasee.firebaseapp.com",
    databaseURL: "https://kwitter-shreyasee-default-rtdb.firebaseio.com",
    projectId: "kwitter-shreyasee",
    storageBucket: "kwitter-shreyasee.appspot.com",
    messagingSenderId: "50860210601",
    appId: "1:50860210601:web:536e5baa6daf5de71dacb8",
    measurementId: "G-9GVG5H1PWP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
