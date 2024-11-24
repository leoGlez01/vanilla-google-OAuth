export function setupRegister(element: HTMLElement) {
  element.innerHTML = `
    <div class="form-group">
      <label for="register-email">Email</label>
      <input type="email" id="register-email" required>
    </div>
    <div class="form-group">
      <label for="register-password">Password</label>
      <input type="password" id="register-password" required>
    </div>
    <div class="form-group">
      <button id="register-button">Crear</button>
    </div>
  `;

  const registerButton = document.getElementById('register-button');
  registerButton?.addEventListener('click', () => {
    const email = (document.getElementById('register-email') as HTMLInputElement).value;
    const password = (document.getElementById('register-password') as HTMLInputElement).value;
    console.log('Register:', { email, password });
  });
}