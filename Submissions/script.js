const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const eventSelector = document.getElementById("selectEvent");
const fileUpload = document.getElementsByClassName('formback')[1];
const waitMessage = document.getElementById("waitMessage");
const waitScreenMessage = document.getElementById("waitingScreenMessage");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

function inputsettings() {
  document.getElementById('card').style.display = 'block';
  document.getElementById('inner').style.display = 'none';
}

function changeButton() {
  let submittedFiles = document.querySelector('#file').files;
  if (submittedFiles.length == numberOfFiles) {
    var Labelbtn = document.getElementById('btnFiles');
    Labelbtn.innerHTML = 'Upload';
    Labelbtn.setAttribute('for', '');
  }
}

function info() {
  eventName = document.getElementById('event').value;
  if (eventName == "PHOTOGRAPHY"){
    eventSelector.style.display = 'none';
    fileUpload.style.display = '';
    numberOfFiles = 5
    fileTypes = ["image/jpg", "image/jpeg", "image/png", "image/DNG", "image/NEF"]
  } else if (eventName == "DANCE") {
    eventSelector.style.display = 'none';
    fileUpload.style.display = '';
    fileTypes = ["video/x-matroska", "video/mp4"]
  } else if (eventName == "NAIL-ART") {
    eventSelector.style.display = 'none';
    fileUpload.style.display = '';
    fileTypes = ["video/x-matroska", "video/mp4"]
  } else if (eventName == "INSTRUMENT") {
    eventSelector.style.display = 'none';
    fileUpload.style.display = '';
    fileTypes = ["video/x-matroska", "video/mp4"]
  } else if (eventName == "SKETCH") {
    eventSelector.style.display = 'none';
    fileUpload.style.display = '';
    fileTypes = ['.jpg', '.jpeg', '.png']
  } else if (eventName == "CHALK") {
    eventSelector.style.display = 'none';
    fileUpload.style.display = '';
    fileTypes = ["video/x-matroska", "video/mp4"]
  } else if (eventName == "POSTER") {
    eventSelector.style.display = 'none';
    fileUpload.style.display = '';
    fileTypes = ["image/jpg", "image/jpeg", "image/png"]
    document.getElementById('formElement').innerHTML += `<textarea id="posterDesc" value="" placeholder="Poster Description" rows="4" required="required" />`
  }
}
