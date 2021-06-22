 console.log('hello');
    const hamburger_menu = document.querySelector(".hamburger-menu");
    const container = document.querySelector(".container");

    hamburger_menu.addEventListener("click", () => {
      container.classList.toggle("active");
    });


    const auth = firebase.auth();

    const SignUp = document.getElementById('SignUp');
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
      }
      if (value == true) {
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e=> alert(e.message));
        alert('Signed Up!');
      } else {
        alert('Enter The College Email Id!');
      }
    }
    const Login = document.getElementById('Login');
    function signIn() {

      let email = document.getElementById('participantEmail').value;
      let pass = document.getElementById('password').value;
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e=> alert(e.message));
      alert('Signed In!' + email);
    }
