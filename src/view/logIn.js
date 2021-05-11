/* eslint-disable no-console */
import { singInFunction } from '../controller-function/auth-logIn.js';

export default () => {
  const viewLogIn = `
  <form id="iniciarSesion">
    <h1>MiurArt</h1>
    <input id="email" type="email" placeholder="Correo electrónico">
    <input id="password" type="password" placeholder="Contraseña">
    <input id="btnLogIn" type="submit" value="Ingresar">
    <a>Para ingresar con google</a>
    <label>imagen de fb</label>
    <section>
      <img id="authFb" alt="ico-fb" class="ico-fb" src="https://user-images.githubusercontent.com/77282012/117555345-068ac100-b024-11eb-8c0f-811f51c99abb.png">
      <img id="authGoogle" alt="ico-google" class="ico-google" src="https://user-images.githubusercontent.com/77282012/117555346-07235780-b024-11eb-8bb0-1a93c7aa1a1f.png">
    </section>
    <p>¿No tienes una cuenta? <a href="#/register">Registrarse</a> </p>
  </form>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewLogIn;

  const btnLogIn = divElem.querySelector('#btnLogIn');

  const enter = () => {
    const container = document.querySelector('#container');
    const messageContent = '<h1> se deberia mostrar el perfil</h1>';
    container.innerHTML = messageContent;
  };

  // const inputs = divElem.querySelectorAll('#email, #password');
  // console.log(inputs);

  // function ableButton() {
  //   if (inputs.value === null || inputs.value === '') {
  //     btnLogIn.disabled = true;
  //   }
  //   btnLogIn.disabled = false;
  // }
  // inputs.addEventListener('click', ableButton);

  btnLogIn.addEventListener('click', () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    // console.log(email);
    // console.log(password);
    const inInit = () => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        // Signed in
          console.log('existe usuario');
          const user = userCredential.user;
        // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('no existe usuario');
        });
    };

    const observator = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          // cambio de vista a perfil de usuario (muro,...)
          //enter();
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
