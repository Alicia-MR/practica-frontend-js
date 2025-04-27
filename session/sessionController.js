export const sessionController = (container) => {
    const loginLink = container.querySelector('.nav-login');
    const createLink = container.querySelector('.nav-create');
    const logoutButton = container.querySelector('.nav-logout');

    if (!loginLink || !createLink || !logoutButton) return;

    const isUserLoggedIn = !!localStorage.getItem("token");

    if (isUserLoggedIn) {
        loginLink.style.display = 'none';
        createLink.style.display = 'inline-block';
        logoutButton.style.display = 'inline-block';

        logoutButton.addEventListener('click', () => {
            localStorage.removeItem("token");
            sessionController(container);
        });
    } else {
        loginLink.style.display = 'inline-block';
        createLink.style.display = 'none';
        logoutButton.style.display = 'none';
    }
};