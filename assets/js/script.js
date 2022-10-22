const scrollBtn = document.querySelector(".scroll-to-top");

const refreshButtonVisibility = () => {
	if (document.documentElement.scrollTop <= 20) {
		scrollBtn.style.display = "none";
	} else {
		scrollBtn.style.display = "block";
	}
};

refreshButtonVisibility();

scrollBtn.addEventListener("click", () => {
	document.body.scrllTop = 0;
	document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
	refreshButtonVisibility();
});