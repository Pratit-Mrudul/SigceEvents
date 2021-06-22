Name = document.getElementById('participantName').value;
email = document.getElementById('participantEmail').value;
PhoneNo = document.getElementById('participantPNo').value;
Year = document.getElementById('year').value;
Branch = document.getElementById('branch').value;
RollNo = document.getElementById('participantRNo').value;


let regformSubmit = document.getElementById('regformSubmit');
regformSubmit.addEventListener('click' signIn);

function signIn(){
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}