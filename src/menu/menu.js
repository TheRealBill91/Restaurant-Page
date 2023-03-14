// import "./normalize.css";
import "./menu.css";

const menuPageLoad = () => {
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
      if (pageNames[i] === "Menu"){
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
    main.classList.add("menu-main");

    // Start of starters container
    const startersContainer = document.createElement("div");
    startersContainer.classList.add("startersContainer");

    const startersLabel = document.createElement("p");
    startersLabel.classList.add("startersLabel");
    startersLabel.textContent = "Starters";
    startersContainer.appendChild(startersLabel);

    // Creates div that holds the actual menu (starters) items
    const starters = document.createElement("div");
    starters.classList.add("starters");

    // Start of oysters menu item
    const roastedOysters = document.createElement("div");
    roastedOysters.classList.add("roastedOysters");

    const oystersTitleAndPrice = document.createElement("p");
    oystersTitleAndPrice.classList.add("titleAndPrice");
    oystersTitleAndPrice.textContent = "Roasted Oysters ($18)";
    const oystersDescription = document.createElement("p");
    oystersDescription.classList.add("description");
    oystersDescription.textContent =
      " Enjoy the briny flavor of fresh oysters roasted in garlic butter and served with a squeeze of lemon.";

    roastedOysters.append(oystersTitleAndPrice, oystersDescription);

    // Start of beef tartare menu item
    const beefTartare = document.createElement("div");
    beefTartare.classList.add("beefTartare");

    const beefTartareTitleAndPrice = document.createElement("p");
    beefTartareTitleAndPrice.classList.add("titleAndPrice");
    beefTartareTitleAndPrice.textContent = "Beef Tartare ($22)";
    const beefTartareDescription = document.createElement("p");
    beefTartareDescription.classList.add("description");
    beefTartareDescription.textContent =
      "A classic dish of finely chopped raw beef seasoned with capers, mustard and a quail egg on top";

    beefTartare.append(beefTartareTitleAndPrice, beefTartareDescription);

    // Start of artic char menu item
    const articChar = document.createElement("div");
    articChar.classList.add("articChar");

    const articCharTitleAndPrice = document.createElement("p");
    articCharTitleAndPrice.classList.add("titleAndPrice");
    articCharTitleAndPrice.textContent = "Arctic Char ($20)";
    const articCharDescription = document.createElement("p");
    articCharDescription.classList.add("description");
    articCharDescription.textContent =
      " A delicate fish cured with citrus and served with a crisp fennel salad and a dollop of dill cream.";

    articChar.append(articCharTitleAndPrice, articCharDescription);

    // append menu items to starters div, and starters div to starters container
    starters.append(roastedOysters, beefTartare, articChar);
    startersContainer.appendChild(starters);

    // Start of entrees container
    const entreesContainer = document.createElement("div");
    entreesContainer.classList.add("entreesContainer");

    const entreesLabel = document.createElement("p");
    entreesLabel.classList.add("entreesLabel");
    entreesLabel.textContent = "Entrees";
    entreesContainer.appendChild(entreesLabel);

    // Creates div that holds the actual menu (entrees) items
    const entrees = document.createElement("div");
    entrees.classList.add("entrees");

    // Start of skate menu item
    const skate = document.createElement("div");
    skate.classList.add("skate");

    const skateTitleAndPrice = document.createElement("p");
    skateTitleAndPrice.classList.add("titleAndPrice");
    skateTitleAndPrice.textContent = "Skate ($36)";
    const skateDescription = document.createElement("p");
    skateDescription.classList.add("description");
    skateDescription.textContent =
      "A tender fillet of skate pan-fried in brown butter and garnished with capers and parsley.";

    skate.append(skateTitleAndPrice, skateDescription);

    // Start of lamb menu item
    const lamb = document.createElement("div");
    lamb.classList.add("lamb");

    const lambTitleAndPrice = document.createElement("p");
    lambTitleAndPrice.classList.add("titleAndPrice");
    lambTitleAndPrice.textContent = "Lamb ($42)";
    const lambDescription = document.createElement("p");
    lambDescription.classList.add("description");
    lambDescription.textContent =
      "A succulent cut of lamb roasted to perfection and accompanied by a tangy mint sauce and crispy potatoes.";

    lamb.append(lambTitleAndPrice, lambDescription);

    // Start of pork shoulder menu item
    const porkShoulder = document.createElement("div");
    porkShoulder.classList.add("articChar");

    const porkShoulderTitleAndPrice = document.createElement("p");
    porkShoulderTitleAndPrice.classList.add("titleAndPrice");
    porkShoulderTitleAndPrice.textContent = "Pork Shoulder ($38)";
    const porkShoulderDescription = document.createElement("p");
    porkShoulderDescription.classList.add("description");
    porkShoulderDescription.textContent =
      "A hearty portion of pork shoulder braised until fork-tender and topped with a sweet and spicy apple chutney. Served with mashed sweet potatoes.";

    porkShoulder.append(porkShoulderTitleAndPrice, porkShoulderDescription);

    // append menu items to starters div, and starters div to starters container
    entrees.append(skate, lamb, porkShoulder);
    entreesContainer.appendChild(entrees);

    // Start of desserts container
    const dessertsContainer = document.createElement("div");
    dessertsContainer.classList.add("dessertsContainer");

    const dessertsLabel = document.createElement("p");
    dessertsLabel.classList.add("dessertsLabel");
    dessertsLabel.textContent = "Desserts";
    dessertsContainer.appendChild(dessertsLabel);

    // Creates div that holds the actual menu (dessert) items
    const desserts = document.createElement("div");
    desserts.classList.add("desserts");

    // Start of chocolate mousse menu item
    const chocolateMousse = document.createElement("div");
    chocolateMousse.classList.add("chocolateMousse");

    const chocolateMousseTitleAndPrice = document.createElement("p");
    chocolateMousseTitleAndPrice.classList.add("titleAndPrice");
    chocolateMousseTitleAndPrice.textContent = "Chocolate Mousse ($12)";
    const chocolateMousseDescription = document.createElement("p");
    chocolateMousseDescription.classList.add("description");
    chocolateMousseDescription.textContent =
      "A decadent dessert of rich chocolate mousse topped with whipped cream and fresh raspberries.";

    chocolateMousse.append(
      chocolateMousseTitleAndPrice,
      chocolateMousseDescription
    );

    // Start of apple pie menu item
    const applePie = document.createElement("div");
    applePie.classList.add("applePie");

    const applePieTitleAndPrice = document.createElement("p");
    applePieTitleAndPrice.classList.add("titleAndPrice");
    applePieTitleAndPrice.textContent = "Apple Pie ($10)";
    const applePieDescription = document.createElement("p");
    applePieDescription.classList.add("description");
    applePieDescription.textContent =
      "A warm slice of homemade apple pie filled with cinnamon-spiced apples and drizzled with caramel sauce. Served with vanilla ice cream.";

    applePie.append(applePieTitleAndPrice, applePieDescription);

    // Start of lemon cheesecake menu item
    const lemonCheesecake = document.createElement("div");
    lemonCheesecake.classList.add("lemonCheesecake");

    const lemonCheesecakeTitleAndPrice = document.createElement("p");
    lemonCheesecakeTitleAndPrice.classList.add("titleAndPrice");
    lemonCheesecakeTitleAndPrice.textContent = "Lemon Cheesecake ($11)";
    const lemonCheesecakeDescription = document.createElement("p");
    lemonCheesecakeDescription.classList.add("description");
    lemonCheesecakeDescription.textContent =
      "A creamy cheesecake flavored with lemon zest and baked on a graham cracker crust. Served with a blueberry compote.";

    lemonCheesecake.append(
      lemonCheesecakeTitleAndPrice,
      lemonCheesecakeDescription
    );

    // append menu items to starters div, and starters div to starters container
    desserts.append(chocolateMousse, applePie, lemonCheesecake);
    dessertsContainer.appendChild(desserts);

    // append menu items inside main element
    main.append(startersContainer, entreesContainer, dessertsContainer);
    return main;
  };

  const renderFooter = () => {
    const footer = document.createElement("footer");
    footer.textContent = "Created by: TheRealBill91";
    return footer;
  };

  return { renderHeader, renderMain, renderFooter };
};

export default menuPageLoad;
