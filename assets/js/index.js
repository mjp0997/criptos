// Elementos

const loginBtn = document.querySelector('#login');
const loginForm = document.querySelector('#login-form');
const loginClose = document.querySelector('#login-close');
const loginRedir = document.querySelector('#login-redir');
const registerBtn = document.querySelector('#register');
const registerForm = document.querySelector('#register-form');
const registerClose = document.querySelector('#register-close');
const registerRedir = document.querySelector('#register-redir');
const registerSection = document.querySelector('#register-section');



// Funciones

const toggleTooltip = (toolTip, bool = false, ...dependencies) => {
   if (bool) {
      toolTip.classList.add('show');
   } else {
      toolTip.classList.remove('show');
   }

   dependencies.forEach(dep => dep.classList.remove('show'));
}

const hideTooltipOutsideClick = (e, toolTip) => e.target == toolTip && toolTip.classList.remove('show');



// Eventos

loginBtn.addEventListener('click', () => toggleTooltip(loginForm, true, registerForm));

loginClose.addEventListener('click', () => toggleTooltip(loginForm));

loginRedir.addEventListener('click', () => toggleTooltip(registerForm, true, loginForm));

loginForm.addEventListener('click', (e) => hideTooltipOutsideClick(e, loginForm))

registerBtn.addEventListener('click', () => toggleTooltip(registerForm, true, loginForm));

registerClose.addEventListener('click', () => toggleTooltip(registerForm));

registerRedir.addEventListener('click', () => toggleTooltip(loginForm, true, registerForm));

registerForm.addEventListener('click', (e) => hideTooltipOutsideClick(e, registerForm))

registerSection.addEventListener('click', () => toggleTooltip(registerForm, true, loginForm));