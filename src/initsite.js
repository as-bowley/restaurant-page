import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function header() {
  const title = document.createElement("div");
  title.setAttribute("id", "title");
  const titleh1 = document.createElement("h1");
  titleh1.innerText = "Mukam Uigurisches Restaurant";
  title.appendChild(titleh1);

  return title;
}

function navbar() {
  const navbar = document.createElement("div");
  navbar.setAttribute("id", "navbar");

  const navList = document.createElement("ul");

  const navHome = document.createElement("li");
  const homeButton = document.createElement("button");
  homeButton.setAttribute("id", "home");
  homeButton.classList.add("navbutton");
  homeButton.textContent = "Home";
  navHome.appendChild(homeButton);
  navList.appendChild(navHome);
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("current")) {
      return;
    } else {
      currentButton(homeButton);
      loadHome();
    }
  });

  const navMenu = document.createElement("li");
  const menuButton = document.createElement("button");
  menuButton.setAttribute("id", "menu");
  menuButton.classList.add("navbutton");
  menuButton.textContent = "Menu";
  navMenu.appendChild(menuButton);
  navList.appendChild(navMenu);
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("current")) {
      return;
    } else {
      currentButton(menuButton);
      loadMenu();
    }
  });

  const navContact = document.createElement("li");
  const contactButton = document.createElement("button");
  contactButton.setAttribute("id", "contact");
  contactButton.classList.add("navbutton");
  contactButton.textContent = "Contact";
  navContact.appendChild(contactButton);
  navList.appendChild(navContact);
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("current")) {
      return;
    } else {
      currentButton(contactButton);
      loadContact();
    }
  });

  navbar.appendChild(navList);

  return navbar;
}

function currentButton(button) {
  const navbuttons = document.querySelectorAll(".navbutton");
  navbuttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("current");
    }
  });

  button.classList.add("current");
}

function loadSite() {
  const content = document.getElementById("content");

  content.appendChild(header());
  content.appendChild(navbar());

  currentButton(document.querySelector(".navbutton"));

  loadHome();
}

export default loadSite;
