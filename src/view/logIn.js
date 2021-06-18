import { signInFunction, signInGoogle } from '../controller-function/auth-logIn.js';

export default () => {
  const viewLogIn = `
  <section id="viewLog">
    <section class="messageLogIn">
      <h2 id="textLogIn">Bienvenidx a la comunidad de muralistas independientes más increíble del mundo</h2>
      <img src="https://user-images.githubusercontent.com/77282012/118579586-fa091580-b753-11eb-9213-69ada53be066.png" class="image">
    </section>
    <form id="frmLogIn">
      <h1>MiurArt</h1>
      <p id="errorMessage"></p>
      <input class="inputText" id="email" type="email" name="email" placeholder="Correo electrónico">
      <span id="alertEmail"></span>
      <input class="inputText" id="password" type="password" name="password" minlength="six" placeholder="Contraseña">
      <span id="alertPassword"></span>
      <button id="btnLogIn" disabled= true >Ingresar</button>
      <section>
        <p>¿No recuerdas tu contraseña?<a href="#/recoverPassword"> Ingresa aquí</a> <p>
      </section>
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

  // const formulario = document.querySelector('#frmLogIN');
  const btnLogIn = divElem.querySelector('#btnLogIn');
  const inputText = divElem.querySelectorAll('.inputText');
  const email = divElem.querySelector('#email');
  const password = divElem.querySelector('#password');
  const alertEmail = divElem.querySelector('#alertEmail');
  const alertPassword = divElem.querySelector('#alertPassword');
  const emailRegex = /^(([^<>()\\[\]\\.,;:\s@”]+(\.[^<>()\\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  const validateForm = (e) => {
    switch (e.target.name) {
      case 'email':
        if (emailRegex.test(e.target.value)) {
          // console.log(e);
          alertEmail.innerHTML = '';
          // btnLogIn.disabled = false;
          alertEmail.classList.remove('errorInput');
        } else {
          alertEmail.innerHTML = '⚠️ Debe ser un email';
          btnLogIn.disabled = true;
          alertEmail.classList.add('errorInput');
        }
        break;

      case 'password':
        if (e.target.value.length > 6) {
          alertPassword.innerHTML = '';
          alertPassword.classList.remove('errorInput');
        } else {
          alertPassword.innerHTML = '⚠️ Contraseña debe ser mayor a 6 caracteres';
          alertPassword.classList.add('errorInput');
        }
        break;

      default:
    }
  };

  // FUNCION PARA HABILITAR BOTON
  const ableButton = () => {
    if (password.value.length > 6 && emailRegex.test(email.value)) {
      btnLogIn.disabled = false;
    } else {
      btnLogIn.disabled = true;
    }
  };

  inputText.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('click', validateForm);
    input.addEventListener('blur', validateForm);
    input.addEventListener('keyup', ableButton);
    input.addEventListener('blur', ableButton);
  });

  btnLogIn.addEventListener('click', (event) => {
    event.preventDefault();
    // verificar user.emailvalidated true para que entre a home
    const errorMessage = document.querySelector('#errorMessage');
    signInFunction(email.value, password.value)
      .catch((error) => {
        errorMessage.innerHTML = error.message;
      });

    const observator = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user.emailVerified) {
          window.location.hash = '#/home';
        } else {
          errorMessage.innerHTML = 'la cuenta no esta verificada, por favor verifiquela';
        }
      });
    };
    // inInit();
    observator();
  });

  const btnFacebook = divElem.querySelector('#authFb');
  btnFacebook.addEventListener('click', () => {
    // console.log('Debería ingresarse via facebook');
  });

  const btnGoogle = divElem.querySelector('#authGoogle');
  btnGoogle.addEventListener('click', () => {
    signInGoogle()
      .then(() => {
        // console.log(result);
        window.location.hash = '#/home';
      });
    //      .catch((error) => {
    //        console.log(error);
    //      });
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user.emailVerified) {
      window.location.hash = '#/home';
    } else {
      window.location.hash = '';
    }
  });

  return divElem;
};
