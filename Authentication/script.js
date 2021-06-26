function registerAcc() {
  let email = document.getElementById('participantEmail').value;
  let pass = document.getElementById('password').value;
  let name = document.getElementById('participantName').value;
  let phoneNo = document.getElementById('phoneNo').value;
  let year = document.getElementById('year').value;
  let branch = finalSelBranch();
  let rollNo = document.getElementById('participantRNo').value;
  if (emailValidation(email)) {
    document.getElementById('regLoading').style.display = '';
    createUser(email, pass, name, phoneNo, year, branch, rollNo);
    document.getElementById('regLoading').style.display = 'none';
    document.getElementById('reg_form').reset();
  } else {
    alert('Enter The Valid Email Id!');
  }
};

//BRANCH CHANGE
function branchToggle() {
  let year = document.getElementById('year').value;
  if (year == 'FY') {
    document.getElementById('branch').style.display = 'inline-block';
    document.getElementById('branch2').style.display = 'none';
    document.getElementById('branch3').style.display = 'none';
  } else if (year == 'SY') {
    document.getElementById('branch').style.display = 'none';
    document.getElementById('branch2').style.display = 'inline-block';
    document.getElementById('branch3').style.display = 'none';
  } else if (year == 'TY') {
    document.getElementById('branch').style.display = 'none';
    document.getElementById('branch2').style.display = 'none';
    document.getElementById('branch3').style.display = 'inline-block';
  } else if (year == 'select') {
    document.getElementById('branch').style.display = 'inline-block';
    document.getElementById('branch2').style.display = 'none';
    document.getElementById('branch3').style.display = 'none';
  }
}


function finalSelBranch() {
  let year = document.getElementById('year').value;
  let finalBranch;
  if (year == 'FY') {
    finalBranch = document.getElementById('branch').value;
  } else if (year == 'SY') {
    finalBranch = document.getElementById('branch2').value;
  } else if (year == 'TY') {
    finalBranch = document.getElementById('branch3').value;
  } else {
    alert('Please Select The Year!');
  }

  return finalBranch;
}