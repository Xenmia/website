function updateColumns(oldNum, newNum) { // Updates the number of columns
    const main = document.getElementById("mainDiv");
    removeAllContent();
    if (oldNum > newNum) {
        for (let i = 0; i < oldNum - newNum; i++) {
            main.lastElementChild.remove();
        }
    } else if (oldNum < newNum) {
        for (let i = 0; i < newNum - oldNum; i++) {
            const newColumn = document.createElement("div");
            newColumn.className = "columns";
            main.appendChild(newColumn);
        }
    }
    addAllContent();
}

function addAllContent() { // Adds all the content (notes) from localStorage.getItem("notes")
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
        const columns = document.getElementsByClassName("columns");
        for (const content of notes) {
            addOneContent(content, columns);
        }
    }
}

function removeAllContent() { // Removes the content of the columns (the notes)
    const columns = document.getElementsByClassName("columns");
    for (const column of columns) {column.innerHTML = ""};
}

function addOneContent(content, columns) { // Adds one note from localStorage.getItem("notes")
    let colH = [];
    for (const col of columns) {colH.push(col.clientHeight)};
    const col = choseColumn(colH);
    const note = document.createElement("div");
    note.id = `note${content.id}`;
    note.className = "note";
    note.textContent = content.text;
    columns[col].appendChild(note);
}

function choseColumn(colH) { // Util to select the col to append the note to (choses the shortest one)
    let min = colH[0];
    let col = 0;
    for (let i = 1; i < colH.length; i++){
        if (min > colH[i]) {
            min = colH[i];
            col = i;
        }
    }
    return col;
}