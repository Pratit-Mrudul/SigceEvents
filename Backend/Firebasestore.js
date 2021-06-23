var db = firebase.firestore();

function sendData(mapData) {
  // Add a new document in collection "cities"
  db.collection("users").doc(users.getuid).set(mapData, {merge: true})
  .then(() => {
    console.log("Document successfully written!");
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
}