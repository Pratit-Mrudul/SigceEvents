const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const eventSelector = document.getElementById("selectEvent");
const fileUpload = document.getElementsByClassName('formback')[1];
const waitMessage = document.getElementById("waitMessage");
const waitScreenMessage = document.getElementById("waitingScreenMessage");
const eventList = document.getElementById('event');
const uploadProgress = document.getElementById('uploadProgress');

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

function inputsettings() {
  document.getElementById('card').style.display = 'block';
  document.getElementById('inner').style.display = 'none';
}

function sizeCheck(files2) {
  if(files2[0].size > 200000000){
     alert("File is too big!");
     location.reload();
     return;
  };
};

function changeButton() {
  let submittedFiles = finalFilesList;
  if (submittedFiles.length == numberOfFiles) {
    var Labelbtn = document.getElementById('btnFiles');
    var Uploadbtn = document.getElementById('btnFilesUpload');
    Labelbtn.style.display = 'none';
    Labelbtn.setAttribute('for', '');
    Uploadbtn.style.display = ''
    if (eventName == "POSTER") {
      document.getElementById('formElement').innerHTML += `<textarea id="posterDesc" value="" placeholder="Poster Description" rows="4" required="required" />`
    }
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
    numberOfFiles = 2
    fileTypes = ["video/x-matroska", "video/mp4", "image/jpg", "image/jpeg", "image/png", "image/DNG", "image/NEF"]
  } else if (eventName == "SKETCH") {
    eventSelector.style.display = 'none';
    fileUpload.style.display = '';
    numberOfFiles = 2
    fileTypes = ["image/jpg", "image/jpeg", "image/png", "video/x-matroska", "video/mp4",]
  } else if (eventName == "CHALK") {
    eventSelector.style.display = 'none';
    fileUpload.style.display = '';
    numberOfFiles = 2
    fileTypes = ["video/x-matroska", "video/mp4", "image/jpg", "image/jpeg", "image/png", "image/DNG", "image/NEF"]
  } else if (eventName == "POSTER") {
    eventSelector.style.display = 'none';
    fileUpload.style.display = '';
    fileTypes = ["image/jpg", "image/jpeg", "image/png"]
  } else if (eventName == "MASK-PAINTING") {
    eventSelector.style.display = 'none';
    fileUpload.style.display = '';
    numberOfFiles = 2
    fileTypes = ["video/x-matroska", "video/mp4", "image/jpg", "image/jpeg", "image/png", "image/DNG", "image/NEF"]
  }
}
