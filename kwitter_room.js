// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyASZPxPsJNdXyoXAs2g7KiatxCQvGO_VDo",
      authDomain: "kwitter-f3d23.firebaseapp.com",
      projectId: "kwitter-f3d23",
      storageBucket: "kwitter-f3d23.appspot.com",
      messagingSenderId: "1043192907919",
      appId: "1:1043192907919:web:ae25f5bdf9e25734f708fa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
