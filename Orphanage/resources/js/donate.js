const firebaseConfig = {
    apiKey: "AIzaSyCjfHo3ngnuZ3NlOikgfQrYRzjBEmSTT-w",
    authDomain: "donate-9a1cb.firebaseapp.com",
    databaseURL: "https://donate-9a1cb-default-rtdb.firebaseio.com",
    projectId: "donate-9a1cb",
    storageBucket: "donate-9a1cb.appspot.com",
    messagingSenderId: "100943090539",
    appId: "1:100943090539:web:aff909d25b4ba37049f22e"
  };

  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("Donate");

document.getElementById("forms").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var fname = getElementVal("fname");
  var lname = getElementVal("lname");
  var gender=document.querySelector('input[name="Gender"]:checked').value
  var emailid = getElementVal("email");
  var mobile = getElementVal("mobile");
  var address = getElementVal("autocomplete");
  var type=document.querySelector('input[name="type"]:checked').value
  var organization = getElementVal("organization");
  
  //var address = getElementVal("address");
//   var autocomplete = getElementVal("autocomplete");
//   var inputCity = getElementVal("inputCity");
//   var inputState = getElementVal("inputState");
//   var inputZip = getElementVal("inputZip");
//   var inputCountry = getElementVal("inputCountry");
  //var type = getElementVal("type");
  
  //console.log(fname,lname,male,female,other,emailid,mobile,organization);

  saveMessages(fname,lname,gender,emailid,mobile,address,type,organization);

//   //   enable alert
//   document.querySelector(".alert").style.display = "block";

//   //   remove the alert
//   setTimeout(() => {
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);

//   //   reset the form
//   document.getElementById("contactForm").reset();
}

const saveMessages = (fname,lname,gender,emailid,mobile,address,type,organization) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    fname:fname,
    lname:lname,
    gender:gender,
    emailid:emailid,
    mobile:mobile,
    address:address,
    type:type,
    organization:organization,
  });
  console.log("Hello");
  alert("Succesfully Submitted agent 7977587238 is your Pickup agent n will contact you soon")
  alert("To Track your Donation Go to Track My Donation page And Enter the agent number")
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};