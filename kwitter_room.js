
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAzEU_8k_x2EhoOUf0y0OLv1coWyb4f-X8",
      authDomain: "kwitter-app-1328f.firebaseapp.com",
      databaseURL: "https://kwitter-app-1328f-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-1328f",
      storageBucket: "kwitter-app-1328f.appspot.com",
      messagingSenderId: "24646265064",
      appId: "1:24646265064:web:01eaed45e2da127e8f015d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";
    function addRoom(){
      room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
       purpose: "addingRoomname"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
      }
      function redirectToRoomName(name)
      {
            localStorage.setItem("room_name", name);
            window.location ="kwitter_page.html";
      }


 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("RoomName - "+ Room_names);
      row = "<div class='room_name' id ="+ Room_names + " onclick= 'redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      
      //End code
      });});}
getData();