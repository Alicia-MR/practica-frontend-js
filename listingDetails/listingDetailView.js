export const buildProductDetailView = (product) => {
    const date = new Date(product.updatedAt);

    return `
        <div class="product-detail-container">
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price"><strong>Precio:</strong> €${product.price}</p>
                <p><small>Última actualización: ${date.toLocaleString()}</small></p>
                </div>
            </div>
        </div>
    `;
};

export const buildRemoveProductButton = () => {
    const removeButton = document.createElement("button");
    removeButton.textContent = "Borrar producto";
    
    removeButton.addEventListener("click", () => {
        console.log("Eliminar producto");
    });

    return removeButton;
};