const titleHeader = document.getElementById("titleHeader");
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
    }
}