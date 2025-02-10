let notes = JSON.parse(localStorage.getItem("notes"));
let tempColNumMain;
// format:
// notes = [
//   {id: 1, text: "the text"},
//   {id: 2, text: "the text"}
// ]

// Loading the notes
function updateColumns(num, columnsNum) {
    tempColNumMain = num;
    console.log("Created columns");
    let column = document.getElementById("column");
    let copyColumn = column.content.cloneNode(true);
    let main = document.getElementById("mainDiv");
    if (columnsNum < num) {
        console.log("1");
        for (let i = 0; i < num - columnsNum; i++) {
            main.lastElementChild.remove();
        }
    } else if (columnsNum > num) {
        console.log("2");
        for (let i = 0; i < columnsNum - num; i++) {
            let newColumn = copyColumn.cloneNode(true);
            main.appendChild(newColumn);
        }
    } else if (!document.getElementsByClassName("columns").length) {
        console.log("3");
        for (let i = 0; i < num; i++){
            let newColumn = copyColumn.cloneNode(true);
            main.appendChild(newColumn);
        }
    }
    clearColumns();
    fillColumns();
};

function clearColumns() {
    let columns = document.getElementsByClassName("columns");
    if (columns) {
        for (let column of columns) {
            let contents = column.children;
            for (let content of contents) {
                content.remove();
            };
        };
    };
    console.log("Cleared the columns");
    
};

function fillColumns() {
    let columns = document.getElementsByClassName("columns");
    try {
        if (notes){
            for (let note of notes) {
                let heights = [];
                for (let column of columns) {
                    heights.push(column.clientHeight);
                };
                let div = document.createElement("div");
                let col = findColumn(heights);
                div.className = "taskSquare";
                div.textContent = note.text;
                columns[col].appendChild(div);
            };
            console.log("Filled the columns");
            
        };
    } catch (error) {
        console.error(error);        
    };
    
};

function findColumn(heights) {
    let min = heights[0];
    let col = 0;
    for (let i = 1; i < heights.length; i++){
        if (min > heights[i]) {
            min = heights[i];
            col = i;
        };
    };
    return col;
};


// Saving the notes

let openWindowBtn = document.getElementById("writeBtn");
let body = document.getElementsByTagName("body")[0];

openWindowBtn.addEventListener("click", startWriting);

function startWriting() {
    const template = document.getElementById("writingGuiTemplate");
    const templateCopy = template.content.cloneNode(true);
    body.appendChild(templateCopy)
    const writingGui = document.getElementById("writingGui");
    const cancelBtn = document.getElementById("cancelBtn");
    const doneBtn = document.getElementById("doneBtn");

    cancelBtn.addEventListener("click", function(){
        writingGui.remove();
    })

    doneBtn.addEventListener("click", function(){
        const text = document.getElementById("writeArea").value;
        const note = {id: 1, text: text};
        if (!notes) {
            notes = [note];
        } else {
            note.id = notes.length+1;
            notes.push(note);
        }
        writingGui.remove();
    })
}
