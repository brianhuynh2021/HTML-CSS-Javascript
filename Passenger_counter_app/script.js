let count = 0
let totalEntries = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("pre-entry");
let totalEl = document.getElementById("total-el");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save(){
    totalEntries += count;
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.innerText = 0;
    totalEl.textContent = totalEntries;
}



