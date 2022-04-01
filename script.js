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
var questionBox = document.createElement("p");
questionBox.setAttribute('id','questionBoxP');
questionBox.innerText = askQuestion(); 
interface.appendChild(questionBox);

//Code for the inputBox
var userInput = document.createElement("input");
userInput.setAttribute("id","userAnswer");
interface.appendChild(userInput); //Center the inputBox

//Code for the Submit Button 
var submitButton = document.createElement("button");
submitButton.setAttribute("id","submit");
submitButton.setAttribute("onClick","checkAnswer()");
submitButton.innerText = "Submit";
interface.appendChild(submitButton);


//Globals needed for the functions below
var x = 0;
var y = 0;
var product = 0;
var min = 3;
var max = 10;

function askQuestion(){
	x = Math.floor(Math.random()*10)+1;
	y = Math.floor(Math.random()*10)+1;
	product = (x * y);
	let question = x+" X "+y+" = ?"
	return question;
}
//Coding the correct or incorrect answer
function checkAnswer(){
	let userAnswer = document.getElementById("userAnswer");
	let answer = userAnswer.value;
	if(answer == product){
		alert("Correct, "+x+" X "+y+" is "+product);
		document.location = 'index.html';
	}
	else{
		alert("Incorrect! "+x+" X "+y+" is "+product);
		document.location = 'index.html';
	}
}