
/* import Pic from './assets/mountain-background.jpg' */
import homePageLoad from './home';

function loadHomePage() {
    const contentContainer = document.getElementById('content');
    contentContainer.appendChild(homePageLoad().renderHeader());
    contentContainer.appendChild(homePageLoad().renderMain());
    contentContainer.appendChild(homePageLoad().renderFooter());
}

loadHomePage();