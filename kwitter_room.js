var firebaseConfig = {
      apiKey: "AIzaSyDmGnkrfVSIN-C4DquBU6iuTb3bUrcKtUI",
      authDomain: "kwitter-3adbc.firebaseapp.com",
      databaseURL: "https://kwitter-3adbc-default-rtdb.firebaseio.com",
      projectId: "kwitter-3adbc",
      storageBucket: "kwitter-3adbc.appspot.com",
      messagingSenderId: "712930282756",
      appId: "1:712930282756:web:384554a533f787eb229451",
      measurementId: "G-1S4TC0JNGW"
    };
    
    firebase.initializeApp(firebaseConfig);
   

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name1").innerHTML="Welcome! "+user_name;

    function addRoom()
    {
          room_name= document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location= "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;


       console.log("Room Name - " + Room_names);
       row= "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;

      
      });});}
getData();

function logout() {
      window.location="index.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location= "kwitter_page.html";
}