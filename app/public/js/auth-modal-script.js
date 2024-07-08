
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const form = document.getElementById('auth-form');
    const usernameField = document.getElementById('username-field');
    const header = document.getElementById('auth-modal-header');
    const loginAction = '/auth/login';
    const registerAction = '/auth/register';
    const loginMethod = 'POST';
    const registerMethod = 'POST';
    
    toggleButton?.addEventListener('click', () => {
        console.log(this)
        const isRegister = form.getAttribute('action') === loginAction;

        const action = isRegister ? registerAction : loginAction;
        const method = isRegister ? registerMethod : loginMethod;

        form.setAttribute('action', action);
        form.setAttribute('method', method);

        if (usernameField) {
            usernameField.style.display = isRegister ? 'block' : 'none';
        }

        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.textContent = isRegister ? 'Sign up' : 'Sign in';
        }

        if (header) {
            header.innerText = isRegister ? 'Sign up' : 'Sign in';
        }
    });
});
