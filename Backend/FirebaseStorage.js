const ref = firebase.storage().ref();
var numberOfFiles = 1
var fileTypes = [];
let eventName = '';
let textContentPoster = '';
let finalFilesList = []

async function sendFiles() {
    await firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            if (eventName == 'POSTER') {
                try{
                    textContentPoster = document.getElementById('posterDesc').value;
                } catch(e) {console.log(e); return;}
                if (textContentPoster != '') {
                    fileUpload.style.display = 'none';
                    waitMessage.style.display = '';
                    let data = {};
                    data[user.email] = {
                        "posterDescription": textContentPoster,
                    }
                    db.collection('events').doc('POSTER').set(data, {merge: true});
                    let submittedFiles = finalFilesList;
                    if (submittedFiles.length <= numberOfFiles) {
                        for (let i = 0; i < numberOfFiles; i++ ) {
                            const file = finalFilesList[i][0];
                            const name = (+new Date()) + '-' + file.name;
                            if (fileTypes.includes(file.type)) {
                                const metadata = { contentType: file.type };
                                await ref.child(`${eventName}/${user.email}/${name}`).put(file, metadata).then(() => {console.log('done')});
                            }
                        }
                        waitScreenMessage.innerHTML = 'Done'
                    }
                } else {document.getElementById('formElement').innerHTML += 'Please enter Poster Description'}
            } else {
                fileUpload.style.display = 'none';
                waitMessage.style.display = '';
                let submittedFiles = finalFilesList;
                if (submittedFiles.length <= numberOfFiles) {
                    for (let i = 0; i < numberOfFiles; i++ ) {
                        const file = finalFilesList[i][0];
                        const name = (+new Date()) + '-' + file.name;
                        if (fileTypes.includes(file.type)) {
                            const metadata = { contentType: file.type };
                            await ref.child(`${eventName}/${user.email}/${name}`).put(file, metadata).then(() => {console.log('done')});
                        }
                    }
                    waitScreenMessage.innerHTML = 'Done';
                }
            } 
        }
    });
}
