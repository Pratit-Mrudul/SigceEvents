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

BGMIMember.addEventListener('click', bgmiTeams);
QUIZMember.addEventListener('click', quizTeams);
DEBATEMember.addEventListener('click', debateTeams);

function bgmiTeams() {
  formbackContainer.style.display = 'none';
  participantsDisplay.style.display = 'block';
  QUIZP.style.display = 'none';
  DEBATEP.style.display = 'none';
  BGMIP.style.display = 'block';
}

function quizTeams() {
  formbackContainer.style.display = 'none';
  participantsDisplay.style.display = 'block';
  QUIZP.style.display = 'block';
  DEBATEP.style.display = 'none';
  BGMIP.style.display = 'none';
}

function debateTeams() {
  formbackContainer.style.display = 'none';
  participantsDisplay.style.display = 'block';
  QUIZP.style.display = 'none';
  DEBATEP.style.display = 'block';
  BGMIP.style.display = 'none';
}
function backBtn() {
  formbackContainer.style.display = '';
  participantsDisplay.style.display = 'none';
}