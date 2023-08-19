import Header from "../components/header";
import Footer from "../components/footer";
import home from "../pages/home";
// import clickEventAdder from "./clickEventAdder";

export default function firstLoad() {
	const content = document.getElementById("content");
	content.innerHTML = "";
	content.appendChild(Header());
	content.appendChild(home());
	content.appendChild(Footer());
	// clickEventAdder();
}
