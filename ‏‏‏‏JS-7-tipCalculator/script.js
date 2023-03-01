const btn = document.querySelector(".btn"),
	tip = document.querySelector(".tip"),
	total = document.querySelector(".total"),
	error = document.querySelector(".error");

const calculateTip = (e) => {
	e.preventDefault();
	const bill = document.querySelector(".bill").value;
	const rate = document.querySelector(".rate").value;

	if (bill === "" || rate === "") {
		error.style.display = "block";
		setTimeout(() => {
			error.style.display = "none";
		}, 3000);
	} else if (isNaN(bill)) {
		error.innerHTML = "Please enter a Number";
		error.style.display = "block";
		setTimeout(() => {
			error.style.display = "none";
		}, 3000);
	} else {
		let tipAmount = Number(bill) * rate;
		tipAmount = Math.ceil(tipAmount);
		tip.innerHTML = `Tip Amount: $${tipAmount}`;

		let totalAmount = Number(bill) + tipAmount;
		total.innerHTML = `Total Amount: $${totalAmount}`;
	}
};

btn.addEventListener("click", calculateTip);
