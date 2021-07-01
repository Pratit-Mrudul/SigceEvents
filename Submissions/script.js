const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

function inputsettings() {
  document.getElementById('card').style.display = 'block';
  document.getElementById('inner').style.display = 'none';
}

function changeButton() {
  var Labelbtn = document.getElementById('btnFiles');
  Labelbtn.innerHTML = 'Upload';
  Labelbtn.setAttribute('for', '');
}

function info() {
  eventName = document.getElementById('event').value;
  if (eventName == "PHOTOGRAPHY"){
    numberOfFiles = 5
    fileTypes = ["image/jpg", "image/jpeg", "image/png", "image/DNG", "image/NEF"]
  } else if (eventName == "DANCE") {
    fileTypes = ["video/x-matroska", "video/mp4"]
  } else if (eventName == "NAIL-ART") {
    fileTypes = ["video/x-matroska", "video/mp4"]
  } else if (eventName == "INSTRUMENT") {
    fileTypes = ["video/x-matroska", "video/mp4"]
  } else if (eventName == "SKETCH") {
    fileTypes = ['.jpg', '.jpeg', '.png']
  } else if (eventName == "CHALK") {
    fileTypes = ["video/x-matroska", "video/mp4"]
  } else if (eventName == "POSTER") {
    fileTypes = ["image/jpg", "image/jpeg", "image/png"]
  }
}