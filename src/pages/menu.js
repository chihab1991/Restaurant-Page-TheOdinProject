import iceTeaImg from "../assets/img/ice-tea-min.jpg";
import cokeImg from "../assets/img/coke-min.jpg";
import cheesePizzaImg from "../assets/img/cheese-pizza-min.jpg";
import pepperoniImg from "../assets/img/pepperoni-pizza-min.jpg";
import meatPizzaImg from "../assets/img/meat-pizza-min.jpg";
import margheritaImg from "../assets/img/margherita-pizza-min.jpg";

export default function Menu() {
	const menu = document.createElement("div");
	menu.id = "menu";
	menu.classList.add("container");

	// menu title
	const menuTitle = document.createElement("h1");
	menuTitle.classList.add("title");
	menuTitle.innerText = "Menu";
	// beverage title
	const beverageTitle = document.createElement("h2");
	beverageTitle.innerText = "Beverage";
	// cocacola
	const coke = document.createElement("div");
	const cokeTitle = document.createElement("h3");
	cokeTitle.innerText = "Coke";

	const cokeText = document.createElement("p");
	cokeText.innerText = "nice cold ice coke with a bit of lemon";

	const cokePrice = document.createElement("p");
	cokePrice.innerText = "$2";
	cokePrice.className = "price";
	const cokeImage = document.createElement("img");
	cokeImage.src = cokeImg;
	cokeImage.alt = "glass of coke";
	// need a picture
	coke.append(cokeTitle, cokeText, cokePrice, cokeImage);
	// ice tea
	const iceTea = document.createElement("div");
	const iceTeaTitle = document.createElement("h3");
	iceTeaTitle.innerText = "Ice Tea";

	const iceTeaText = document.createElement("p");
	iceTeaText.innerText = "nice cold ice coke with a bit of lemon";

	const iceTeaPrice = document.createElement("p");
	iceTeaPrice.innerText = "$3";
	iceTeaPrice.className = "price";

	const iceTeaImage = document.createElement("img");
	iceTeaImage.src = iceTeaImg;
	iceTeaImage.alt = "glass ice tea";
	// need a picture
	iceTea.append(iceTeaTitle, iceTeaText, iceTeaPrice, iceTeaImage);
	// main dishes title
	const mainDishesTitle = document.createElement("h2");
	mainDishesTitle.innerText = "Main Dishes";

	// dishe1
	const cheesePizza = document.createElement("div");
	const cheesePizzaTitle = document.createElement("h3");
	cheesePizzaTitle.innerText = "pizza with cheese";

	const cheesePizzaText = document.createElement("p");
	cheesePizzaText.innerText = `It's the little things in life that can make a big difference. It's no wonder that a plain cheese pizza reigns supreme as the King of Pizzas.`;
	const cheesePizzaPrice = document.createElement("p");
	cheesePizzaPrice.innerText = "$10";
	cheesePizzaPrice.className = "price";
	// need a picture
	const cheesePizzaImage = document.createElement("img");
	cheesePizzaImage.src = cheesePizzaImg;
	cheesePizzaImage.alt = "cheese pizza";
	cheesePizza.append(
		cheesePizzaTitle,
		cheesePizzaText,
		cheesePizzaPrice,
		cheesePizzaImage
	);
	// dishe2
	const pepperoni = document.createElement("div");
	const pepperoniTitle = document.createElement("h3");
	pepperoniTitle.innerText = "Pepperoni Pizza";

	const pepperoniText = document.createElement("p");
	pepperoniText.innerText = `You say pizza if I say pepperoni! Because the two go hand in hand, pepperoni is clearly the second most often ordered pizza on our list.`;
	const pepperoniPrice = document.createElement("p");
	pepperoniPrice.innerText = "$12";
	pepperoniPrice.className = "price";
	// need a picture
	const pepperoniImage = document.createElement("img");
	pepperoniImage.src = pepperoniImg;
	pepperoniImage.alt = "pepperoni pizza";
	pepperoni.append(
		pepperoniTitle,
		pepperoniText,
		pepperoniPrice,
		pepperoniImage
	);
	// dishe3
	const meatPizza = document.createElement("div");
	const meatPizzaTitle = document.createElement("h3");
	meatPizzaTitle.innerText = "Meat Pizza";

	const meatPizzaText = document.createElement("p");
	meatPizzaText.innerText = `A meat lover's pizza is the best choice if you're searching for a pie with a little more heaviness. What's the difference between ground beef, sausage, and pepperoni? Let the games begin.`;

	const meatPizzaPrice = document.createElement("p");
	meatPizzaPrice.innerText = "$2";
	meatPizzaPrice.className = "price";
	// need a picture
	const meatPizzaImage = document.createElement("img");
	meatPizzaImage.src = meatPizzaImg;
	meatPizzaImage.alt = "meat pizza";
	meatPizza.append(
		meatPizzaTitle,
		meatPizzaText,
		meatPizzaPrice,
		meatPizzaImage
	);
	// dishe4
	const margherita = document.createElement("div");
	const margheritaTitle = document.createElement("h3");
	margheritaTitle.innerText = "Margherita Pizza";

	const margheritaText = document.createElement("p");
	margheritaText.innerText = `The Margherita is a classic take on cheese pizza, made with basil,fresh mozzarella, and tomatoes. One of the most popular forms of pizza in the country, and an italian classic.`;
	const margheritaPrice = document.createElement("p");
	margheritaPrice.innerText = "$2";
	margheritaPrice.className = "price";
	// need a picture
	const margheritaImage = document.createElement("img");
	margheritaImage.src = margheritaImg;
	margheritaImage.alt = "margherita pizza";
	margherita.append(
		margheritaTitle,
		margheritaText,
		margheritaPrice,
		margheritaImage
	);

	menu.append(
		menuTitle,
		beverageTitle,
		coke,
		iceTea,
		mainDishesTitle,
		cheesePizza,
		pepperoni,
		margherita,
		meatPizza
	);
	return menu;
}
