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
  `;

  const loginButton = document.getElementById('login-button');
  const spinner = document.getElementById('spinner');
  const loginText = loginButton?.querySelector('span');

  loginButton?.addEventListener('click', () => {
    const email = (document.getElementById('login-email') as HTMLInputElement).value;
    const password = (document.getElementById('login-password') as HTMLInputElement).value;

    if (email === 'leo@gmail.com' && password === '12345') {
      loginText!.style.display = 'none';
      spinner!.style.display = 'inline-block';

      setTimeout(() => {
        window.location.hash = '#profile';
      }, 2000);
    } else {
      console.log('Login failed');
    }
  });
}