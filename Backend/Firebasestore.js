var db = firebase.firestore();

async function sendData(docRef, mapData) {
  // Add a new document in collection "cities"
  await docRef.set(mapData, {merge: true})
  .then(() => {
    console.log("Document successfully written!");
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
}

async function getDocumentData(docRef) {
  await docRef.get().then((doc) => {
    if (doc.exists) {
        userData = doc.data();
    } else {
      console.log("Document dosn't exist");
    }
}).catch((error) => {
    // doc.data() will be undefined in this case
    console.log(error);
});
}

async function sendEventRegistrationData(event) {
  user = firebase.auth().currentUser;
  var docRef = db.collection('events').doc(event);
  await getDocumentData(db.collection('users').doc(user.uid));
  let participatedList = []
  try {
    participatedList = [userData['participatedEvents']];
    if (!Array.isArray(participatedList)) {
      participatedList = [];
    }
  } catch (e) {}
  participatedList.push(event)
  await sendData(db.collection('users').doc(user.uid), {'participatedEvents': participatedList})
  participantData = userData;
  newFields = document.getElementsByClassName(event);
  for(let i = 0; i<newFields.length; i++) {
    participantData[newFields[i].id] = newFields[i].value;
  }
  mapData = {};
  mapData[userData['email']] = participantData;

  await sendData(docRef, mapData);
  document.getElementById('regLoading').style.display = 'none';
  alert(`You Have Successfully Registered For The ${event}!`);
  document.getElementById('reg_form').reset();
}