function registerAcc() {
  let email = document.getElementById('participantEmail').value;
  let pass = document.getElementById('password').value;
  let name = document.getElementById('participantName').value;
  let phoneNo = '';
  let branch = '';
  let rollNo = '';
  if (emailValidation(email)) {
    createUser(email, pass, name, phoneNo, branch, rollNo);
  } else {
    alert('Enter The College Email Id!');
  }
};