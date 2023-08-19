export default function Contact() {
	const contact = document.createElement("div");
	contact.id = "contact";
	contact.classList.add("container");
	// contact title
	const contactTitle = document.createElement("h1");
	contactTitle.innerText = "Contact Us";

	// chef contact
	const chef = document.createElement("div");
	chef.classList.add("chef");
	const chefName = document.createElement("h2");
	chefName.innerText = "John Doe";
	// job
	const chefJob = document.createElement("p");
	chefJob.innerText = "Chef";
	// phone number
	const chefPhone = document.createElement("p");
	chefPhone.innerText = "555-555-5554";
	// email
	const chefEmail = document.createElement("p");
	chefEmail.innerText = "john@doe.com";
	// chef photo
	const chefPicture = document.createElement("img");
	chefPicture.src;

	chef.append(chefName, chefJob, chefPhone, chefEmail);
	// manager contact
	const manager = document.createElement("div");
	manager.classList.add("manager");
	const managerName = document.createElement("h2");
	managerName.innerText = "Jane Doe";
	// job
	const managerJob = document.createElement("p");
	managerJob.innerText = "Manager";
	// phone number
	const managerPhone = document.createElement("p");
	managerPhone.innerText = "555-555-5555";
	// email
	const managerEmail = document.createElement("p");
	managerEmail.innerText = "jane@doe.com";
	// manager photo
	const managerPicture = document.createElement("img");
	managerPicture.src;

	manager.append(managerName, managerJob, managerPhone, managerEmail);
	// waiter contact
	const waiter = document.createElement("div");
	waiter.classList.add("waiter");
	const waiterName = document.createElement("h2");
	waiterName.innerText = "John Doe";
	// job
	const waiterJob = document.createElement("p");
	waiterJob.innerText = "Waiter";
	// phone number
	const waiterPhone = document.createElement("p");
	waiterPhone.innerText = "555-555-5554";
	// email
	const waiterEmail = document.createElement("p");
	waiterEmail.innerText = "john@doe.com";
	// waiter photo
	const waiterPicture = document.createElement("img");
	waiterPicture.src;

	waiter.append(waiterName, waiterJob, waiterPhone, waiterEmail);

	contact.append(chef, waiter, manager);
	return contact;
}
