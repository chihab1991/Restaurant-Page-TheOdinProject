import Header from "../components/header";
import Footer from "../components/footer";
import contact from "../pages/contact";

export default function firstLoad() {
	const content = document.getElementById("content");
	content.innerHTML = "";
	content.appendChild(Header());
	content.appendChild(contact());
	content.appendChild(Footer());
}
