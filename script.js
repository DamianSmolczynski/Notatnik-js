notepad.document.designMode = "on" ;

//buttons
const boldBtn = document.getElementById("bold");
const italicBtn = document.getElementById("italic");
const indentBtn = document.getElementById("indent");
const copyBtn = document.getElementById("copy");
const cutBtn = document.getElementById("cut");
const undoBtn = document.getElementById("undo");
const loadBtn = document.getElementById("load");
const saveBtn = document.getElementById("save");
const content = notepad.document.getElementsByTagName("body");

//onlclick event listeners
boldBtn.addEventListener("click", ()=>{
notepad.document.execCommand("bold");})
italicBtn.addEventListener("click", ()=>{
notepad.document.execCommand("italic");})
indentBtn.addEventListener("click", ()=>{
notepad.document.execCommand("insertUnorderedList");})
copyBtn.addEventListener("click", ()=>{
notepad.document.execCommand("copy");})
cutBtn.addEventListener("click", ()=>{
notepad.document.execCommand("cut");})
undoBtn.addEventListener("click", ()=>{
notepad.document.execCommand("undo");})
loadBtn.addEventListener("click", ()=>{

//downloading json, updating iframe content
fetch('./note.json')
    .then(function(resp) {
        return resp.json();
    })
    .then (function(data){
        console.log("Załadowałem plik")
        var teksty = JSON.parse(JSON.stringify(data))
        content[0].innerHTML = teksty.notes;
    });


})

//posting iframe content to server
saveBtn.addEventListener("click", ()=>{
    var file = { notes: content[0].innerHTML};
    var fileStrig = JSON.stringify(file);

    console.log("Wysyłam plik na serwer")
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: fileStrig,
        })
})


