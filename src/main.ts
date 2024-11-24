import { setupLogin } from './login';
import { setupRegister } from './register';

const app = document.getElementById('app');

function render(route: string) {
  if (app) {
    if (route === 'login') {
      app.innerHTML = `
        <div class="container">
          <div class="left">
            <div>
              <h2>Iniciar Sesión</h2>
              <p class="welcome-message">Bienvenido al servicio de identidad de Tecopos</p>
              <div id="login-form"></div>
              <p><a href="#register">No tienes una cuenta? Registrate!</a></p>
            </div>
          </div>
          <div class="right">
            <img src="../public/img/fingerprint.jpg" alt="Image">
          </div>
        </div>
      `;
      setupLogin(document.getElementById('login-form') as HTMLElement);
    } else if (route === 'register') {
      app.innerHTML = `
        <div class="container">
          <div class="left">
            <div>
              <h2>Registro</h2>
              <p class="welcome-message">Bienvenido al servicio de identidad de Tecopos</p>
              <div id="register-form"></div>
              <p><a href="#login">Ya tienes una cuenta? Inicia Sesión!</a></p>
            </div>
          </div>
          <div class="right">
            <img src="../public/img/fingerprint.jpg" alt="Image">
          </div>
        </div>
      `;
      setupRegister(document.getElementById('register-form') as HTMLElement);
    } else if (route === 'profile') {
      app.innerHTML = `
        <div class="container">
          <div class="left">
            <div class="profile-container active">
              <div class="profile-pic">
                <img src="../public/img/profile.png" alt="Profile Picture">
              </div>
              <div class="profile-info">
                <h3>Leo</h3>
                <p>leo@gmail.com</p>
              </div>
              <button class="logout-button" id="logout-button">Cerrar Sesión</button>
            </div>
          </div>
          <div class="right">
            <img src="../public/img/fingerprint.jpg" alt="Image">
          </div>
        </div>
      `;

      const logoutButton = document.getElementById('logout-button');
      logoutButton?.addEventListener('click', () => {
        window.location.hash = '#login';
      });
    }
  }
}

window.addEventListener('hashchange', () => {
  const route = window.location.hash.substring(1);
  render(route);
});

const initialRoute = window.location.hash.substring(1) || 'login';
render(initialRoute);