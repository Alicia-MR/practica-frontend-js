import { productDetailModel, removeProduct, getLoggedInUserInfo } from "./listingDetailsModel.js";
import { notificationsController } from "../notifications/notificationsController.js";
import { buildProductDetailView, buildRemoveProductButton } from "./listingDetailView.js";

export const productDetailController = async (productId) => {
    const notifications = document.querySelector(".notifications");
    const { showNotification } = notificationsController(notifications);

    try {
        const product = await productDetailModel(productId);
        
        const loggedInUser = await getLoggedInUserInfo();
        
        const isOwner = product.userId === loggedInUser.id;

        const productView = buildProductDetailView(product);
        
        const productContainer = document.querySelector(".product-detail-container");
        productContainer.innerHTML = productView;

        const backButton = document.createElement("button");
        backButton.textContent = "Atrás";
        backButton.addEventListener("click", () => {
            window.location.href = "/";
        });
        productContainer.appendChild(backButton);

        if (isOwner) {
            const removeButton = buildRemoveProductButton();
            removeButton.addEventListener("click", async () => {
                const confirmation = confirm("¿Seguro que quieres eliminar este producto?");
                if (confirmation) {
                    try {
                        await removeProduct(productId);
                        showNotification("Producto eliminado con éxito", "success");
                        window.location.href = "/products";
                    } catch (error) {
                        showNotification("Error al eliminar el producto", "error");
                    }
                }
            });
            productContainer.appendChild(removeButton);
        }

    } catch (error) {
        showNotification("Error al cargar el detalle del producto", "error");
        console.error("Error al cargar el producto:", error);
    }
};