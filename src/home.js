import "./css/normalize.css";
import "./css/style.css";

// loads home page using DOM
const homePageLoad = () => {
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

  const renderMain = () => {
    const main = document.createElement("main");

    // Create head line for top of home page with p element for text
    const headLine = document.createElement("div");
    headLine.classList.add("headLine");
    const headLinePara = document.createElement("p");
    headLinePara.textContent = "An exceptional dining experience... Rocky Top";
    headLine.appendChild(headLinePara);

    // Create bg image, class, & alt attribute
    const backgroundImage = document.createElement("div");
    backgroundImage.classList.add("backgroundImage");
    backgroundImage.setAttribute(
      "alt",
      "A landscape picture of the mountains covered in snow"
    );

    // Create bg img p element & class
    const bgImgPara = document.createElement("p");
    bgImgPara.classList.add("bg-img-headline");
    bgImgPara.textContent =
      "Come experience our tasty meals with a fantastic view! We offer a wide variety of food and the atmosphere is fantastic";

    backgroundImage.appendChild(bgImgPara);

    main.appendChild(headLine);
    main.appendChild(backgroundImage);
    return main;
  };

  const renderFooter = () => {
    const footer = document.createElement("footer");
    footer.textContent = "Created by: TheRealBill91";
    return footer;
  };

  return { renderHeader, renderMain, renderFooter };
};

/* homePageLoad(); */

export default homePageLoad;
