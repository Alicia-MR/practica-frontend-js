import { buildNotification } from './notificationsView.js'

export const notificationsController = (notifications) => {

    const showNotification = (message, type = 'error') => {
        const newNotification = document.createElement('div');

        newNotification.classList.add("notification")
        newNotification.classList.add(type)
        newNotification.innerHTML = buildNotification(message)

        const removeNotification = () => {
            newNotification.remove();
        }

        const closeButton = newNotification.querySelector("button");
        closeButton.addEventListener("click", removeNotification)

        notifications.appendChild(newNotification)
    }

    return { showNotification };
}