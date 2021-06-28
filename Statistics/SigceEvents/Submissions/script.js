const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
const dragArea = document.querySelector('.drag-area');
let textHeader = document.querySelector('.header');
let file;
let input = dragArea.querySelector('input');
let subFile = document.getElementById('subFile');
function btnFiles() {
  input.click();
};

function inputFile() {
  file = this.files[0];
  showFile();
  dragArea.classList.add('active');
};

// WHEN USER DRAGS FILE OVER dragArea
dragArea.addEventListener('dragover', (event)=> {
  event.preventDefault()
  dragArea.classList.add('active');
  textHeader.textContent = 'Release To Upload A File';
});
// WHEN USER LEAVES FROM dragArea
dragArea.addEventListener('dragleave', ()=> {
  dragArea.classList.remove('active')
  textHeader.textContent = 'Drag And Drop To Upload File';
});
// WHEN USER DROPS FILE OVER dragArea
dragArea.addEventListener('drop', (event)=> {
  event.preventDefault();
  file = event.dataTransfer.files[0]
  showIMGFile();
  subFile.style.display = 'block';
});

// FUNCTION FOR PREVIEW OF FILE
// AND VALIDATION OF IMG FILE FORMAT
function showIMGFile() {
  let fileType = file.type;
  let valid = ['image/jpeg',
    'image/jpg',
    'image/png'];
  if (valid.includes(fileType)) {
    let fileReader = new fileReader();
    fileReader.onload = ()=> {
      let fileURL = fileReader.result;
      let imgTag = `<img src='${fileURL}' alt=""/>`
      dragArea.innerHTML = imgTag;
      fileReader.readAsDataURL(file);
    }
  } else {
    alert('This Is Not Image File!');
    dragArea.classList.remove('active');
  }
}