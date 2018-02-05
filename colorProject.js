var numOfSquares = 6;
var colors = [];
var colorToBeGuessed;
var squares = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector("span");
var guessOutcomeDisplay = document.querySelector("#guessOutcome");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

//actual code
init();

resetButton.addEventListener("click",function(){
	reset();
})


// defined functions 

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}


function reset(){
	//generate all new colors
	colors = generateRandomColors(numOfSquares);
	// pick a new color from the array
	colorToBeGuessed = pickColor();
	//change rgbDisplay to match colorToBeGuessed
	rgbDisplay.textContent = colorToBeGuessed;
	resetButton.textContent="New Colors";	
	guessOutcomeDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display= "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display ="none";
		}
	}
	h1.style.backgroundColor = "#2F885A";
}



function setupModeButtons(){
for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		//remove from both buttons first and add to the one that is clicked on.
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent == "Easy"){
			numOfSquares = 3;
		} else {
			numOfSquares = 6;
		}
		reset();
	})
}
}

	

function setupSquares(){
for(var i = 0; i < squares.length; i++){
	//add click listeners to the squares
	squares[i].addEventListener("click",function(){
	//grab color of clicked square
	var clickedColor = this.style.backgroundColor;
	//compare the grabbed color to the colorToBeGuessed
		if(clickedColor === colorToBeGuessed){
		guessOutcomeDisplay.textContent = "You guessed it right!"
		changeColors(colorToBeGuessed);
		h1.style.backgroundColor = clickedColor;
		resetButton.textContent = "Play again?";
		} else {
		this.style.backgroundColor = "#203040";
		guessOutcomeDisplay.textContent = "That was incorrect. Try again mate.";
		}
	});
}
}


function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to an array
	for(var i = 0; i< num; i++){
		//get Random Colors and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};


function changeColors(color){
	//loop through all squares
	for(var i= 0; i<squares.length; i++){
	//change color of each square to match correct color
	squares[i].style.backgroundColor = color;
 }
}


function randomColor(){
	//pick a "Red" from 0 to 255
	var r = Math.floor(Math.random() * 256)
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256)
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
