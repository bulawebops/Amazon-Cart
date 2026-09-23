const firstProduct = products[0];

const productContainer = document.getElementById("product-container");

products.forEach(product => {
    productContainer.innerHTML += `
        <div class="product">
            <img 
            src="${product.url}" 
            alt="${product.name}" 
            width="100"
            >

            <h2>${product.name}</h2>

            <p>Price: $${product.price}</p>

            <button data-id="${product.id}">
                Add to Cart
            </button>
        </div>
    `;

console.log(product);
});