// Global Variables
const auth = firebase.auth();
var user
var userData

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
  auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    user = userCredential.user;
    user.updateProfile({
      displayName: name,
    }).then(() => {
      db.clearPersistence().then(() => {
        var docRef = db.collection("users").doc(user.getuid);
        sendData(docRef, 
          {
          "name": name,
          "email": email,
          "phoneNo": phoneNo,
          "year": year,
          "branch": branch,
          "rollNo": rollNo,
        });
      });
      firebase.auth().currentUser.sendEmailVerification().then(() => {
        document.getElementById('verficationCollapse').style.display = 'block';
        document.getElementById('formCollapse').style.display = 'none';
      });
      signOut();
    }).catch((error) => {
      user.delete().then(() => {
        // User deleted.
        document.getElementById('alertBox').innerHTML = `<div class="alert alert-error" role="alert"> ${error} </div>`
      }).catch((error) => {
        document.getElementById('alertBox').innerHTML = `<div class="alert alert-error" role="alert"> Rougue User Created </div>`
      });
    });
  })
  .catch((error) => {
    user.delete().then(() => {
      // User deleted.
      document.getElementById('alertBox').innerHTML = `<div class="alert alert-error" role="alert"> ${error.message} </div>`
    }).catch((error) => {
      document.getElementById('alertBox').innerHTML = `<div class="alert alert-error" role="alert"> Rougue User Created </div>`
    });
  });
}

function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    user = userCredential.user;
    if (user.emailVerified) {
      var docRef = db.collection("users").doc(user.getuid);
      getDocumentData(docRef);
    } else {
      document.getElementById('emailVerify').style.display = '';
      signOut();
    }
  })
  .catch((error) => {
    document.getElementById('alertBox').innerHTML = `<div class="alert alert-error" role="alert"> ${error.message} </div>`
  });
}

function signOut() {
  // doc.data() will be undefined in this case
  auth.signOut().then(() => {
    // Sign-out successful.
    console.log('Signed Out')
  }).catch((error) => {
    // An error happened.
    console.log(error);
  });
}