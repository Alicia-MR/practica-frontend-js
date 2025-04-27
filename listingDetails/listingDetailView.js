export const buildProductDetailView = (product) => {
    const date = new Date(product.updatedAt);

    return `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Precio:</strong> €${product.price}</p>
            <p><small>Última actualización: ${date.toLocaleString()}</small></p>
            <img src="${product.image}" alt="${product.name}" width="150">
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