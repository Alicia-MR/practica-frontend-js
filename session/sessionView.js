export const buildUnAuthorizedSession = () => {
    return `
    <a href="./login.html">Login</a>
    <a href="./register.html">Registro</a>
    `;
}

export const buildAuthorizedSession = () => {
    return `
    <a href="./createListing.html">Crear anuncio</a>
    <button class="logout">Cerrar sesión</a>
    `;
}