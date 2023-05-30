let cocktails = {
    data: [
        {
            cocktailsName: "Whiskey Sour",
            category: "Whiskey",
            price: "30",
            image: "whiskey_sour.jpg",
        },
        {
            cocktailsName: "Daiquiry",
            category: "Rum",
            price: "19",
            image: "daiquiri.jpg",
        },
        {
            cocktailsName: "B&$ Sangria",
            category: "SMix",
            price: "29",
            image: "sangria.jpg",
        },
        {
            cocktailsName: "Irish Coffee",
            category: "Whiskey",
            price: "10",
            image: "irish_coffee.jpg",
        },
        {
            cocktailsName: "Vodka Martini",
            category: "Vodka",
            price: "19",
            image: "vodka_martini.jpg",
        },
        {
            cocktailsName: "Frozen Daiquiry",
            category: "Rum",
            price: "19",
            image: "frozen_daiquiri.jpg",
        },
        {
            cocktailsName: "Vodka Lemon",
            category: "Vodka",
            price: "15",
            image: "vodka_lemon.jpg",
        },
        {
            cocktailsName: "Mojito",
            category: "Rum",
            price: "15",
            image: "mojito.jpg",
        },
    ],
  };
  
for (let i of cocktails.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //cocktails name
    let name = document.createElement("h5");
    name.classList.add("cocktails-name");
    name.innerText = i.cocktailsName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("cocktails").appendChild(card);
}
  
  //parameter passed from button (Parameter same as category)
function filterCocktails(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        }   else {
            button.classList.remove("active");
        }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        }   else {
                //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            }   else {
                //hide other elements
                element.classList.add("hide");
            }
      }
    });
}
  
//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".cocktails-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        }   else {
            //hide others
            cards[index].classList.add("hide");
    }
});
});
  
//Initially display all cocktails
window.onload = () => {
filterCocktails("all");
};