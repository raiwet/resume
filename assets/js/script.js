const toTop = document.querySelector(".footer");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 400) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove("active");
	}
});

// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-LV7R019EMV');