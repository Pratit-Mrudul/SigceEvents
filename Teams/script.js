const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const BGMIMember = document.getElementById('BGMIMember');
const QUIZMember = document.getElementById('QUIZMember');
const IDEASMember = document.getElementById('IDEASMember');
const DEBATEMember = document.getElementById('DEBATEMember');
const formbackContainer = document.getElementById('formbackContainer');
const participantsDisplay = document.getElementById('participantsDisplay');
const BGMIP = document.getElementById('BGMIP');
const QUIZP = document.getElementById('QUIZP');
const IDEASP = document.getElementById('IDEASP');
const DEBATEP = document.getElementById('DEBATEP');
const backbtn = document.getElementsByClassName('backbtn');
const BGMI = document.getElementsByClassName("BGMI");
const QUIZ = document.getElementsByClassName("QUIZ");
const IDEAS = document.getElementsByClassName("IDEAS");
const DEBATE = document.getElementsByClassName("DEBATE");
var selectedEvent = "";

BGMIMember.addEventListener('click', bgmiTeams);
QUIZMember.addEventListener('click', quizTeams);
DEBATEMember.addEventListener('click', debateTeams);
IDEASMember.addEventListener('click', ideasTeams);

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

function bgmiTeams() {
  formbackContainer.style.display = 'none';
  participantsDisplay.style.display = 'block';
  QUIZP.style.display = 'none';
  DEBATEP.style.display = 'none';
  IDEASP.style.display = 'none';
  BGMIP.style.display = 'block';
  selectedEvent = "BGMI";
  generateList();
}

function quizTeams() {
  formbackContainer.style.display = 'none';
  participantsDisplay.style.display = 'block';
  QUIZP.style.display = 'block';
  DEBATEP.style.display = 'none';
  IDEASP.style.display = 'none';
  BGMIP.style.display = 'none';
  selectedEvent = "QUIZ";
  generateList();
}

function debateTeams() {
  formbackContainer.style.display = 'none';
  participantsDisplay.style.display = 'block';
  QUIZP.style.display = 'none';
  DEBATEP.style.display = 'block';
  IDEASP.style.display = 'none';
  BGMIP.style.display = 'none';
  selectedEvent = "DEBATE";
  generateList();
}

function ideasTeams() {
  formbackContainer.style.display = 'none';
  participantsDisplay.style.display = 'block';
  QUIZP.style.display = 'none';
  DEBATEP.style.display = 'none';
  IDEASP.style.display = 'block';
  BGMIP.style.display = 'none';
  selectedEvent = "IDEAS";
  generateList();
}
function backBtn() {
  formbackContainer.style.display = '';
  participantsDisplay.style.display = 'none';
}

function generateList() {
  db.collection("users").where("participatedEvents", "array-contains", selectedEvent).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let Data = doc.data();
      memberTemplate = `
      <div class = "userCard">
        <div class="userData">
          <p>
            ${Data["name"]}
          </p>
          <span>
            ${Data["email"]}
          </span>
        </div>
        <div class="userIcon">
          <a><i class="fas fa-user-plus"></i></a>
        </div>
      </div>
    `;
      let editElement = document.getElementsByClassName("userFill")[0];
      editElement.innerHTML += memberTemplate;
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  })
}

function sortEntries() {
  $('.userData > p').sort(function(a, b) {
    if (a.textContent < b.textContent) {
      return -1;
    } else {
      return 1;
    }
  }).appendTo('.userData');
}