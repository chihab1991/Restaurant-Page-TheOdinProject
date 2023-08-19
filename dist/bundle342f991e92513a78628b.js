/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
function Footer() {
  var footer = document.createElement("footer");
  var text = document.createElement("p");
  text.innerText = "by Chergui Chihab Iddine Ⓒ 2023";
  text.className = "container";
  footer.appendChild(text);
  return footer;
}

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _functions_firstLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/firstLoad */ "./src/functions/firstLoad.js");
/* harmony import */ var _functions_menuLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/menuLoad */ "./src/functions/menuLoad.js");
/* harmony import */ var _functions_contactLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/contactLoad */ "./src/functions/contactLoad.js");



function Header() {
  var header = document.createElement("header");
  var nav = document.createElement("nav");
  nav.classList.add("container");
  var ul = document.createElement("ul");
  var li1 = document.createElement("li");
  var a1 = document.createElement("a");
  a1.classList.add("btn-home", "active");
  a1.innerText = "Home";
  a1.addEventListener("click", _functions_firstLoad__WEBPACK_IMPORTED_MODULE_0__["default"]);
  li1.appendChild(a1);
  var li2 = document.createElement("li");
  var a2 = document.createElement("a");
  a2.classList.add("btn-menu");
  a2.innerText = "Menu";
  a2.addEventListener("click", _functions_menuLoad__WEBPACK_IMPORTED_MODULE_1__["default"]);
  li2.appendChild(a2);
  var li3 = document.createElement("li");
  var a3 = document.createElement("a");
  a3.classList.add("btn-contact");
  a3.innerText = "Contact";
  a3.addEventListener("click", function () {
    (0,_functions_contactLoad__WEBPACK_IMPORTED_MODULE_2__["default"])();
    a3.classList.add("active");
  });
  li3.appendChild(a3);
  ul.append(li1, li2, li3);
  nav.appendChild(ul);
  header.appendChild(nav);
  return header;
}

/***/ }),

/***/ "./src/functions/clickEventAdder.js":
/*!******************************************!*\
  !*** ./src/functions/clickEventAdder.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clickEventAdder)
/* harmony export */ });
/* harmony import */ var _firstLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstLoad */ "./src/functions/firstLoad.js");
/* harmony import */ var _contactLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactLoad */ "./src/functions/contactLoad.js");
/* harmony import */ var _menuLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuLoad */ "./src/functions/menuLoad.js");



function clickEventAdder() {
  document.querySelector(".btn-home").addEventListener("click", _firstLoad__WEBPACK_IMPORTED_MODULE_0__["default"]);
  document.querySelector(".btn-menu").addEventListener("click", _menuLoad__WEBPACK_IMPORTED_MODULE_2__["default"]);
  document.querySelector(".btn-contact").addEventListener("click", _contactLoad__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/***/ }),

/***/ "./src/functions/contactLoad.js":
/*!**************************************!*\
  !*** ./src/functions/contactLoad.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ firstLoad)
/* harmony export */ });
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/contact */ "./src/pages/contact.js");



function firstLoad() {
  var content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
  content.appendChild((0,_pages_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
  content.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_1__["default"])());
}

/***/ }),

/***/ "./src/functions/firstLoad.js":
/*!************************************!*\
  !*** ./src/functions/firstLoad.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ firstLoad)
/* harmony export */ });
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/home */ "./src/pages/home.js");



// import clickEventAdder from "./clickEventAdder";

function firstLoad() {
  var content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
  content.appendChild((0,_pages_home__WEBPACK_IMPORTED_MODULE_2__["default"])());
  content.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_1__["default"])());
  // clickEventAdder();
}

/***/ }),

/***/ "./src/functions/menuLoad.js":
/*!***********************************!*\
  !*** ./src/functions/menuLoad.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ firstLoad)
/* harmony export */ });
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/menu */ "./src/pages/menu.js");



