const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const BGMIMember = document.getElementById('BGMIMember');
const QUIZMember = document.getElementById('QUIZMember');
const DEBATEMember = document.getElementById('DEBATEMember');
const formbackContainer = document.getElementById('formbackContainer');
const participantsDisplay = document.getElementById('participantsDisplay');
const BGMIP = document.getElementById('BGMIP');
const QUIZP = document.getElementById('QUIZP');
const DEBATEP = document.getElementById('DEBATEP');
const backbtn = document.getElementsByClassName('backbtn');
const BGMI = document.getElementsByClassName("BGMI");
const QUIZ = document.getElementsByClassName("QUIZ");
const DEBATE = document.getElementsByClassName("DEBATE");
var selectedEvent = "";

BGMIMember.addEventListener('click', bgmiTeams);
QUIZMember.addEventListener('click', quizTeams);
DEBATEMember.addEventListener('click', debateTeams);

function bgmiTeams() {
  formbackContainer.style.display = 'none';
  participantsDisplay.style.display = 'block';
  QUIZP.style.display = 'none';
  DEBATEP.style.display = 'none';
  BGMIP.style.display = 'block';
  selectedEvent = "BGMI";
}

function quizTeams() {
  formbackContainer.style.display = 'none';
  participantsDisplay.style.display = 'block';
  QUIZP.style.display = 'block';
  DEBATEP.style.display = 'none';
  BGMIP.style.display = 'none';
  selectedEvent = "QUIZ";
}

function debateTeams() {
  formbackContainer.style.display = 'none';
  participantsDisplay.style.display = 'block';
  QUIZP.style.display = 'none';
  DEBATEP.style.display = 'block';
  BGMIP.style.display = 'none';
  selectedEvent = "DEBATE";
}
function backBtn() {
  formbackContainer.style.display = '';
  participantsDisplay.style.display = 'none';
}

db.collection("users").where("participatedEvents", "array-contains", selectedEvent).get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      Data = doc.data();
      memberTemplate = `<p>Name: ${Data["name"]}  Email: ${Data["email"]}<button><i class="fas fa-user-plus users"></i></button></p>`;
      document.getElementsByClassName(`${selectedEvent}P`).innerHTML += memberTemplate;
  });
})
.catch((error) => {
  console.log("Error getting documents: ", error);
});