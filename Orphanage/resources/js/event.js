const firebaseConfig = {
    apiKey: "AIzaSyBvA7mNGmwR5H7WF1KdknmsNdHdVNggkUQ",
    authDomain: "event-37e4e.firebaseapp.com",
    databaseURL: "https://event-37e4e-default-rtdb.firebaseio.com",
    projectId: "event-37e4e",
    storageBucket: "event-37e4e.appspot.com",
    messagingSenderId: "554370466254",
    appId: "1:554370466254:web:5ab81e4cdc9aabcd52eb9f"
  };

  firebase.initializeApp(firebaseConfig);

  // reference your database
  var contactFormDB = firebase.database().ref("Event");
  
  document.getElementById("forms").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var fname = getElementVal("fname");
    var lname = getElementVal("lname");
    var emailid = getElementVal("email");
    var mobile = getElementVal("mobile");
    var dob = getElementVal("mobil");
    var organization = getElementVal("organization");
    var events=document.querySelector('input[name="events"]:checked').value
    var pincode = getElementVal("pincode");
    var comment = getElementVal("comment");
    console.log(fname,lname,emailid,mobile,dob,organization,events,pincode,comment);
    saveMessages(fname,lname,emailid,mobile,dob,organization,events,pincode,comment);
  
    // //   enable alert
    // document.querySelector(".alert").style.display = "block";
  
    // //   remove the alert
    // setTimeout(() => {
    //   document.querySelector(".alert").style.display = "none";
    // }, 3000);
  
    // //   reset the form
    // document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (fname,lname,emailid,mobile,dob,organization,events,pincode,comment) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      fname:fname,
      lname:lname,
      emailid:emailid,
      mobile:mobile,
      dob:dob,
      organization,organization,
      events:events,
      pincode,pincode,
      comment,comment,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };