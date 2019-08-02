const titleHeader = document.getElementById("titleHeader");
const newButton = document.getElementById("newNoteButton");
const saveButton = document.getElementById("saveNoteButton");
const documentContent = document.getElementById("documentContent");

let saveButtonFlag = false;
let saveButtonCounter = 0;
let keydownCounter = 0;
let keydownArr = [];
let currentDocumentId;

//load list of files from notes foler
scanFile()

//open text file that was clicked on in the "Notes" panel
titleHeader.onclick = (e) => {
    currentDocumentId = e.target.id;
    readFile(currentDocumentId);
    highlightDocument(currentDocumentId);
}

//unhide element when "new" button is clicked so the user can type in new note name
newButton.onclick = () => {
    const newNoteNameWindow = document.getElementById("newNoteNameWindow");
    newNoteNameWindow.style.display = "block";
    newNoteNameWindow.focus();
    newNoteNameWindow.onkeydown = (k) => {
        if (k.keyCode == 13) {
            newNoteNameWindow.style.display = "none";
            constructFileTitleElement(newNoteNameWindow.textContent);
            currentDocumentId = newNoteNameWindow.textContent;
            documentContent.focus();
            highlightDocument(currentDocumentId);
            newNoteNameWindow.textContent = "";
            documentContent.textContent = "";
        }
    }
}

//trigger save function when save button is pressed
saveButton.onclick = () => {
    writeFile(currentDocumentId);
    saveButton.style.color = "rgb(120, 120, 120)";
    saveButtonFlag = false;
}

//trigger save function when cmnd+s or ctr+s is pressed
document.onkeydown = (k) => {
    keydownArr[keydownCounter] = k.keyCode;
    if (keydownCounter == 0 && keydownArr[keydownCounter] == (91 || 17))
        keydownCounter++;
    else
        keydownCounter = 0;
    if ((keydownArr[0] == (91) && keydownArr[1] == 83)) {
        writeFile(currentDocumentId);
        keydownArr[0] = null;
        keydownArr[1] = null;
        saveButton.style.color = "rgb(120, 120, 120)";
        saveButtonFlag = false;
    }
}

//if button is pressed while focused on content window, save button goes light from grey
documentContent.onkeyup = () => {
    saveButtonCounter++;
    if (saveButtonCounter > 0 && saveButtonFlag == false)
        saveButton.style.color = "rgb(255, 255, 255)";
        saveButtonFlag = true;
}