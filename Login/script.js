const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

function getLoginData() {
  let loginEmail = document.getElementById('loginEmail').value;
  let LoginPw = document.getElementById('LoginPw').value;
  setTimeout(function() {
    document.getElementById('circeloader').style.display = '';
  }, 100);

  if (emailValidation(loginEmail)) {
    login(loginEmail, LoginPw);
  }
}