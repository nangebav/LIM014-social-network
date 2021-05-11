/* eslint-disable no-console */
import { singInFunction } from '../controller-function/auth-logIn.js';

export default () => {
  const viewLogIn = `
  <section id="viewLogIn">
    <section id="messageLogIn">
      <h2>Bienvenidx a la comunidad de muralistas independientes más increíble del mundo</h2>
      <p>Muestra, promueve y comparte su trabajo</p>
    </section>
    <form id="frmLogIn">
      <h1>MiurArt</h1>
      <input id="email" type="email" placeholder="Correo electrónico">
      <input id="password" type="password" placeholder="Contraseña">
      <button id="btnLogIn">Ingresar</button> 
      <a class="o">------------------ O ------------------</a>
      <section>
        <img id="authFb" alt="ico-fb" class="icoFb" src="https://user-images.githubusercontent.com/77282012/117555345-068ac100-b024-11eb-8c0f-811f51c99abb.png">
        <img id="authGoogle" alt="ico-google" class="icoGoogle" src="https://user-images.githubusercontent.com/77282012/117885191-282db780-b273-11eb-8899-ee6685fb9cf2.png">
      </section>
      <p id="aRegister">¿No tienes una cuenta? <a href="#/register">Registrarse</a> </p>
    </form>
  </section>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewLogIn;

  const btnLogIn = divElem.querySelector('#btnLogIn');
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
