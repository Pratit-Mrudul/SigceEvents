const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');

hamburger_menu.addEventListener('click', () => {
  container.classList.toggle('active');
});

function getLoginData() {
  let loginEmail = document.getElementById('loginEmail').value;
  let LoginPw = document.getElementById('LoginPw').value;
  if (emailValidation(loginEmail)) {
    login(loginEmail, LoginPw);
    document.getElementById('regLoading').style.display = 'inline-block';
    setTimeout(function() {
      document.getElementById('regLoading').style.display = 'none';
      let event = document.getElementById('event').value;
      alert(`You Have Successfully Registered For The ${event}!`)
      document.getElementById('reg_form').reset();
    }, 1000);
  }
}