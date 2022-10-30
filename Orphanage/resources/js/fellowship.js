const firebaseConfig = {
    apiKey: "AIzaSyC7dLqwiduoLZZyhsAPgF9tnDsOnfoUNk4",
    authDomain: "fellowship-a824b.firebaseapp.com",
    databaseURL: "https://fellowship-a824b-default-rtdb.firebaseio.com",
    projectId: "fellowship-a824b",
    storageBucket: "fellowship-a824b.appspot.com",
    messagingSenderId: "748313751403",
    appId: "1:748313751403:web:68ecd25358c02d635ba62e"
  };
  firebase.initializeApp(firebaseConfig);

  // reference your database
  var contactFormDB = firebase.database().ref("Fellowship");
  
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