const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container")
hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
console.log('hello');
const auth = firebase.auth();
function registerAcc() {
  let email = document.getElementById('participantEmail').value;
  let pass = document.getElementById('password').value;
  validation(email);
  function validation(email) {
    let domain_name = (email.substring(email.length - 13));
    if (domain_name == '@sigce.edu.in') {
      value = true;
    } else {
      value = false;
    }
    return value;
  };
  if (value == true) {
    let promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e=> alert(e.message));
    alert('Signed Up!');
    document.getElementById('reg_form').reset();
    setTimeout(function() {
      window.open('https://sigceevent.ml', '_self');
    }, 1000);
  } else {
    alert('Enter The College Email Id!');
  }
};