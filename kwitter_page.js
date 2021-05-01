//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name, 
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";
}