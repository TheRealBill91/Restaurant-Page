import "./css/normalize.css";
import "./css/style.css";

const menu = () => {
  const renderHeader = () => {
    const header = document.createElement("header");

    // function creates and renders content inside of header element

    const leftLogoText = document.createElement("p");
    leftLogoText.textContent = "Rocky Top";
    header.appendChild(leftLogoText);

    // Create right side nav container and its child elements
    const rightSideNav = document.createElement("nav");
    rightSideNav.classList.add("rightSideNav");

    // Create unordered list that contains nav links to other pages
    const ul = document.createElement("ul");
    let li;
    let button;

    for (let i = 0; i < 3; i++) {
      li = document.createElement("li");
      button = document.createElement("button");
      button.textContent = `Page ${i + 1}`;
      li.appendChild(button);
      ul.appendChild(li);
    }

    rightSideNav.appendChild(ul);
    header.appendChild(rightSideNav);
    return header;
  };

//   const renderMain = () => {
//     const main = document.createElement('main');

//   }

  return { renderHeader };
};

export default menu;
