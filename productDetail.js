import { productDetailController } from './listingDetails/listingDetailController.js';

document.addEventListener("DOMContentLoaded", () => {
    const searchParams = new URLSearchParams(window.location.search);
    const productId = searchParams.get("productId");

    if (productId) {
        productDetailController(productId);
    } else {
        window.location = '/';
    }
});