//1
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";

document.querySelector("body").append(button);
document.querySelector("body").append(input);

//2
input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

//3
let btn = document.querySelector("#btn");
btn.classList.add("btnstyle");

//4
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
h1.classList.add("h1style");
document.querySelector("body").append(h1);

//5
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);
