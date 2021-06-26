const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

CloseButtons = document.getElementsByClassName('closeButton');
firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    await getDocumentData(db.collection("users").doc(user.uid));
    let notificationList = userData['participatedEvents'];
    for (let i=0; i<=CloseButtons.length; i++) {
      button.addEventListener('click', () => {
        let email = user.email;
        data = {};
        data[email] = firebase.firestore.FieldValue.delete();
        db.collection('events').doc(notificationList[i]).update(data);
      })
    };
  }}
);
