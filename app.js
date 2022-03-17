const scrollableContent = document.querySelector(".scrollable-content");
const cards = [...document.querySelectorAll(".card")];

window.addEventListener("scroll", (e) => {
	cards.forEach((card, i) => {
		const offset = window.innerHeight * i;

		if (
			window.scrollY >= offset &&
			window.scrollY <= window.innerHeight + offset
		) {
			const value = (window.scrollY - offset) * 0.12;
			card.style.transform = `rotate(${value < 5 ? 0 : value}deg)`;
		}
	});
});

const updateBody = () =>
	(document.body.style.height = `${cards.length * 100}vh`);

updateBody();
window.addEventListener("resize", updateBody);