function firstLoad() {
  var content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
  content.appendChild((0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
  content.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_1__["default"])());
}

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
function Contact() {
  var contact = document.createElement("div");
  contact.id = "contact";
  contact.classList.add("container");
  // contact title
  var contactTitle = document.createElement("h1");
  contactTitle.innerText = "Contact Us";

  // chef contact
  var chef = document.createElement("div");
  chef.classList.add("chef");
  var chefName = document.createElement("h2");
  chefName.innerText = "John Doe";
  // job
  var chefJob = document.createElement("p");
  chefJob.innerText = "Chef";
  // phone number
  var chefPhone = document.createElement("p");
  chefPhone.innerText = "555-555-5554";
  // email
  var chefEmail = document.createElement("p");
  chefEmail.innerText = "john@doe.com";
  // chef photo
  var chefPicture = document.createElement("img");
  chefPicture.src;
  chef.append(chefName, chefJob, chefPhone, chefEmail);
  // manager contact
  var manager = document.createElement("div");
  manager.classList.add("manager");
  var managerName = document.createElement("h2");
  managerName.innerText = "Jane Doe";
  // job
  var managerJob = document.createElement("p");
  managerJob.innerText = "Manager";
  // phone number
  var managerPhone = document.createElement("p");
  managerPhone.innerText = "555-555-5555";
  // email
  var managerEmail = document.createElement("p");
  managerEmail.innerText = "jane@doe.com";
  // manager photo
  var managerPicture = document.createElement("img");
  managerPicture.src;
  manager.append(managerName, managerJob, managerPhone, managerEmail);
  // waiter contact
  var waiter = document.createElement("div");
  waiter.classList.add("waiter");
  var waiterName = document.createElement("h2");
  waiterName.innerText = "John Doe";
  // job
  var waiterJob = document.createElement("p");
  waiterJob.innerText = "Waiter";
  // phone number
  var waiterPhone = document.createElement("p");
  waiterPhone.innerText = "555-555-5554";
  // email
  var waiterEmail = document.createElement("p");
  waiterEmail.innerText = "john@doe.com";
  // waiter photo
  var waiterPicture = document.createElement("img");
  waiterPicture.src;
  waiter.append(waiterName, waiterJob, waiterPhone, waiterEmail);
  contact.append(chef, waiter, manager);
  return contact;
}

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
function Home() {
  var home = document.createElement("div");
  home.id = "home";
  home.classList.add("container");
  // restaurant name
  var restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.innerText = "Chihab's Restaurant";
  // intro
  var intro = document.createElement("div");
  intro.classList.add("intro");
  var introText = document.createElement("p");
  introText.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quod omnis itaque odit reprehenderit quo eos, sint id vitae facilis in nihil veritatis! Quibusdam porro tenetur praesentium deserunt placeat doloribus\tullam nisi.";
  var introTitle = document.createElement("h2");
  introTitle.innerText = "Chihaboo";
  intro.append(introText, introTitle);

  // opening hours
  var openingHours = document.createElement("div");
  openingHours.classList.add("opening-hours");
  var openingTitle = document.createElement("h2");
  openingTitle.classList.add("opening-title");
  openingTitle.innerText = "Hours";
  var day1 = document.createElement("p");
  day1.innerText = "Sunday: 8am - 8pm";
  var day2 = document.createElement("p");
  day2.innerText = "Monday: 6am - 6pm";
  var day3 = document.createElement("p");
  day3.innerText = "Tuesday: 6am - 6pm";
  var day4 = document.createElement("p");
  day4.innerText = "Wednesday: 6am - 6pm";
  var day5 = document.createElement("p");
  day5.innerText = "Thursday: 6am - 10pm";
  var day6 = document.createElement("p");
  day6.innerText = "Friday: 6am - 10pm";
  var day7 = document.createElement("p");
  day7.innerText = "Saturday: 8am - 10pm";
  openingHours.appendChild(openingTitle);
  openingHours.append(day1, day2, day3, day4, day5, day6, day7);

  // location
  var location = document.createElement("div");
  location.classList.add("location");
  var locationTitle = document.createElement("h2");
  locationTitle.classList.add("location-title");
  locationTitle.innerText = "Location";
  var locationText = document.createElement("p");
  locationText.innerText = "1234 Lorem Ipsum, Ksar Chellala, Tiaret.";
  location.append(locationTitle, locationText);
  home.append(restaurantName, intro, openingHours, location);
  return home;
}

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _assets_img_ice_tea_min_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/ice-tea-min.jpg */ "./src/assets/img/ice-tea-min.jpg");
/* harmony import */ var _assets_img_coke_min_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/coke-min.jpg */ "./src/assets/img/coke-min.jpg");
/* harmony import */ var _assets_img_cheese_pizza_min_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/cheese-pizza-min.jpg */ "./src/assets/img/cheese-pizza-min.jpg");
/* harmony import */ var _assets_img_pepperoni_pizza_min_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/pepperoni-pizza-min.jpg */ "./src/assets/img/pepperoni-pizza-min.jpg");
/* harmony import */ var _assets_img_meat_pizza_min_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/meat-pizza-min.jpg */ "./src/assets/img/meat-pizza-min.jpg");
/* harmony import */ var _assets_img_margherita_pizza_min_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/margherita-pizza-min.jpg */ "./src/assets/img/margherita-pizza-min.jpg");






