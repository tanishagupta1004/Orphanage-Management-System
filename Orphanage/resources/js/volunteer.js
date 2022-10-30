const firebaseConfig = {
    apiKey: "AIzaSyC7AnbS52g4FdXArkzRmX1fTXWy3pyA9Ew",
    authDomain: "volunteer-e32ee.firebaseapp.com",
    databaseURL: "https://volunteer-e32ee-default-rtdb.firebaseio.com",
    projectId: "volunteer-e32ee",
    storageBucket: "volunteer-e32ee.appspot.com",
    messagingSenderId: "340278685588",
    appId: "1:340278685588:web:3cf037cbe883b8ed7f6981"
  };
  firebase.initializeApp(firebaseConfig);

  // reference your database
  var contactFormDB = firebase.database().ref("Volunteer");
  
  document.getElementById("forms").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var fname = getElementVal("fname");
    var lname = getElementVal("lname");
    var emailid = getElementVal("email");
    var gender=document.querySelector('input[name="Gender"]:checked').value
    var mobile = getElementVal("mobile");
    var dob = getElementVal("mobil");
    var organization = getElementVal("organization");
    var pincode = getElementVal("pincode");
    var comment = getElementVal("comment");
    console.log(fname,lname,emailid,gender,mobile,dob,organization,pincode,comment);
    saveMessages(fname,lname,emailid,gender,mobile,dob,organization,pincode,comment);
  
    // //   enable alert
    // document.querySelector(".alert").style.display = "block";
  
    // //   remove the alert
    // setTimeout(() => {
    //   document.querySelector(".alert").style.display = "none";
    // }, 3000);
  
    // //   reset the form
    // document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (fname,lname,emailid,gender,mobile,dob,organization,pincode,comment) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      fname:fname,
      lname:lname,
      emailid:emailid,
      gender:gender,
      mobile:mobile,
      dob:dob,
      organization,organization,
      pincode,pincode,
      comment,comment,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };