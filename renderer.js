const mybutton = document.getElementById("titleHeader");

scanFile()

mybutton.onclick = (e) => {
    readFile(e.target.id);
}
