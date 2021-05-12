/* eslint-disable no-console */
import { singInFunction } from '../controller-function/auth-logIn.js';
import { sendEmail } from '../controller-function/auth-register.js';

export default () => {
  const viewLogIn = `
  <section id="viewLog">
    <section id="messageLogIn">
      <img src="https://user-images.githubusercontent.com/77282012/117907841-195bfa80-b29d-11eb-88b3-9d9325fb12e3.jpg" class="image">
      <h2>Bienvenidx a la comunidad de muralistas independientes más increíble del mundo</h2>
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
    // verificar user.emailvalidated true para que entre a home

    singInFunction(email, password);

    const observator = () => {
      firebase.auth().onAuthStateChanged((user) => {
        console.log(user);
        console.log(user.emailVerified);
        if (user.emailVerified === true) {
          // User is signed in.
          // cambio de vista a perfil de usuario (muro,...)
          // enter();
          console.log('entra al home');
          console.log(window.location);
          window.location += 'home';
        } else {
          console.log('la cuenta no esta verificada');
        }
      });
    };
    // inInit();
    observator();
  });

  const btnFacebookR = divElem.querySelector('#authFb');
  btnFacebookR.addEventListener('click', () => {
    console.log('Debería ingresarse via facebook');
  });

  const btnGoogleR = divElem.querySelector('#authGoogle');
  btnGoogleR.addEventListener('click', () => {
    // console.log('Debería ingresarse via Google');
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

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

    observator();
  });
  return divElem;
};
