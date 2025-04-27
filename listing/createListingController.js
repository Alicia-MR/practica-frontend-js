import { createListing } from "./createListingModel.js";
import { notificationsController } from "../notifications/notificationsController.js";

export const createListingController = (formElement) => {
    const notificationsElement = document.querySelector(".notifications");
    const { showNotification } = notificationsController(notificationsElement);
    
    const token = localStorage.getItem("token");

    if (!token) {
        showNotification("Por favor, inicia sesión para crear un anuncio", "error");
        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
        return;
    }

    formElement.addEventListener("submit", async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData(formElement);

            const productData = {
                name: formData.get("name"),
                description: formData.get("description"),
                price: formData.get("price"),
                sale: formData.get("sale") === "true",
                image: formData.get("image") || "", // Imagen opcional
            };

            await createListing(productData);

            showNotification("El anuncio se ha creado correctamente", "success");

            setTimeout(() => {
                window.location.href = "/";
            }, 2000);

        } catch (error) {
            showNotification(error.message, "error");
        }
    });
};