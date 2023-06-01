// Script
// let myLeads = new Array();
let myLeads = [];
const inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = ""
    renderLeads()
    
});

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li><a target='_blank' href=''>" + myLeads[i] + "</a></li>";
        //listItems += `<li><a href='' targe='_blank'>" + myLeads[i] + "</a></li>`
        // let li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
        //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='{$myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = listItems
}
