export default function Home() {
	const home = document.createElement("div");
	home.id = "home";
	home.classList.add("container");
	// restaurant name
	const restaurantName = document.createElement("h1");
	restaurantName.classList.add("restaurant-name");
	restaurantName.innerText = "Chihab's Restaurant";
	// intro
	const intro = document.createElement("div");
	intro.classList.add("intro");

	const introText = document.createElement("p");
	introText.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quod omnis itaque odit reprehenderit quo eos, sint id vitae facilis in nihil veritatis! Quibusdam porro tenetur praesentium deserunt placeat doloribus	ullam nisi.`;
	const introTitle = document.createElement("h2");
	introTitle.innerText = "Chihaboo";
	intro.append(introText, introTitle);

	// opening hours
	const openingHours = document.createElement("div");
	openingHours.classList.add("opening-hours");

	const openingTitle = document.createElement("h2");
	openingTitle.classList.add("opening-title");
	openingTitle.innerText = "Hours";

	const day1 = document.createElement("p");
	day1.innerText = "Sunday: 8am - 8pm";
	const day2 = document.createElement("p");
	day2.innerText = "Monday: 6am - 6pm";
	const day3 = document.createElement("p");
	day3.innerText = "Tuesday: 6am - 6pm";
	const day4 = document.createElement("p");
	day4.innerText = "Wednesday: 6am - 6pm";
	const day5 = document.createElement("p");
	day5.innerText = "Thursday: 6am - 10pm";
	const day6 = document.createElement("p");
	day6.innerText = "Friday: 6am - 10pm";
	const day7 = document.createElement("p");
	day7.innerText = "Saturday: 8am - 10pm";
	openingHours.appendChild(openingTitle);
	openingHours.append(day1, day2, day3, day4, day5, day6, day7);

	// location
	const location = document.createElement("div");
	location.classList.add("location");

	const locationTitle = document.createElement("h2");
	locationTitle.classList.add("location-title");
	locationTitle.innerText = "Location";
	const locationText = document.createElement("p");
	locationText.innerText = "1234 Lorem Ipsum, Ksar Chellala, Tiaret.";
	location.append(locationTitle, locationText);

	home.append(restaurantName, intro, openingHours, location);
	return home;
}
