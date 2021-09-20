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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();


function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name" 
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}
