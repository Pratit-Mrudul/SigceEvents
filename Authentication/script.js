function registerAcc() {
  let email = document.getElementById('participantEmail').value;
  let pass = document.getElementById('password').value;
  let name = document.getElementById('participantName').value;
  if (emailValidation(email)) {
    createUser(email, pass, name);
  } else {
    alert('Enter The College Email Id!');
  }
};