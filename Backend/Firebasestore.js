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
  try{
    var docRef = db.collection('events').doc(event);
  } catch(e) {
    document.getElementById('regLoading').style.display = 'none';
    alert('Please select a event');
    document.getElementById('reg_form').reset();
    return;
  }
  await getDocumentData(db.collection('users').doc(user.uid));
  let participatedList = []
  try {
    if (!Array.isArray(userData['participatedEvents'])) {
      participatedList = [userData['participatedEvents']];
    }
    participatedList = userData['participatedEvents'];
  } catch (e) {}
  participantData = userData;
  newFields = document.getElementsByClassName(event);
  for(let i = 0; i<newFields.length; i++) {
    if (newFields[i].value != '' && newFields[i].value != null) {
      participantData[newFields[i].id] = newFields[i].value;
    } else {
      document.getElementById('regLoading').style.display = 'none';
      alert('Please input all values')
      return;
    }
  }
  participatedList.push(event)
  await sendData(db.collection('users').doc(user.uid), {'participatedEvents': participatedList})
  mapData = {};
  mapData[userData['email']] = participantData;
  delete mapData["2020ca52f@sigce.edu.in"].participatedEvents;

  await sendData(docRef, mapData);
  document.getElementById('regLoading').style.display = 'none';
  alert(`You Have Successfully Registered For The ${event}!`);
  document.getElementById('reg_form').reset();
}