let heading = document.getElementById("title")
let text =  document.getElementById("text")
let executeButton = document.getElementById("executeButton")
let outputParagraph = document.getElementById("outputText")
let inputElement = document.getElementById("inputText")
let backGround = document.getElementById("myBackground")

let fortune = ["you will receive surpises this week",
	"stay focused and avoid getting sidetracked by distractions or minor issues",
	"make sure to prioritize self-care this week",
	"the greatest risk is not taking one", "keep an eye out for someone special",
	"be open to new experiences and opportunities that come your way", "focus on the positive aspects of your life can help you stay motivated and optimistic, even in challenging times"]

executeButton.addEventListener("click", function(){
	let currentInputText = inputElement.value;
	generate(currentInputText);
	restyle();
})

function generate(userInput){
	var randomIndex = Math.floor(Math.random() * fortune.length);
	console.log(randomIndex);
	var selectedRandomText = fortune[randomIndex];
	outputParagraph.innerText = userInput + ", " + selectedRandomText;

}

function restyle(){
	var randR = Math.random() * 50 + 200;
	var randG = Math.random() * 50 + 150;
	var randB = Math.random() * 50 + 200;

	let randOutputColor =  "rgb("+randR+","+randG+","+randB+")";
	outputParagraph.style.backgroundColor = randOutputColor;
	let newColor = "#000000"
	inputElement.style.backgroundColor = randOutputColor
  	inputElement.style.transform = "rotate(360deg)";
  	backGround.style.backgroundColor = newColor


	let pinkColor =  "#ffb6c1";
	executeButton.style.backgroundColor = pinkColor


	
}