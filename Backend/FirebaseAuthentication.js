var user

function validation(email) {
    let domain_name = (email.substring(email.length - 13));
    if (domain_name == '@sigce.edu.in') {
      value = true;
    } else {
      value = false;
    }
    return value;
  };

function createUser(email, password, name) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      user = userCredential.user;
      user.updateProfile({
        displayName: name,
      }).then(() => {
        firebase.auth().currentUser.sendEmailVerification().then(() => {
            window.alert('Verification Email sent!')
            window.open('/EmailVerification/', '_self')
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