

const datausercardTemplate = document.querySelector("[data-user-card-template")

fetch("Assets/Jsonfiles/products.JSON")
.then(res => res.json())
.then(data => {
    
    const userCardContainer = document.querySelector("shoppingContainer");
    data.forEach(product =>{
        let card = document.getElementById("dataTemplate").content.cloneNode(true).children[0];
        let title = card.querySelector("[data-title]");
        let price = card.querySelector("[data-price]");
        let desc = card.querySelector("[data-desc]");
        let image = card.querySelector("[data-image]");
        title.textContent = product.title;
        price.textContent = product.price;
        desc.textContent = product.description;
        image.src.textContent = product.image;
        userCardContainer.append(card);
    });
    
    
    
});

