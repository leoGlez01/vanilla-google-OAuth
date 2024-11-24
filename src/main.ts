import { setupLogin } from './login';
import { setupRegister } from './register';

const app = document.getElementById('app');

// Renderiza las rutas
function render(route: string) {
  if (app) {
    if (route.startsWith('profile')) {
      const params = new URLSearchParams(route.split('?')[1]);
      const name = params.get('name');
      const email = params.get('email');

      app.innerHTML = `
        <div class="container">
          <div class="left">
            <div class="profile-container active">
              <div class="profile-pic">
                <img src="/img/profile.png" alt="Profile Picture">
              </div>
              <div class="profile-info">
                <h3>${name}</h3>
                <p>${email}</p>
              </div>
              <button class="logout-button" id="logout-button">Cerrar Sesión</button>
            </div>
          </div>
          <div class="right">
            <img src="/img/fingerprint.jpg" alt="Image">
          </div>
        </div>
      `;

      const logoutButton = document.getElementById('logout-button');
      logoutButton?.addEventListener('click', () => {
        window.location.hash = '#login';
      });
    } else if (route === 'login') {
      app.innerHTML = `
        <div class="container">
          <div class="left">
            <div>
              <h2>Iniciar Sesión</h2>
              <p class="welcome-message">Bienvenido al servicio de identidad de Tecopos</p>
              <div id="login-form"></div>
              <div id="google-signin-button"></div>
              <p><a href="#register">No tienes una cuenta? Registrate!</a></p>
            </div>
          </div>
          <div class="right">
            <img src="/img/fingerprint.jpg" alt="Image">
          </div>
        </div>
      `;

      google.accounts.id.initialize({
        client_id: '1023747230019-lfmvjecikhv4votd5l2r750np5t6j89j.apps.googleusercontent.com',
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById('google-signin-button')!,
        {
          theme: 'filled_black',
          size: 'large',
          text: 'continue_with',
          shape: 'pill'
        }
      );
      google.accounts.id.prompt();

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
            <img src="/img/fingerprint.jpg" alt="Image">
          </div>
        </div>
      `;
      setupRegister(document.getElementById('register-form') as HTMLElement);
    }
  }
}

// Maneja la respuesta de Google
function handleCredentialResponse(response: any) {
  const token = response.credential;
  console.log('Token de Google:', token);

  // Opcional: decodifica el token para obtener info del usuario
  const payload = JSON.parse(atob(token.split('.')[1]));
  const { name, email } = payload;

  // Redirige a la página de perfil
  window.location.hash = `profile?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
}

window.addEventListener('hashchange', () => {
  const route = window.location.hash.substring(1);
  render(route);
});

const initialRoute = window.location.hash.substring(1) || 'login';
render(initialRoute);
