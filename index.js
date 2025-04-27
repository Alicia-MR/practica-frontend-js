import { showProductsController } from "./showProducts/showProductsController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { sessionController } from "./session/sessionController.js"
import { navbarController } from "./navbar/navbarController.js"


navbarController();


document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.querySelector('.navbar-links');
    const session = document.querySelector(".session");
    const productsContainer = document.querySelector(".products-container");
    const notifications = document.querySelector(".notifications");

    sessionController(session);

    const { showNotification } = notificationsController(notifications);

    productsContainer.addEventListener("load-products-error", (event) => {
        const errorMessage = event.detail; 
        showNotification(errorMessage); 
    });

    navbarController(navbarContainer);
    showProductsController(productsContainer);
});