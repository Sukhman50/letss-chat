
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBC07HiIq7wUKCKAEMMiE4iNqNhvVU7Zto",
      authDomain: "lets-chat-6c850.firebaseapp.com",
      databaseURL: "https://lets-chat-6c850-default-rtdb.firebaseio.com",
      projectId: "lets-chat-6c850",
      storageBucket: "lets-chat-6c850.appspot.com",
      messagingSenderId: "225438600531",
      appId: "1:225438600531:web:ee1e4bdf3dd1831b39e5a6",
      measurementId: "G-6RN2NQVB0S"
    };
    
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome : " + user_name + " !";

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name - "+ Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"<div><hr>";
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addroom()
{
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",Room_name);
    window.location = "letschat_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location="letschat_page.html";
}