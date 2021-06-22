

let Login = document.getElementById('Login');
Login.addEventListener('click', e =>{
  const email = document.getElementById('participantEmail').value;
  const pass = document.getElementById('password').value;
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
  
});

let SignUp = document.getElementById('SignUp');
SignUp.addEventListener('click', e=>{
  
  const email = document.getElementById('participantEmail').value;
  const pass = document.getElementById('password').value;
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise 
      .catch(e => console.log(e.message));
});

firebase.auth().onAuthStateChanged(firebaseUser =>{
  if(firebaseUser){
    console.log(firebaseUser);
  }
  else{
    console.log('Not Logged In');
  }
});