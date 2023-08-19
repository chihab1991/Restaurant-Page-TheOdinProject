import firstLoad from "./firstLoad";
import contactLoad from "./contactLoad";
import menuLoad from "./menuLoad";

export default function clickEventAdder() {
	document.querySelector(".btn-home").addEventListener("click", firstLoad);
	document.querySelector(".btn-menu").addEventListener("click", menuLoad);
	document.querySelector(".btn-contact").addEventListener("click", contactLoad);
}
