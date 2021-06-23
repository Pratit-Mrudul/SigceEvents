const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

function registerAcc() {
  let email = document.getElementById('participantEmail').value;
  let pass = document.getElementById('password').value;
  let name = document.getElementById('participantName').value;
  let phoneNo = document.getElementById('phoneNo').value;
  let year = document.getElementById('year').value;
  let branch = document.getElementById('branch').value;
  let rollNo = document.getElementById('participantRNo').value;
  if (emailValidation(email)) {
    createUser(email, pass, name, phoneNo, year, branch, rollNo);
  } else {
    alert('Enter The Valid Email Id!');
  }
};