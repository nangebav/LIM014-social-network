import { signInFunction, signInGoogle } from '../controller-function/auth-logIn.js';

export default () => {
  const viewLogIn = `
  <section id="viewLog">
    <section id="messageLogIn">
      <h2 id="textLogIn">Bienvenidx a la comunidad de muralistas independientes más increíble del mundo</h2>
      <img src="https://user-images.githubusercontent.com/77282012/118408278-84655280-b64a-11eb-927f-3b8056af3255.png" class="image">
      </section>
    <form id="frmLogIn">
      <h1>MiurArt</h1>
      <p id="errorMessage"></p>
      <input class="inputText" id="email" type="email" placeholder="Correo electrónico">
      <span id="alertEmail"></span>
      <input class="inputText" id="password" type="password" placeholder="Contraseña">
      <span id="alertPassword"></span>
      <button id="btnLogIn">Ingresar</button> 
      <a class="o">------------------ o ------------------</a>
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

  const inputText = divElem.querySelector('.inputText');
  const alertEmail = divElem.querySelector('#alertEmail');
  const alertPassword = divElem.querySelector('#alertPassword');
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  inputText.addEventListener('keyup', () => {
    const emailvalue = divElem.querySelector('#email').value;
    const passwordValue = divElem.querySelector('#password').value;
    if (emailRegex.test(emailvalue) === false) {
      alertEmail.innerHTML = '⚠️ Debe ingresar su email';
      alertEmail.classList.add('errorInput');
    } if (passwordValue.length < 6) {
      alertPassword.innerHTML = '⚠️ Debe ingresar contraseña';
      alertPassword.classList.add('errorInput');
    } if (emailRegex.test(emailvalue) === true) {
      alertEmail.innerHTML = '';
    } if (passwordValue.length > 6) {
      alertPassword.innerHTML = '';
    }
  });

  // btnLogIn.disabled = true;
  btnLogIn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // verificar user.emailvalidated true para que entre a home
    const errorMessage = document.querySelector('#errorMessage');
    signInFunction(email, password)
      .catch((error) => {
        errorMessage.innerHTML = error.message;
      });

    const observator = () => {
      if (email && password) {
        firebase.auth().onAuthStateChanged((user) => {
          if (user.emailVerified) {
            console.log('entra al home');
            console.log(window.location);
            window.location.hash = '#/home';
          } else {
            console.log('la cuenta no esta verificada');
          }
        });
      } else {
        alert('llene los campos de login');
      }
    };
    // inInit();
    observator();
  });

  const btnFacebook = divElem.querySelector('#authFb');
  btnFacebook.addEventListener('click', () => {
    console.log('Debería ingresarse via facebook');
  });

  const btnGoogle = divElem.querySelector('#authGoogle');
  btnGoogle.addEventListener('click', () => {
    signInGoogle()
      .then((result) => {
        console.log(result);
        window.location.hash = '#/home';
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return divElem;
};
