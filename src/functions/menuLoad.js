import Header from "../components/header";
import Footer from "../components/footer";
import menu from "../pages/menu";

export default function firstLoad() {
	const content = document.getElementById("content");
	content.innerHTML = "";
	content.appendChild(Header());
	content.appendChild(menu());
	content.appendChild(Footer());
}