function Menu() {
  var menu = document.createElement("div");
  menu.id = "menu";
  menu.classList.add("container");

  // menu title
  var menuTitle = document.createElement("h1");
  menuTitle.classList.add("title");
  menuTitle.innerText = "Menu";
  // beverage title
  var beverageTitle = document.createElement("h2");
  beverageTitle.innerText = "Beverage";
  // cocacola
  var coke = document.createElement("div");
  var cokeTitle = document.createElement("h3");
  cokeTitle.innerText = "Coke";
  var cokeText = document.createElement("p");
  cokeText.innerText = "nice cold ice coke with a bit of lemon";
  var cokePrice = document.createElement("p");
  cokePrice.innerText = "$2";
  cokePrice.className = "price";
  var cokeImage = document.createElement("img");
  cokeImage.src = _assets_img_coke_min_jpg__WEBPACK_IMPORTED_MODULE_1__;
  cokeImage.alt = "glass of coke";
  // need a picture
  coke.append(cokeTitle, cokeText, cokePrice, cokeImage);
  // ice tea
  var iceTea = document.createElement("div");
  var iceTeaTitle = document.createElement("h3");
  iceTeaTitle.innerText = "Ice Tea";
  var iceTeaText = document.createElement("p");
  iceTeaText.innerText = "nice cold ice coke with a bit of lemon";
  var iceTeaPrice = document.createElement("p");
  iceTeaPrice.innerText = "$3";
  iceTeaPrice.className = "price";
  var iceTeaImage = document.createElement("img");
  iceTeaImage.src = _assets_img_ice_tea_min_jpg__WEBPACK_IMPORTED_MODULE_0__;
  iceTeaImage.alt = "glass ice tea";
  // need a picture
  iceTea.append(iceTeaTitle, iceTeaText, iceTeaPrice, iceTeaImage);
  // main dishes title
  var mainDishesTitle = document.createElement("h2");
  mainDishesTitle.innerText = "Main Dishes";

  // dishe1
  var cheesePizza = document.createElement("div");
  var cheesePizzaTitle = document.createElement("h3");
  cheesePizzaTitle.innerText = "pizza with cheese";
  var cheesePizzaText = document.createElement("p");
  cheesePizzaText.innerText = "It's the little things in life that can make a big difference. It's no wonder that a plain cheese pizza reigns supreme as the King of Pizzas.";
  var cheesePizzaPrice = document.createElement("p");
  cheesePizzaPrice.innerText = "$10";
  cheesePizzaPrice.className = "price";
  // need a picture
  var cheesePizzaImage = document.createElement("img");
  cheesePizzaImage.src = _assets_img_cheese_pizza_min_jpg__WEBPACK_IMPORTED_MODULE_2__;
  cheesePizzaImage.alt = "cheese pizza";
  cheesePizza.append(cheesePizzaTitle, cheesePizzaText, cheesePizzaPrice, cheesePizzaImage);
  // dishe2
  var pepperoni = document.createElement("div");
  var pepperoniTitle = document.createElement("h3");
  pepperoniTitle.innerText = "Pepperoni Pizza";
  var pepperoniText = document.createElement("p");
  pepperoniText.innerText = "You say pizza if I say pepperoni! Because the two go hand in hand, pepperoni is clearly the second most often ordered pizza on our list.";
  var pepperoniPrice = document.createElement("p");
  pepperoniPrice.innerText = "$12";
  pepperoniPrice.className = "price";
  // need a picture
  var pepperoniImage = document.createElement("img");
  pepperoniImage.src = _assets_img_pepperoni_pizza_min_jpg__WEBPACK_IMPORTED_MODULE_3__;
  pepperoniImage.alt = "pepperoni pizza";
  pepperoni.append(pepperoniTitle, pepperoniText, pepperoniPrice, pepperoniImage);
  // dishe3
  var meatPizza = document.createElement("div");
  var meatPizzaTitle = document.createElement("h3");
  meatPizzaTitle.innerText = "Meat Pizza";
  var meatPizzaText = document.createElement("p");
  meatPizzaText.innerText = "A meat lover's pizza is the best choice if you're searching for a pie with a little more heaviness. What's the difference between ground beef, sausage, and pepperoni? Let the games begin.";
  var meatPizzaPrice = document.createElement("p");
  meatPizzaPrice.innerText = "$2";
  meatPizzaPrice.className = "price";
  // need a picture
  var meatPizzaImage = document.createElement("img");
  meatPizzaImage.src = _assets_img_meat_pizza_min_jpg__WEBPACK_IMPORTED_MODULE_4__;
  meatPizzaImage.alt = "meat pizza";
  meatPizza.append(meatPizzaTitle, meatPizzaText, meatPizzaPrice, meatPizzaImage);
  // dishe4
  var margherita = document.createElement("div");
  var margheritaTitle = document.createElement("h3");
  margheritaTitle.innerText = "Margherita Pizza";
  var margheritaText = document.createElement("p");
  margheritaText.innerText = "The Margherita is a classic take on cheese pizza, made with basil,fresh mozzarella, and tomatoes. One of the most popular forms of pizza in the country, and an italian classic.";
  var margheritaPrice = document.createElement("p");
  margheritaPrice.innerText = "$2";
  margheritaPrice.className = "price";
  // need a picture
  var margheritaImage = document.createElement("img");
  margheritaImage.src = _assets_img_margherita_pizza_min_jpg__WEBPACK_IMPORTED_MODULE_5__;
  margheritaImage.alt = "margherita pizza";
  margherita.append(margheritaTitle, margheritaText, margheritaPrice, margheritaImage);
  menu.append(menuTitle, beverageTitle, coke, iceTea, mainDishesTitle, cheesePizza, pepperoni, margherita, meatPizza);
  return menu;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
}

