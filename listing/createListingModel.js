export const createListing = async (productData) => {
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("Por favor, inicia sesión para crear un anuncio.");
    }

    const response = await fetch("http://localhost:8000/api/products", {
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Error al crear el anuncio");
    }
};