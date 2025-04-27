
// para hacer esto he tenido que pedir ayuda
export function navbarController() {
    const loginLink = document.querySelector(".nav-login");
    const logoutButton = document.querySelector(".nav-logout");
    const token = localStorage.getItem("token");

    if (token) {
        loginLink.style.display = "none";
        logoutButton.style.display = "inline-block";
    } else {
        loginLink.style.display = "inline-block";
        logoutButton.style.display = "none";
    }

    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    });
}