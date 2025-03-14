document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Adire Lounge Set", price: 0, image: "images/logo (2).jpeg" },
        { name: "Adire Lounge Set", price: 0, image: "images/logo (3).jpeg" },
        { name: "Adire Lounge Set", price: 0, image: "images/logo (4).jpeg" },
        { name: "Adire Lounge Set", price: 0, image: "images/logo (5).jpeg" },
        // { name: "Kente Maxi Dress", price: 80, image: "images/073.jpg" },
        // { name: "Traditional Wrapper Set", price: 55, image: "images/073.jpg" },
        // { name: "Chiffon Boubou", price: 85, image: "images/009.jpg" },
        // { name: "Ankara Skirt & Blouse", price: 65, image: "images/009.jpg" },
        // { name: "Dashiki Shirt", price: 40, image: "images/073.jpg" },
        // { name: "African Beaded Kaftan", price: 95, image: "images/073.jpg" },
        // { name: "Kitenge Party Dress", price: 75, image: "images/009.jpg" }
    ];

    const productGrid = document.querySelector(".product-grid");
    const sortSelect = document.getElementById("sort");

    function displayProducts(items) {
        productGrid.innerHTML = "";
        items.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                
                <button class="buy-btn" data-product="${product.name}" data-price="${product.price}">Sold Out</button>
            `;
            productGrid.appendChild(productCard);
        });
    }

    function sortProducts(criteria) {
        let sortedProducts = [...products];
        if (criteria === "price-low") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (criteria === "price-high") {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        displayProducts(sortedProducts);
    }

    sortSelect.addEventListener("change", (e) => {
        sortProducts(e.target.value);
    });

    productGrid.addEventListener("click", (e) => {
        if (e.target.classList.contains("buy-btn")) {
            const productName = e.target.dataset.product;
            const productPrice = e.target.dataset.price;
            const message = `Hello, I'm interested in buying: ${productName} for $${productPrice}.`;
            const whatsappLink = `https://wa.me/447825308496?text=${encodeURIComponent(message)}`;
            window.location.href = whatsappLink;
        }
    });

    displayProducts(products);

   
});


/* <p>$${product.price}</p> */