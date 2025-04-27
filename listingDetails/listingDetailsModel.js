export async function productDetailModel(productId) {
    const response = await fetch(`http://localhost:8000/api/products/${productId}?_expand=user`);

    if (!response.ok) {
        throw new Error("Producto no disponible");
    }

    const productDetail = await response.json();
    return productDetail;
}

export async function removeProduct(productId) {
    const token = localStorage.getItem('token');

    const response = await fetch(`http://localhost:8000/api/products/${productId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("No se pudo eliminar el producto");
    }
}

export async function getLoggedInUserInfo() {
    const token = localStorage.getItem('token');

    const response = await fetch(`http://localhost:8000/auth/me`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Usuario no existente");
    }

    const user = await response.json();
    return user;
}