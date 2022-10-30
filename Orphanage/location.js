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


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db1 = firebase.firestore()
  db1.collection('phone')

  const db = getFirestore()
  const colRef = collection(db,'phone')



  function track1(){
    navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    // Show a map centered at latitude / longitude.
    map.innerHTML = '<iframe width="700" height="300" src="https://maps.google.com/maps?q='+latitude+','+longitude+'&amp;z=15&amp;output=embed"></iframe>';
  });
}

function track2(){
  const longitude = 72.8356587
  const latitude = 19.063938999999998    
    // Show a map centered at latitude / longitude.
    map.innerHTML = '<iframe width="700" height="300" src="https://maps.google.com/maps?q='+latitude+','+longitude+'&amp;z=15&amp;output=embed"></iframe>';
  };
