let bouton = document.querySelector("#boutonSubmit");
let text = document.querySelector("#text");

let colorInit = true;

bouton.addEventListener("click", () => {
	changeColor();
});



function changeColor() {
	if (colorInit) {
		text.style.backgroundColor = "red";
		colorInit = false;
	} else {
		text.style.backgroundColor = "blue";
		colorInit = true;
	}
}