// Initialize Firebase
var config = {
    apiKey: "AIzaSyCpX_eOmEOboolZ6Ot4a5VJ8HkG2HLHN34",
    authDomain: "contactform-dfe42.firebaseapp.com",
    databaseURL: "https://contactform-dfe42.firebaseio.com",
    projectId: "contactform-dfe42",
    storageBucket: "contactform-dfe42.appspot.com",
    messagingSenderId: "127468264489"
  };
  firebase.initializeApp(config);

  var messagetodb = firebase.database().ref('message');


//attaching event listener to the submit button.
document.getElementById('contactform').addEventListener('submit', submitForm);


// function to get values from the field.
function submitForm(e){
    e.preventDefault();
   // console.log(123);
    var name = getValue('name');
    //console.log(name);
    var companyname = getValue('company');
    var email = getValue('email');
    var phone = getValue('phone');
    var message = getValue('message');

    //invoke the savemessage
    savemessage(name,companyname, email,phone,message);

    // set display to block
    document.querySelector('.alert').style.display = 'block';

    // set display to none after 3s
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
        document.getElementById('contactform').reset();
    },3000);


    // reset
    
}

//fuction to get value.
function getValue(id){
    //console.log(id);
    return document.getElementById(id).value;
}


// push the data to the firebase db
function savemessage(name, companyname, email, phone, message){
   // console.log('---->',companyname);
    var todbpush = messagetodb.push();

    todbpush.set({
        name:name,
        companyname:companyname,
        email:email,
        phone:phone,
        message:message
    });
}
