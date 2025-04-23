import { getProducts  } from "./showProductsModel.js";
import { buildProduct, noProductsAdvice } from "./showProductsView.js";

export async function showProductsController(container) {
    try {
        const products = await getProducts();
        drawProducts(products, container);
    } catch (error) {
        throw new Error('Error al cargar los productos.')
    }
}

function drawProducts(products, container) {
    container.innerHTML = '';

    if (products.length <= 0) {
        container.innerHTML = noProductsAdvice();
    } else {
        products.forEach(product => {
            const productHTML = document.createElement("a");
            productHTML.setAttribute("href", `./productDetail.html?id=${product.id}`);
            productHTML.innerHTML = buildProduct(product);
    
            container.appendChild(productHTML);
        });
    }
};