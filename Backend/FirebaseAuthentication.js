// Global Variables
const auth = firebase.auth();
var user

function emailValidation(email) {
  let domain_name = (email.substring(email.length - 13));
  if (domain_name == '@sigce.edu.in') {
    value = true;
  } else {
    value = false;
  }
  return value;
};

function createUser(email, password, name, phoneNo, year, branch, rollNo) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    user = userCredential.user;
    user.updateProfile({
      displayName: name,
    }).then(() => {
      sendData({
        "name": name,
        "email": email,
        "phoneNo": phoneNo,
        "year": year,
        "branch": branch,
        "rollNo": rollNo,
      });
      firebase.auth().currentUser.sendEmailVerification().then(() => {
        document.getElementById('verficationCollapse').style.display = 'block';
        document.getElementById('mailTo').innerHTML = `Email Sent To ${email}!`;
        document.getElementById('formCollapse').style.display = 'none';
      });
    }).catch((error) => {
      document.getElementById('alertBox').innerHTML = `<div class="alert alert-error" role="alert">
      ${error}
      </div>`
    });
  })
  .catch((error) => {
    document.getElementById('alertBox').innerHTML = `<div class="alert alert-error" role="alert">
    ${error.message}
    </div>`
  });
}