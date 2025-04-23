import { showProductsController } from "./showProducts/showProductsController.js"



document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".products-container");

    showProductsController(container);
});