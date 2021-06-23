var db = firebase.firestore();

function sendData(mapData) {
  // Add a new document in collection "cities"
  db.collection("Students").doc(name).set(mapData)
  .then(() => {
    console.log("Document successfully written!");
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
}