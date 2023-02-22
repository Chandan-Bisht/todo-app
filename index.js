let button = document.getElementById("btn");
let message = document.querySelector("p");
const body = document.querySelector("body");
const dialog = document.getElementById("showModal");
const cancel = document.getElementsByClassName("cancel")
const title = document.getElementById("title");
const summary = document.getElementById("summary");
// const newtitle = document.getElementById("new-title");
// const newsummary = document.getElementById("new-summary");
const deletetask = document.getElementById("delete");
const taskform = document.getElementById("submit");
const taskwrapper = document.getElementById("task-wrapper")

button.onclick = function() {
    dialog.style.display = "flex";
    body.style.overflow = "hidden"
}

cancel.onclick = function() {
    dialog.style.display = "none";
    body.style.overflow = "auto"
}

function submitFormReturn() {
    dialog.style.display = "none";
    message.style.display = "none";
    body.style.overflow = "auto";
    title.value = '';
    summary.value = ''
}

let count = 0;
taskform.onclick = function(e) {
    count++;
    const element = document.createElement('div');
    element.setAttribute("class", "added-tasks")
    taskwrapper.appendChild(element);
    console.log(element);
    
    const newtitle = document.createElement('div');
    newtitle.setAttribute("class", "new-title");
    element.appendChild(newtitle);

    const p = document.createElement("p");
    p.innerHTML = title.value;
    newtitle.appendChild(p);
    
    const icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-trash delete");
    icon.onclick = function() {
        element.remove();
        if(taskwrapper.children.length == 0){
            message.style.display = "block";
        }
    }
    newtitle.appendChild(icon);
    
    const newsummary = document.createElement("p");
    newsummary.innerHTML = summary.value;
    element.appendChild(newsummary)
    
}


window.onclick = function(event) {
    if (event.target == dialog) {
        dialog.style.display = "none";
        body.style.overflow = "auto"
        title.value = '';
        summary.value = ''
    }
}