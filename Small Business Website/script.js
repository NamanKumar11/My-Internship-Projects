document.addEventListener("DOMContentLoaded", function() {
    // Sample product data (simplified)
    const products = [
        {
            name: "Windows 11",
            description: "The Latest Windows 11",
            price: 200,
            imageUrl: "windows-11-logo_web.png",     
        },
        {
            name: "Internet Download Manager",
            description: "Internet Download Manager",
            price: 22,
            imageUrl: "idm.jpg",
        },
        // Add more products as needed
    ];

    // Function to generate product listings
    function generateProductListings() {
        const productsSection = document.getElementById("products");
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");

            const productImage = document.createElement("img");
            productImage.src = product.imageUrl;
            productImage.alt = product.name;

            const productName = document.createElement("h3");
            productName.innerText = product.name;

            const productDescription = document.createElement("p");
            productDescription.innerText = `${product.description} Price: $${product.price}`;

            const buyButton = document.createElement("button");
            buyButton.classList.add("buy-button");
            buyButton.innerText = "Add to Cart";

            productDiv.appendChild(productImage);
            productDiv.appendChild(productName);
            productDiv.appendChild(productDescription);
            productDiv.appendChild(buyButton);

            productsSection.appendChild(productDiv);
        });
    }

    generateProductListings();
});
