export default function Footer() {
	const footer = document.createElement("footer");
	const text = document.createElement("p");
	text.innerText = "by Chergui Chihab Iddine Ⓒ 2023";
	text.className = "container";

	footer.appendChild(text);

	return footer;
}
