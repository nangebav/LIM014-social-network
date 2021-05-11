/* eslint-disable no-console */
import { singInFunction } from '../controller-function/auth-logIn.js';

export default () => {
  const viewLogIn = `
  <form id="iniciarSesion">
    <h1>MiurArt</h1>
    <input id="email" type="email" placeholder="Correo electrónico">
    <input id="password" type="password" placeholder="Contraseña">
    <button id="btnLogIn">Ingresar</button> 
    <a class="o">------------------ O ------------------</a>
    <section>
      <img id="authFb" alt="ico-fb" class="icoFb" src="https://user-images.githubusercontent.com/77282012/117555345-068ac100-b024-11eb-8c0f-811f51c99abb.png">
      <img id="authGoogle" alt="ico-google" class="icoGoogle" src="https://user-images.githubusercontent.com/77282012/117555346-07235780-b024-11eb-8bb0-1a93c7aa1a1f.png">
    </section>
    <p>¿No tienes una cuenta? <a href="#/register">Registrarse</a> </p>
  </form>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewLogIn;

  const btnLogIn = divElem.querySelector('#btnLogIn');
  // const inputs = divElem.querySelector('#email');
  // inputs.addEventListener('keyup', () => {
  //   const textInputs = document.querySelector('#email').value;
  //   if (!textInputs) {
  //     btnLogIn.disabled = true;
  //     console.log('esta vacio');
  //   } else {
  //     btnLogIn.disabled = false;
  //   }
  // });
  btnLogIn.addEventListener('click', () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const inInit = () => {
      singInFunction(email, password);
    };

    const observator = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          // cambio de vista a perfil de usuario (muro,...)
          // enter();
          console.log('entro al observator');
        } else {
          // No user is signed in.
          console.log('Usuario no existe, mensaje de error observator');
          // mostrar el formulario para que ingrese credenciales nuevamente
        }
      });
    };
    inInit();
    observator();
  });

  const btnFacebookR = divElem.querySelector('#authFb');
  btnFacebookR.addEventListener('click', () => {
    console.log('Debería ingresarse via facebook');
  });
  const btnGoogleR = divElem.querySelector('#authGoogle');
  btnGoogleR.addEventListener('click', () => {
    console.log('Debería ingresarse via Google');
  });

  return divElem;
};
