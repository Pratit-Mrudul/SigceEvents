const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

CloseButtons = document.getElementsByClassName('closeButton');

for (button in CloseButtons, noti in notificationList) {
  button.addEventListener('click', () => {
    let email = user.email;
    data = {};
    data[email] = firebase.firestore.FieldValue.delete();
    db.collection('events').doc(noti).update(data);
  })
}
