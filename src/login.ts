export function setupLogin(element: HTMLElement) {
  element.innerHTML = `
    <div class="form-group">
      <label for="login-email">Email</label>
      <input type="email" id="login-email" required>
    </div>
    <div class="form-group">
      <label for="login-password">Password</label>
      <input type="password" id="login-password" required>
    </div>
    <div class="form-group">
      <button id="login-button">
        <span>Iniciar Sesión</span>
        <div id="spinner" class="spinner"></div>
      </button>
    </div>
    <div id="error-message" class="error-message"></div>
  `;

  const loginButton = document.getElementById('login-button');
  const spinner = document.getElementById('spinner');
  const loginText = loginButton?.querySelector('span');
  const errorMessage = document.getElementById('error-message');

  loginButton?.addEventListener('click', () => {
    const email = (document.getElementById('login-email') as HTMLInputElement).value;
    const password = (document.getElementById('login-password') as HTMLInputElement).value;

    loginText!.style.display = 'none';
    spinner!.style.display = 'inline-block';

    setTimeout(() => {
      if (password === '12345') {
        const name = email.split('@')[0];
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        window.location.hash = `#profile?name=${capitalizedName}&email=${email}`;
      } else {
        loginText!.style.display = 'inline';
        spinner!.style.display = 'none';
        showError('Credenciales incorrectas');
      }
    }, 2000);
  });

  function showError(message: string) {
    errorMessage!.innerText = message;
    errorMessage!.style.display = 'block';
    errorMessage!.classList.add('show');
    setTimeout(() => {
      errorMessage!.classList.remove('show');
      errorMessage!.style.display = 'none';
    }, 3000);
  }
}