const firebaseConfig = {
apiKey: "AIzaSyApg0ff18pb-tkLjUEPB7aPvo5jVG6SKds",
authDomain: "akshiti-kwitter-page.firebaseapp.com",
databaseURL: "https://akshiti-kwitter-page-default-rtdb.firebaseio.com",
projectId: "akshiti-kwitter-page",
storageBucket: "akshiti-kwitter-page.appspot.com",
messagingSenderId: "736729335492",
appId: "1:736729335492:web:6ec234a317009ff33a6b91"
};
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name" 
            });
      localStorage.setItem("room_name", room_name);
      window.location="letschat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("room_name"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="letschat_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}