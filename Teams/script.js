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

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    db.collection("users").doc(user.uid).get().then(async (doc) => {
      let data = doc.data();
      let participatedEvents = data['participatedEvents'];
      if (participatedEvents != null && participatedEvents != undefined) {
        let count = 0
        if (participatedEvents.includes('BGMI')) {
          document.getElementById('BGMIBlock').style.display = '';
          try {
            await db.collection('events').doc('BGMI').get().then((doc) => {
              let data = doc.data();
              function repeaterChecker(acceptedEmailList) {
                for (let index in acceptedEmailList) {
                  if(!isNaN(parseInt(index))) {
                    if (acceptedEmailList[index] != user.email) {
                      if(!data[user.email]['acceptedRequests'].includes(acceptedEmailList[index])) {
                        data[user.email]['acceptedRequests'].push(acceptedEmailList[index]);
                      }
                      if (data[acceptedEmailList[index]]['acceptedRequests'] != undefined) {
                        repeaterChecker(data[acceptedEmailList[index]]['acceptedRequests']);
                      }
                    }
                  }
                }
              }
              repeaterChecker(data[user.email]['acceptedRequests']);
              let AcceptedList = data[user.email]['acceptedRequests'];
              for (index in AcceptedList) {
                document.getElementById('BGMIMembers').innerHTML = data[AcceptedList[index]]['name'] + document.getElementById('BGMIMembers').innerHTML;
              }
            })
          } catch (e) {console.log(e)}
          count += 1;
        }
        if (participatedEvents.includes('QUIZ')) {
          document.getElementById('QUIZBlock').style.display = '';
          try {
            await db.collection('events').doc('QUIZ').get().then((doc) => {
              let data = doc.data();
              let AcceptedList = data[user.email]['acceptedRequests'];
              for (index in AcceptedList) {
                document.getElementById('QUIZMembers').innerHTML = data[AcceptedList[index]]['name'] + document.getElementById('QUIZMembers').innerHTML;
              }
            })
          } catch (e) {console.log(e)}
          count += 1;
        }
        if (participatedEvents.includes('DEBATE')) {
          document.getElementById('DEBATEBlock').style.display = '';
          try {
            await db.collection('events').doc('DEBATE').get().then((doc) => {
              let data = doc.data();
              let AcceptedList = data[user.email]['acceptedRequests'];
              for (index in AcceptedList) {
                document.getElementById('DEBATEMembers').innerHTML = data[AcceptedList[index]]['name'] + document.getElementById('DEBATEMembers').innerHTML;
              }
            })
          } catch (e) {console.log(e)}
          count += 1;
        }
        if (participatedEvents.includes('SCI-PROJECT')) {
          document.getElementById('SCI-PROJECTBlock').style.display = '';
          try {
            await db.collection('events').doc('SCI-PROJECT').get().then((doc) => {
              let data = doc.data();
              let AcceptedList = data[user.email]['acceptedRequests'];
              for (index in AcceptedList) {
                document.getElementById('SCI-PROJECTMembers').innerHTML = data[AcceptedList[index]]['name'] + document.getElementById('SCI-PROJECTMembers').innerHTML;
              }
            })
          } catch(e) {console.log(e)}
          count += 1;
        }
        let totalColumns = ''
        for (let i = 0; i < count; i++) {
           totalColumns += "auto ";
        }
        formbackContainer.style.gridTemplateColumns = totalColumns;
      }
    });
  } else {}
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
        let acceptedRequests = data[recieverEmail]['acceptedRequests'];
        if (recievedRequests == null || recievedRequests == undefined) {
          recievedRequests = [];
        }
        if (acceptedRequests == null || acceptedRequests == undefined) {
          acceptedRequests = [];
        }
        if (recievedRequests.includes(senderEmail) || acceptedRequests.includes(senderEmail)) {
          alert(`You have already sent or accepted the request to ${data[recieverEmail]['name']}`);
          return;
        };
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
