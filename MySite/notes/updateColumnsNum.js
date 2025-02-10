const colNumDiv = document.getElementById("columnsNum"); // The div that changes it's width in style.css
let oldColNum = Math.floor(parseFloat(getComputedStyle(colNumDiv).width)); // The first number of columns (used for comparison too)

updateColumns(0, oldColNum);

function getColNum() {    
    const newColNum = Math.floor(parseFloat(getComputedStyle(colNumDiv).width)); // Get's the new number of columns
    if (newColNum !== oldColNum) { // Checks if its different from the old one and updates it
        updateColumns(oldColNum, newColNum);
        oldColNum = newColNum;
    }
}

function debounce(func, wait) { // Debounce function
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), wait);
    }
}

const debounceResize = debounce(getColNum, 200); 

const observer = new ResizeObserver(() => { // Creating the resize observer
    debounceResize();
});

observer.observe(colNumDiv); // Initializes the observer