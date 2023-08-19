import firstLoad from "../functions/firstLoad";
import menuLoad from "../functions/menuLoad";
import contactLoad from "../functions/contactLoad";
export default function Header() {
	const header = document.createElement("header");
	const nav = document.createElement("nav");
	nav.classList.add("container");
	const ul = document.createElement("ul");

	const li1 = document.createElement("li");
	const a1 = document.createElement("a");
	a1.classList.add("btn-home", "active");
	a1.innerText = "Home";
	a1.addEventListener("click", firstLoad);
	li1.appendChild(a1);

	const li2 = document.createElement("li");
	const a2 = document.createElement("a");
	a2.classList.add("btn-menu");
	a2.innerText = "Menu";
	a2.addEventListener("click", menuLoad);

	li2.appendChild(a2);

	const li3 = document.createElement("li");
	const a3 = document.createElement("a");
	a3.classList.add("btn-contact");
	a3.innerText = "Contact";
	a3.addEventListener("click", () => {
		contactLoad();
		a3.classList.add("active");
	});

	li3.appendChild(a3);

	ul.append(li1, li2, li3);

	nav.appendChild(ul);
	header.appendChild(nav);
	return header;
}
