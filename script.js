//Coding the HTML to the userInterface
var interface = document.createElement("div");
interface.setAttribute("id","interface");
document.body.appendChild(interface);

//Code to the "Multiplication Title"
var title = document.createElement("h1");
title.setAttribute("id","multiplyTitle");
title.innerText = "Multiplication Practice";
interface.appendChild(title);

//Code to the questionBox
