const toTop = document.querySelector(".footer");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 400) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove("active");
	}
});