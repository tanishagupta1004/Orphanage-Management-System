const firebaseConfig = {
  apiKey: "AIzaSyAIx5K05JcvPmOhalbB5oP2Zed05tSDlj8",
  authDomain: "webapp-9e1c8.firebaseapp.com",
  databaseURL: "https://webapp-9e1c8-default-rtdb.firebaseio.com",
  projectId: "webapp-9e1c8",
  storageBucket: "webapp-9e1c8.appspot.com",
  messagingSenderId: "636035984805",
  appId: "1:636035984805:web:f6667daa13d134bc550c4c",
  measurementId: "G-R9291TDLQV"
};

  // initialize firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function check(){
  const phone = document.getElementById('phone_no').value;
  var docRef = db.collection("Phone Number").doc(phone);

docRef.get().then((doc) => {
  
    if (doc.exists) {
      alert("User Found");
        console.log("Document data:", doc.data());
        track2();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        alert("No User Found!")
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
}

function track2(){
  const longitude = 72.8356587
  const latitude = 19.063938999999998  
    // Show a map centered at latitude / longitude.
    map.innerHTML = '<iframe width="700" height="300" src="https://maps.google.com/maps?q='+latitude+','+longitude+'&amp;z=15&amp;output=embed"></iframe>';
}
