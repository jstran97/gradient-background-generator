function randomizeColorSelection() {
	let randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	let randomColor2 = Math.floor(Math.random()*16777215).toString(16);

	randomColor1 = "#" + randomColor1;
	randomColor2 = "#" + randomColor2;

	updateInputColorValues(randomColor1, randomColor2);

	setGradient();
}

function updateInputColorValues(randomColor1, randomColor2) {
	let inputColor1 = document.querySelector(".color1");
	let inputColor2 = document.querySelector(".color2");

	inputColor1.value = randomColor1;
	inputColor2.value = randomColor2;
}

function setGradient() {
	let body = document.getElementById("gradient");
	let inputColor1 = document.querySelector(".color1");
	let inputColor2 = document.querySelector(".color2");

	body.style.background = "linear-gradient(to right, "
	+ inputColor1.value
	+ ", "
	+ inputColor2.value
	+ ")";

	printCurrentInputColors(body);
}

function printCurrentInputColors(body) {
	let css = document.querySelector("h3");
	css.textContent = body.style.background + ";";
}

function initializeUI() {
	let inputColor1 = document.querySelector(".color1");
	let inputColor2 = document.querySelector(".color2");
	inputColor1.addEventListener("input", setGradient);
	inputColor2.addEventListener("input", setGradient);

	let randomColors_button = document.querySelector(".generateTwoRandomColors");
	randomColors_button.addEventListener("click", randomizeColorSelection);

	setGradient();
}

initializeUI();
