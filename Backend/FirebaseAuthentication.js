// Global Variables
const auth = firebase.auth();
var user
var userData = {}

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
    }).then(async () => {
      await db.clearPersistence().then(async () => {
        var docRef = db.collection("users").doc(user.uid);
        await sendData(docRef,
          {
            "name": name,
            "email": email,
            "phoneNo": phoneNo,
            "year": year,
            "branch": branch,
            "rollNo": rollNo,
            "participatedEvents": [],
          });
      });
      firebase.auth().currentUser.sendEmailVerification().then(() => {
        document.getElementById('verficationCollapse').style.display = '';
        document.getElementById('formCollapse').style.display = 'none';
        setInterval(function(){ if(user.emailVerified) {window.location.href = '/';} }, 3000);
      });
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
    if (user != null) {
      user.delete().then(() => {
        // User deleted.
        document.getElementById('alertBox').innerHTML = `<div class="alert alert-error" role="alert"> ${error.message} </div>`
      }).catch((error) => {
        document.getElementById('alertBox').innerHTML = `<div class="alert alert-error" role="alert"> Rougue User Created </div>`
      });
    } else {
      document.getElementById('alertBox').innerHTML = `<div class="alert alert-error" role="alert"> ${error.message} </div>`;
    }
  });
}

function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
  .then(async (userCredential) => {
    // Signed in
    user = userCredential.user;
    if (user.emailVerified) {
      var docRef = db.collection("users").doc(user.uid);
      await getDocumentData(docRef);
      document.getElementById('regLoading').style.display = 'none';
      window.location.href = '/';
    } else {
      document.getElementById('regLoading').style.display = 'none';
      document.getElementById('reg_form').reset();
      document.getElementById('emailVerify').style.display = '';
      document.getElementById('regform').style.display = 'none';
      auth.signOut().catch((error) => {console.log(error);});
    }
  })
  .catch((error) => {
    console.log(error);
    document.getElementById('regLoading').style.display = 'none';
    document.getElementById('reg_form').reset();
    document.getElementById('alertBox').innerHTML = `<div class="alert alert-error" role="alert"> ${error.message} </div>`
  });
}

function signOut() {
  auth.signOut().then(() => {
    console.log('Signed Out');
    window.location.href = '/';
  }).catch((error) => {
    console.log(error);
  });
}