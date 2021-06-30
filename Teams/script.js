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
  BGMIP.style.display = 'block';
  selectedEvent = "BGMI";
  generateList();
}

function quizTeams() {
  formbackContainer.style.display = 'none';
  participantsDisplay.style.display = 'block';
  BGMIP.style.display = 'block';
  selectedEvent = "QUIZ";
  generateList();
}

function debateTeams() {
  formbackContainer.style.display = 'none';
  participantsDisplay.style.display = 'block';
  BGMIP.style.display = 'block';
  selectedEvent = "DEBATE";
  generateList();
}

function ideasTeams() {
  formbackContainer.style.display = 'none';
  participantsDisplay.style.display = 'block';
  BGMIP.style.display = 'block';
  selectedEvent = "SCI-PROJECT";
  generateList();
}
function backBtn() {
  formbackContainer.style.display = '';
  participantsDisplay.style.display = 'none';
}

function generateList() {
  BGMIP.getElementsByTagName("h4")[0].innerHTML = selectedEvent;
  document.getElementsByClassName("userFill")[0].innerHTML = '';
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
        <div class="userIcon" onClick="sendRequest('${Data["email"]}')">
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
  // Declare variables
  var input, filter, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  li = document.getElementsByClassName('userData');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("p")[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      document.getElementsByClassName('userCard')[i].style.display = "";
    } else {
      document.getElementsByClassName('userCard')[i].style.display = "none";
    }
  }
}

function sendRequest(recieverEmail) {
  firebase.auth().onAuthStateChanged((user) => {
    let senderEmail = user.email;
    if (user) {
      db.collection("events").doc(selectedEvent).get().then((doc) => {
        let data = doc.data();
        let recievedRequests = data[recieverEmail]['recievedRequests'];
        if (recievedRequests == null || recievedRequests == undefined) {
          recievedRequests = [];
        }
        if (recievedRequests.includes(senderEmail)) {return;};
        let sentRequests = data[senderEmail]['sentRequests'];
        if (sentRequests == null || sentRequests == undefined) {
          sentRequests = [];
        }
        recievedRequests.push(senderEmail);
        sentRequests.push(recieverEmail);
        data[recieverEmail] = {'recievedRequests': recievedRequests};
        data[senderEmail] = {'sentRequests': sentRequests};
        db.collection("events").doc(selectedEvent).set(data, {merge: true})
      });
    } else {}
  });
}