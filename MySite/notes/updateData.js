function addNote(text) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    const columns = document.getElementsByClassName("columns");
    notes.push({id: notes.length, text: text});
    addOneContent(notes[notes.length-1], columns);
    localStorage.setItem("notes", JSON.stringify(notes));
}

function removeNote(id) {
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes.splice(id, 1);
    for (let i = id; i < notes.length; i++) {notes[i].id--;};
    localStorage.setItem("notes", JSON.stringify(notes));
    removeAllContent();
    addAllContent();
}

const writeBtn = document.getElementById("writeBtn");
writeBtn.addEventListener("click", writeNote)

function writeNote() {
    const template = document.getElementById("writingGuiTemplate");
    const templateCopy = template.content.cloneNode(true);
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(templateCopy)
    const writingGui = document.getElementById("writingGui");
    const cancelBtn = document.getElementById("cancelBtn");
    const doneBtn = document.getElementById("doneBtn");

    cancelBtn.addEventListener("click", function(){
        writingGui.remove();
    })

    doneBtn.addEventListener("click", function(){
        const text = document.getElementById("writeArea").value;
        addNote(text);
        writingGui.remove();
    })
}