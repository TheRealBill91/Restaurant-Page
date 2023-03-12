
/* import Pic from './assets/mountain-background.jpg' */
import homePageLoad from './home/home';
import menuPageLoad from './menu/menu';

function loadHomePage() {
    const contentContainer = document.getElementById('content');
    contentContainer.appendChild(homePageLoad().renderHeader());
    contentContainer.appendChild(homePageLoad().renderMain());
    contentContainer.appendChild(homePageLoad().renderFooter());
}

function loadMenuPage() {
    const contentContainer = document.getElementById('content');
    contentContainer.appendChild(menuPageLoad().renderHeader());
    contentContainer.appendChild(menuPageLoad().renderMain());
    contentContainer.appendChild(menuPageLoad().renderFooter());
}



function pageSwitcher() {
    const homeButton = document.querySelector(".page-1");
    const contentContainer = document.getElementById('content');
    homeButton.addEventListener('click', () => {
        // for extra styling
        contentContainer.innerHTML = "";
        loadHomePage();
        pageSwitcher();
    })

    const menuButton = document.querySelector(".page-2");
    menuButton.addEventListener('click', () => {
        contentContainer.innerHTML = "";
        loadMenuPage();
        pageSwitcher();
    })
}

loadHomePage();
pageSwitcher();