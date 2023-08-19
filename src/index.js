import "./styles/main.css";
import firstLoad from "./functions/firstLoad";
import menuLoad from "./functions/menuLoad";
import contactLoad from "./functions/contactLoad";
import clickEventAdder from "./functions/clickEventAdder";

const content = document.getElementById("content");
firstLoad();
// clickEventAdder();

// document.querySelector(".btn-home").addEventListener("click", () => {
// 	firstLoad();
// 	clickEventAdder();
// });
// document.querySelector(".btn-menu").addEventListener("click", () => {
// 	menuLoad();
// 	clickEventAdder();
// });
// document.querySelector(".btn-contact").addEventListener("click", () => {
// 	contactLoad();
// 	clickEventAdder;
// });
