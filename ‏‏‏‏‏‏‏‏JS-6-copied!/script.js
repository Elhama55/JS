const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

btn.addEventListener("click", copyText);
coupon.addEventListener("click", copyText);

function copyText(e) {
	e.preventDefault();

	coupon.select();
	coupon.setSelectionRange(0, 999);
	navigator.clipboard.writeText(coupon.value);

	btn.textContent = "Copied!!";

	setTimeout(() => {
		btn.textContent = "Copy";
	}, 3000);
}
