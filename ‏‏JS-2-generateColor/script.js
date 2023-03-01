const color = document.querySelector(".color");
const btn = document.querySelector(".generate");

const generateColor = () => {
	const randomColor = Math.random().toString(16).substring(2, 8);

	document.body.style.backgroundColor = "#" + randomColor;
	color.innerHTML = "#" + randomColor;
};

btn.addEventListener("click", generateColor);
generateColor();
