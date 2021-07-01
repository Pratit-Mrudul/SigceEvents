const ref = firebase.storage().ref();
var numberOfFiles = 1
var fileTypes = [];
let eventName = '';

async function sendFiles() {
    let submittedFiles = document.querySelector('#file').files;
    if (submittedFiles.length == numberOfFiles) {
        for (let i = 0; i < numberOfFiles; i++ ) {
            const file = await document.querySelector('#file').files[i];
            const name = (+new Date()) + '-' + file.name;
            if (fileTypes.includes(file.type)) {
                const metadata = { contentType: file.type };
                await ref.child(eventName).put(file, metadata).then(() => {console.log('done')});
            }
        }
    }
}