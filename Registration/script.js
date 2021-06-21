const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
let regFormFn = document.getElementById('regFormFn');
regFormFn.addEventListener('click', regform);

function regform() {
  document.getElementById('chooseevent').style.display = 'none';
  document.getElementById('regform').style.display = 'block';
}


function validate() {
  // POETRY-SHAYRI
  if (document.getElementById('event').value == 'POETRY-SHAYRI') {
    document.getElementById('language').style.display = 'block';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // STANDUP
  else if (document.getElementById('event').value == 'STANDUP') {
    document.getElementById('language').style.display = 'block';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'block';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // NAIL-ART
  else if (document.getElementById('event').value == 'NAIL-ART') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // DEBATE
  else if (document.getElementById('event').value == 'DEBATE') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'block';
    document.getElementById('topic').style.display = 'block';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // POSTER
  else if (document.getElementById('event').value == 'NAIL-ART') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'block';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  //SKRIBBLE
  else if (document.getElementById('event').value == 'POSTER') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // MASK-PAINTING
  else if (document.getElementById('event').value == 'MASK-PAINTING') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // MUSIC
  else if (document.getElementById('event').value == 'MUSIC') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // DANCE
  else if (document.getElementById('event').value == 'DANCE') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // PHOTOGRAPHY
  else if (document.getElementById('event').value == 'PHOTOGRAPHY') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // SCI-PROJECT
  else if (document.getElementById('event').value == 'SCI-PROJECT') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'block';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // ELOCUTION
  else if (document.getElementById('event').value == 'ELOCUTION') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'block';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // CODING
  else if (document.getElementById('event').value == 'CODING') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'block';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // INSTRUMENT
  else if (document.getElementById('event').value == 'INSTRUMENT') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'block';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // QUIZ
  else if (document.getElementById('event').value == 'QUIZ') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // BGMI
  else if (document.getElementById('event').value == 'BGMI') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'block';
    document.getElementById('chessid').style.display = 'none';
  }
  // CHALK
  else if (document.getElementById('event').value == 'CHALK') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // CHESS
  else if (document.getElementById('event').value == 'CHESS') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'block';
  }
}

//FIREBASE

const regformSubmit = document.getElementById('regformSubmit');
regformSubmit.addEventListener('click', registerForm);

let contactInfo = firebase.database().ref("Participants");

function registerForm(e) {
  e.preventDefault()
  let participantName = document.getElementById('participantName').value;
  let participantEmail = document.getElementById('participantEmail').value;
  let participantPNo = document.getElementById('participantPNo').value;
  let year = document.getElementById('year').value;
  let branch = document.getElementById('branch').value;
  let participantRNo = document.getElementById('participantRNo').value;
  let event = document.getElementById('event').value;
  let languageselect = document.getElementById('languageselect').value;
  let proagainstselect = document.getElementById('proagainstselect').value;
  let topicvalue = document.getElementById('topicvalue').value;
  let instrumentselect = document.getElementById('instrumentselect').value;
  let codelanguageselect = document.getElementById('codelanguageselect').value;
  let BGMICharID = document.getElementById('BGMICharID').value;
  let BGMIUsername = document.getElementById('BGMIUsername').value;
  let ParticipantChessID = document.getElementById('ParticipantChessID').value;

  savecontactInfo(participantName, participantEmail, participantPNo, year, branch, participantRNo, event, languageselect, proagainstselect, topicvalue, instrumentselect, codelanguageselect, BGMICharID, BGMIUsername, ParticipantChessID);
  
      setTimeout(function() {
        document.getElementById('reg_form').reset()
      }, 1000);
}



function savecontactInfo(participantName, participantEmail, participantPNo, year, branch, participantRNo, event, languageselect, proagainstselect, topicvalue, instrumentselect, codelanguageselect,  BGMICharID, BGMIUsername, ParticipantChessID) {
  let newcontactInfo = contactInfo.push();

  newcontactInfo.set({
    Name: participantName,
    EmailID: participantEmail,
    PhoneNo: participantPNo,
    Year: year,
    Branch: branch,
    RollNo: participantRNo,
  });
}