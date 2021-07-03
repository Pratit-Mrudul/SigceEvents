let ref = firebase.storage().ref();
var numberOfFiles = 1
var fileTypes = [];
let eventName = '';
let textContentPoster = '';
let finalFilesList = []
var uploadTask;

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
                                uploadTask =  ref.child(`${eventName}/${user.email}/${name}`).put(file, metadata);
                                taskManger(uploadTask);
                            }
                        }
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
                            uploadTask =  ref.child(`${eventName}/${user.email}/${name}`).put(file, metadata);
                            taskManger(uploadTask);
                        }
                    }
                }
            } 
        }
    });
}

function taskManger(task) {
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    task.on('state_changed', 
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploadProgress.innerHTML = 'Upload is ' + progress + '% done';
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      // Handle unsuccessful uploads
      console.log('error')
    }, 
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      waitScreenMessage.innerHTML = 'Done';
    }
  );
}
