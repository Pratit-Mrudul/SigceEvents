console.log('hello');
const auth = firebase.auth();
function registerAcc() {
  let email = document.getElementById('participantEmail').value;
  let pass = document.getElementById('password').value;
  if (validation(email)) {
    createUser(email, pass);
  } else {
    alert('Enter The College Email Id!');
  }
};