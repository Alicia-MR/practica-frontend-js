import { createUser } from "./registerModel.js";
import { REGEXP } from '../utils/regexp.js'

export const registerController = (form) => {

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const emailElement = form.querySelector('#email');
        const email = emailElement.value;

        const passwordElement = form.querySelector('#password');
        const password = passwordElement.value;
        const passwordConfirmElement = form.querySelector('#password-confirm');
        const passwordConfirm = passwordConfirmElement.value;

        const errors = []

        const emailRegExp = REGEXP.mail;
        if (!emailRegExp.test(email)) {
            errors.push('El formato del email es incorrecto')
        }

        if (password !== passwordConfirm) {
            errors.push('La contraseña no coincide')
        }

        if (errors.length === 0) {
            handleCreateUser(email, password, form)
        } else {
            errors.forEach(error => {
                const event = new CustomEvent('register-error',  {
                    detail: error
                })
                form.dispatchEvent(event)
            })
        }
    })

    const handleCreateUser = async (email, password, form) => {
        try {
            await createUser(email, password);
            const event = new CustomEvent('register-ok',  {
                detail: {
                    message: 'Te has registrado correctamente',
                    type: 'success'
                }
            });
            setTimeout(() => {
                window.location = '/'
            }, 3000)
        } catch (error) {
            const event = new CustomEvent('register-error',  {
                detail: error
            })
            form.dispatchEvent(event)
        }
    }
}