ul {
    text-align: center;

}

li {
    list-style: none;
    display: inline-block;
    margin-left: 2.5rem;
}

body {
    font-family: 'Bricolage Grotesque', sans-serif;
}

.container {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
}

.active {
    /* background-color: rgb(209, 209, 209); */
}

nav {
    padding: .5rem;
}

nav a {
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 6px;
    cursor: pointer;
}

/* home */
#home {
    text-align: center;
}

#home h1 {
    font-size: 3rem;
}

#home h2 {
    text-align: left;
}

#home p {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.3;
}

.restaurant-name,
.intro,
.opening-hours,
.location {
    width: 40rem;
    margin: 0 auto;
    border: 4px solid black;
    padding: 1rem 2rem;
    margin-bottom: 3rem;

}

.restaurant-name {
    margin-top: 3.5rem;

}

.intro {
    text-align: justify;
}

/* menu */
#menu>div,
#menu>h1,
#menu>h2 {
    width: 40rem;
    margin: 0 auto;
    border: 4px solid black;
    padding: 1rem 2rem;
    margin-bottom: 3rem;

}

#menu>h1,
#menu>h2 {
    text-align: center;
}

#menu>h1 {
    font-size: 3rem;
}

#menu>h2 {
    font-size: 2rem;
}

#menu img {
    width: 80%
}

#menu p {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.5;
}

/* contact */
.chef,
.waiter,
.manager {
    width: 40rem;
    margin: 0 auto;
    border: 4px solid black;
    padding: 1rem 2rem;
    margin-bottom: 3rem;
}

