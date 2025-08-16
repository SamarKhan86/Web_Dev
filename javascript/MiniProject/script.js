const task = document.querySelector("input");
const btn = document.querySelector("#add");
const ul = document.querySelector("ul");
const clear = document.querySelector("#clear");

function addTask() {
  if (task.value.trim() !== "") {
    let item = document.createElement("li");
    item.innerText = task.value;
    
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    
    item.appendChild(delbtn);
    ul.appendChild(item);
  }
  task.value = "";
}

btn.addEventListener("click", addTask);

let delbtns = document.querySelectorAll(".delete");
for(delbtn of delbtns) {
  delbtn.addEventListener("click", function() {
    let par = this.parentElement;
    par.remove();
  });
}

ul.addEventListener("click", function (e) { //deletes the added tasks
  if(e.target.nodeName == "BUTTON") { 
    let listItem = e.target.parentElement; //here the targetted element is button inside the list.
    listItem.remove();
  }
});

task.addEventListener("keydown", (e) => { //add task with enter
  if(e.key == "Enter") {
    addTask();
  }
});

clear.addEventListener("click", () => {         //another way would be to set the ul.innerHTML = "";
  let lis = document.querySelectorAll("li");
  for(let li of lis) {
    ul.removeChild(li);
  }
});



