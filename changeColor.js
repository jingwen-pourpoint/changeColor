let bouton = document.querySelector("#boutonSubmit");
let text = document.querySelector("#text");

let colorInit = true;

bouton.addEventListener("click", () => {
	changeColor();
});



function changeColor() {
	if (colorInit) {
		text.className = "colorRed";
		colorInit = false;
	} else {
		text.className = "colorBlue";
		colorInit = true;
	}
}