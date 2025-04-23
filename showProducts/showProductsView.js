export const buildProduct = (product) => {

    const date = new Date(product.updatedAt)
    
    let productView = `
        <p>${product.userId}</p>
        <p>${date.toLocaleString()}</p>
        <p>${product.content}</p>
                `;

        return productView
    }
    
    export const noProductsAdvice = () => {
        return '<h3>Lo siento, no hay productos disponibles</h3>'
    }
    