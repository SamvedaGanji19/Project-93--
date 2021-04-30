var firebaseConfig = {
  apiKey: "AIzaSyC61XpdNRl7qUnhxtM5quZJXYf7pCM61EM",
  authDomain: "project-94-c9639.firebaseapp.com",
  databaseURL: "https://project-94-c9639-default-rtdb.firebaseio.com",
  projectId: "project-94-c9639",
  storageBucket: "project-94-c9639.appspot.com",
  messagingSenderId: "398057692089",
  appId: "1:398057692089:web:6edbfdbc1efb6ff950b468"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 

function addRoom() {
 room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update({ 
purpose : "adding room name" 
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_room.html";
}