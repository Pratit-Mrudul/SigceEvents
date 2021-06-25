function registerAcc() {
  let email = document.getElementById('participantEmail').value;
  let pass = document.getElementById('password').value;
  let name = document.getElementById('participantName').value;
  let phoneNo = document.getElementById('phoneNo').value;
  let year = document.getElementById('year').value;
  let branch = document.getElementsByClassName('branch').value;
  let rollNo = document.getElementById('participantRNo').value;
  if (emailValidation(email)) {
    createUser(email, pass, name, phoneNo, year, branch, rollNo);
  } else {
    alert('Enter The Valid Email Id!');
  }
};

//BRANCH CHANGE
let year = document.getElementById('year').value;
if (year == 'FY') {
  document.getElementById('branch').style.display = 'block';
  document.getElementById('branch2').style.display = 'none';
  document.getElementById('branch3').style.display = 'none';
} else if (year == 'SY') {
  document.getElementById('branch').style.display = 'none';
  document.getElementById('branch2').style.display = 'block';
  document.getElementById('branch3').style.display = 'none';
} else if (year == 'TY') {
  document.getElementById('branch').style.display = 'none';
  document.getElementById('branch2').style.display = 'none';
  document.getElementById('branch3').style.display = 'block';
}