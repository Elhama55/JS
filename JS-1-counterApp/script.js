const count = document.querySelector(".count");
const btns = document.querySelector(".btns");

btns.addEventListener("click", (e) => {
	if (e.target.classList.contains("add")) {
		count.innerHTML++;
	} else if (e.target.classList.contains("subtract")) {
		count.innerHTML--;
	} else if (e.target.classList.contains("reset")) {
		count.innerHTML = 0;
	}
	setColor();
});

function setColor() {
	if (count.innerHTML > 0) {
		count.style.color = "yellow";
	} else if (count.innerHTML < 0) {
		count.style.color = "orangered";
	} else {
		count.style.color = "white";
	}
}
