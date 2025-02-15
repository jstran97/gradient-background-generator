var css = document.querySelector("h3");

// var input_color1 = document.querySelector(".color1");
// var input_color2 = document.querySelector(".color2");
// console.log("input_color1.value: ", input_color1.value);
// console.log(typeof(input_color1.value));
// console.log("input_color2.value: ", input_color2.value);
// console.log(typeof(input_color2.value));
// input_color1.addEventListener("input", setGradient);
// input_color2.addEventListener("input", setGradient);

// var randomColors_button = document.querySelector(".generateTwoRandomColors");
// randomColors_button.addEventListener("click", randomizeColorSelection);

// body.style.background = "green";

function randomizeColorSelection() {
	console.log("Inside of randomizeColorSelection()");
	let randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	let randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	console.log(randomColor1);
	console.log(randomColor2);

	randomColor1 = "#" + randomColor1;
	randomColor2 = "#" + randomColor2;

	console.log(randomColor1);
	console.log(typeof(randomColor1));
	console.log(randomColor2);
	console.log(typeof(randomColor2));

	updateInputColorValues(randomColor1, randomColor2);

	setGradient();
	// setGradient(randomColor1, randomColor2);
}

function updateInputColorValues(randomColor1, randomColor2) {
	let input_color1 = document.querySelector(".color1");
	let input_color2 = document.querySelector(".color2");

	input_color1.value = randomColor1;
	input_color2.value = randomColor2;
}

// function setGradient(color1, color2) {
// 	let body = document.getElementById("gradient");

// 	console.log("Inside of setGradient()");
// 	console.log(color1);
// 	console.log(color2);

// 	body.style.background = "linear-gradient(to right, "
// 	+ color1
// 	+ ", "
// 	+ color2
// 	+ ")";

// 	printCurrentInputColors(body);
// }

function setGradient() {
	let body = document.getElementById("gradient");
	let input_color1 = document.querySelector(".color1");
	let input_color2 = document.querySelector(".color2");

	console.log("Inside of setGradient()");
	console.log(input_color1);
	console.log(input_color2);

	body.style.background = "linear-gradient(to right, "
	+ input_color1.value
	+ ", "
	+ input_color2.value
	+ ")";

	printCurrentInputColors(body);
}

function printCurrentInputColors(body) {
	css.textContent = body.style.background + ";";
}

function initializeUI() {
	let input_color1 = document.querySelector(".color1");
	let input_color2 = document.querySelector(".color2");
	console.log("input_color1.value: ", input_color1.value);
	console.log("input_color2.value: ", input_color2.value);
	input_color1.addEventListener("input", setGradient);
	input_color2.addEventListener("input", setGradient);

	let randomColors_button = document.querySelector(".generateTwoRandomColors");
	randomColors_button.addEventListener("click", randomizeColorSelection);

	// Upon initial page load (HTML code first, then JS code), pull pre-filled hex values from HTML file and print them to web page.
	// setGradient(input_color1, input_color2);
}

initializeUI();

// randomizeColorSelection();

