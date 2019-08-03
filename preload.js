const fs = require("fs");
const path = require('path');
const directoryPath = path.join(__dirname, 'notes');
let temp;
readFile = (documentId) => {
  fs.readFile("./notes/"+documentId+".txt", (err, data) => {
    if (err) console.log(err);
    document.getElementById("documentContent").innerText = data.toString();
    documentContent = data.toString();
  });
}

writeFile = (documentId) => {
    let textCont = document.getElementById("documentContent").innerText;
    fs.writeFile("./notes/"+documentId+".txt", textCont, (err) => {
      if (err) console.log(err);
    });
}

scanFile = () => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) console.log(err);

    files.forEach( (file) => {
      let fileName = removeFileExtension(file);
      constructFileTitleElement(fileName);
    });
  });
}

removeFileExtension = (fileName) => {
  let dotIndex = fileName.indexOf(".");
  return fileName.substring(0, dotIndex);
}

constructFileTitleElement = (fileName) => {
  let titleHeader = document.getElementById("titleHeader");
  let newDiv = document.createElement("div");
  newDiv.className = "fileTitle";
  newDiv.id = fileName;
  newDiv.innerText = fileName;
  titleHeader.appendChild(newDiv)
}

highlightDocument = (documentId) => {
  let selectedDocument = document.getElementById(documentId);
  if (temp !== undefined)
    temp.style.backgroundColor = "rgb(60, 60, 60)";
  temp = selectedDocument;
  selectedDocument.style.backgroundColor = "rgba(77, 155, 191, 75)";
}

newDoc = () => {
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