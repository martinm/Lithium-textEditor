const fs = require("fs");
const path = require('path');
const directoryPath = path.join(__dirname, 'notes');

readFile = (documentId) => {
  fs.readFile("./notes/"+documentId+".txt", (err, data) => {
    if (err) console.log(err);
    document.getElementById("documentContent").innerText = data.toString();
    documentContent = data.toString();
  });
}

writeFile = (documentId) => {
    const textCont = document.getElementById(documentId).innerText;
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