import "./contact.css";

const contactPageLoad = () => {
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

    const pageNames = ["Home", "Menu", "Contact"];
    for (let i = 0; i < 3; i++) {
      li = document.createElement("li");
      if (pageNames[i] === "Contact") {
        li.style.borderBottomColor = "black";
      }
      button = document.createElement("button");
      button.classList.add(`page-${i + 1}`);
      button.textContent = pageNames[i];
      li.appendChild(button);
      ul.appendChild(li);
    }

    rightSideNav.appendChild(ul);
    header.appendChild(rightSideNav);
    return header;
  };

  const renderMain = () => {
    const main = document.createElement("main");
    // allows us to keep our css files specific to the current page
    main.classList.add("contact-page");

    const h1 = document.createElement("h1");
    h1.textContent = "Get in Contact with us!";
    main.appendChild(h1);

    const restaurantInfoContainers = document.createElement("div");
    restaurantInfoContainers.classList.add("restaurantInfoContainers");
    main.appendChild(restaurantInfoContainers);

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contactContainer");
    restaurantInfoContainers.appendChild(contactContainer);

    const phoneNumberContainer = document.createElement("div");
    phoneNumberContainer.classList.add("phoneNumberContainer");
    contactContainer.appendChild(phoneNumberContainer);

    const h3PhoneContainer = document.createElement("h3");
    h3PhoneContainer.textContent = "Phone number:";
    phoneNumberContainer.appendChild(h3PhoneContainer);

    const phoneNumberPara = document.createElement("p");
    phoneNumberPara.classList.add("phoneNumber");
    phoneNumberPara.textContent = "(123) 456-7890";
    phoneNumberContainer.appendChild(phoneNumberPara);

    const emailContainer = document.createElement("div");
    emailContainer.classList.add("emailContainer");
    contactContainer.appendChild(emailContainer);

    const h3EmailContainer = document.createElement("h3");
    h3EmailContainer.textContent = "Email:";
    emailContainer.appendChild(h3EmailContainer);

    const emailPara = document.createElement("p");
    emailPara.classList.add("emailPara");
    emailPara.textContent = "fakeemail@email.com";
    emailContainer.appendChild(emailPara);

    const locationContainer = document.createElement("div");
    locationContainer.classList.add("locationContainer");
    restaurantInfoContainers.appendChild(locationContainer);

    // Create iframe to embed google map
    const iframe = document.createElement("iframe");
    setAttributes(iframe, {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13348.154443976124!2d-106.37357130474606!3d39.59902409313627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876a7060c630dbdb%3A0xb8abce9f79af70e4!2sEagle%20County%2C%20CO%2081657!5e0!3m2!1sen!2sus!4v1678649680796!5m2!1sen!2sus",
      allowfullscreen: "false",
      loading: "lazy",
      referrerpolicy: "no-referrer-when-downgrade",
    });
    locationContainer.appendChild(iframe);
    return main;
  };

  const renderFooter = () => {
    const footer = document.createElement("footer");
    footer.textContent = "Created by: TheRealBill91";
    return footer;
  };

  // helper function that sets multiple attributes on DOM element
  // at once
  const setAttributes = (el, attrs) => {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  };

  return { renderHeader, setAttributes, renderFooter, renderMain };
};

export default contactPageLoad;
