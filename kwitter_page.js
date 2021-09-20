const firebaseConfig = {
    apiKey: "AIzaSyDzi5oFIgEK-5piG2ruZzsxmVTGg4Hjznk",
    authDomain: "kelly-tpnv.firebaseapp.com",
    databaseURL: "https://kelly-tpnv-default-rtdb.firebaseio.com",
    projectId: "kelly-tpnv",
    storageBucket: "kelly-tpnv.appspot.com",
    messagingSenderId: "190722745969",
    appId: "1:190722745969:web:683e6f7981cbf8cdc91dd0",
    measurementId: "G-JHY471VEF7"
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

function send()
{
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });

 document.getElementById("msg").value= "";
 
}
