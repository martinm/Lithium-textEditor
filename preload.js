const fs = require("fs");

readDocument = () => {
  fs.readFile("./notes/text.txt", function(err, buf) {
    console.log(buf.toString());
    document.getElementById("documentContent").innerText = buf.toString();
    documentContent = buf.toString();
  });
}

writeDocument = () => {
    const textCont = document.getElementById("documentContent").innerText;
    fs.writeFile("./notes/text.txt", textCont, (err) => {
      if (err) console.log(err);
    });
}