const ref = firebase.storage().ref();

async function sendFiles() {
    const file = await document.querySelector('#file').files[0];
    const name = (+new Date()) + '-' + file.name;
    const metadata = { contentType: file.type };
    await ref.child('Photography').put(file, metadata).then(() => {console.log('done')});
}