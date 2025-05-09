import { getProducts  } from "./showProductsModel.js";

export async function showProductsController(container) {
    try {
        const products = await getProducts();
        drawProducts(products, container);
    } catch (error) {
        container.dispatchEvent(new CustomEvent("load-products-error", {
            detail: error.message
        }));
    }
}

function drawProducts(products, container) {
    container.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product-item");

        productElement.innerHTML = `
        <a href="productdetail.html?productId=${product.id}" class="product-item">
            <img src="${product.image || 'default-image.jpg'}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">€${product.price}</p>
            </div>
        </a>
        `;

        container.appendChild(productElement);
    });
};