/* footer */
footer {
    text-align: center;
    padding: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;;AAEtB;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;AACnB;;AAEA,SAAS;AACT;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;;;;IAII,YAAY;IACZ,cAAc;IACd,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;;AAEvB;;AAEA;IACI,kBAAkB;;AAEtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA,SAAS;AACT;;;IAGI,YAAY;IACZ,cAAc;IACd,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;;AAEvB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA,YAAY;AACZ;;;IAGI,YAAY;IACZ,cAAc;IACd,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA,WAAW;AACX;IACI,kBAAkB;IAClB,aAAa;AACjB","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\nul {\n    text-align: center;\n\n}\n\nli {\n    list-style: none;\n    display: inline-block;\n    margin-left: 2.5rem;\n}\n\nbody {\n    font-family: 'Bricolage Grotesque', sans-serif;\n}\n\n.container {\n    width: 80%;\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\n.active {\n    /* background-color: rgb(209, 209, 209); */\n}\n\nnav {\n    padding: .5rem;\n}\n\nnav a {\n    display: inline-block;\n    padding: 10px 20px;\n    border: 1px solid black;\n    border-radius: 6px;\n    cursor: pointer;\n}\n\n/* home */\n#home {\n    text-align: center;\n}\n\n#home h1 {\n    font-size: 3rem;\n}\n\n#home h2 {\n    text-align: left;\n}\n\n#home p {\n    font-size: 1.1rem;\n    font-weight: 500;\n    line-height: 1.3;\n}\n\n.restaurant-name,\n.intro,\n.opening-hours,\n.location {\n    width: 40rem;\n    margin: 0 auto;\n    border: 4px solid black;\n    padding: 1rem 2rem;\n    margin-bottom: 3rem;\n\n}\n\n.restaurant-name {\n    margin-top: 3.5rem;\n\n}\n\n.intro {\n    text-align: justify;\n}\n\n/* menu */\n#menu>div,\n#menu>h1,\n#menu>h2 {\n    width: 40rem;\n    margin: 0 auto;\n    border: 4px solid black;\n    padding: 1rem 2rem;\n    margin-bottom: 3rem;\n\n}\n\n#menu>h1,\n#menu>h2 {\n    text-align: center;\n}\n\n#menu>h1 {\n    font-size: 3rem;\n}\n\n#menu>h2 {\n    font-size: 2rem;\n}\n\n#menu img {\n    width: 80%\n}\n\n#menu p {\n    font-size: 1.1rem;\n    font-weight: 500;\n    line-height: 1.5;\n}\n\n/* contact */\n.chef,\n.waiter,\n.manager {\n    width: 40rem;\n    margin: 0 auto;\n    border: 4px solid black;\n    padding: 1rem 2rem;\n    margin-bottom: 3rem;\n}\n\n/* footer */\nfooter {\n    text-align: center;\n    padding: 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/img/cheese-pizza-min.jpg":
/*!*********************************************!*\
  !*** ./src/assets/img/cheese-pizza-min.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cheese-pizza-min.jpg";

/***/ }),

/***/ "./src/assets/img/coke-min.jpg":
/*!*************************************!*\
  !*** ./src/assets/img/coke-min.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "coke-min.jpg";

/***/ }),

/***/ "./src/assets/img/ice-tea-min.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/ice-tea-min.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ice-tea-min.jpg";

/***/ }),

/***/ "./src/assets/img/margherita-pizza-min.jpg":
/*!*************************************************!*\
  !*** ./src/assets/img/margherita-pizza-min.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "margherita-pizza-min.jpg";

/***/ }),

/***/ "./src/assets/img/meat-pizza-min.jpg":
/*!*******************************************!*\
  !*** ./src/assets/img/meat-pizza-min.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "meat-pizza-min.jpg";

/***/ }),

/***/ "./src/assets/img/pepperoni-pizza-min.jpg":
/*!************************************************!*\
  !*** ./src/assets/img/pepperoni-pizza-min.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pepperoni-pizza-min.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _functions_firstLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/firstLoad */ "./src/functions/firstLoad.js");
/* harmony import */ var _functions_menuLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/menuLoad */ "./src/functions/menuLoad.js");
/* harmony import */ var _functions_contactLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/contactLoad */ "./src/functions/contactLoad.js");
/* harmony import */ var _functions_clickEventAdder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/clickEventAdder */ "./src/functions/clickEventAdder.js");





var content = document.getElementById("content");
(0,_functions_firstLoad__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
})();

/******/ })()
;
//# sourceMappingURL=bundle342f991e92513a78628b.js.map