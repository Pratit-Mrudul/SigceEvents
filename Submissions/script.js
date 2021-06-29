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