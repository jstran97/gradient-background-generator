function randomizeColorSelection() {
	let randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	let randomColor2 = Math.floor(Math.random()*16777215).toString(16);

	randomColor1 = "#" + randomColor1;
	randomColor2 = "#" + randomColor2;

	updateInputColorValues(randomColor1, randomColor2);

	setGradient();
}

function updateInputColorValues(randomColor1, randomColor2) {
	let input_color1 = document.querySelector(".color1");
	let input_color2 = document.querySelector(".color2");

	input_color1.value = randomColor1;
	input_color2.value = randomColor2;
}

function setGradient() {
	let body = document.getElementById("gradient");
	let input_color1 = document.querySelector(".color1");
	let input_color2 = document.querySelector(".color2");

	body.style.background = "linear-gradient(to right, "
	+ input_color1.value
	+ ", "
	+ input_color2.value
	+ ")";

	printCurrentInputColors(body);
}

function printCurrentInputColors(body) {
	let css = document.querySelector("h3");
	css.textContent = body.style.background + ";";
}

function initializeUI() {
	let input_color1 = document.querySelector(".color1");
	let input_color2 = document.querySelector(".color2");
	input_color1.addEventListener("input", setGradient);
	input_color2.addEventListener("input", setGradient);

	let randomColors_button = document.querySelector(".generateTwoRandomColors");
	randomColors_button.addEventListener("click", randomizeColorSelection);

	setGradient();
}

initializeUI();
