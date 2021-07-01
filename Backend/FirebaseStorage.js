const ref = firebase.storage().ref();

function sendFiles() {
    const file = document.querySelector('#file').files[0];
    const name = (+new Date()) + '-' + file.name;
    const metadata = { contentType: file.type };
    const task = ref.child('Photography').put(file, metadata);
}