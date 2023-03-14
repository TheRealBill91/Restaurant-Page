/* import Pic from './assets/mountain-background.jpg' */
import "./normalize.css";
import homePageLoad from "./home/home";
import menuPageLoad from "./menu/menu";
import contactPageLoad from "./contact/contact";

function loadHomePage() {
  const contentContainer = document.getElementById("content");
  // Prevents other css styles from being applied to current page
  contentContainer.className = "";
  contentContainer.classList.add("home-page");
  contentContainer.appendChild(homePageLoad().renderHeader());
  contentContainer.appendChild(homePageLoad().renderMain());
  contentContainer.appendChild(homePageLoad().renderFooter());
}

function loadMenuPage() {
  const contentContainer = document.getElementById("content");
  // Prevents other css styles from being applied to current page
  contentContainer.className = "";
  contentContainer.classList.add("menu-page");
  contentContainer.appendChild(menuPageLoad().renderHeader());
  contentContainer.appendChild(menuPageLoad().renderMain());
  contentContainer.appendChild(menuPageLoad().renderFooter());
}

function loadContactPage() {
  const contentContainer = document.getElementById("content");
  // Prevents other css styles from being applied to current page
  contentContainer.className = "";
  contentContainer.classList.add("contact-page");
  contentContainer.appendChild(contactPageLoad().renderHeader());
  contentContainer.appendChild(contactPageLoad().renderMain());
  contentContainer.appendChild(contactPageLoad().renderFooter());


}

function pageSwitcher() {
  const homeButton = document.querySelector(".page-1");
  const menuButton = document.querySelector(".page-2");
  const contactButton = document.querySelector(".page-3");
  const contentContainer = document.getElementById("content");


  homeButton.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    loadHomePage();
    pageSwitcher();
  });

  menuButton.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    loadMenuPage();
    pageSwitcher();
  });

  contactButton.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    loadContactPage();
    pageSwitcher();
  });
}

loadHomePage();
pageSwitcher();
