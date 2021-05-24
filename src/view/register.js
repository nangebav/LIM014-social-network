/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import { registrationFunction, updateProfile } from '../controller-function/auth-register.js';

export default () => {
  const viewRegister = `
    <section id="viewRegistration">
      <section id="messageRegister">
        <h2>Únete a la comunidad de muralistas independientes más increíble del mundo </h2>
        <img alt="ico-fb" class="image" src="https://user-images.githubusercontent.com/77282012/118408276-83342580-b64a-11eb-831a-15778cddd83b.png">
      </section>
      <form id="frmRegistration">
        <h1>MiurArt</h1>
        <h3>¡Regístrate aquí!</h3>
        <p> Muestra, promueve y comparte tu trabajo </p>
        <input class="inputTextR" id="name" type="text" name="name" placeholder="Nombre">
        <span id="alertName"></span>
        <input class="inputTextR" id="lastname" type="text" name="lastname" placeholder="Apellido">
        <span id="alertLastname"></span>
        <input class="inputTextR" id="emailR" type="email" name="emailR" placeholder="Correo electrónico">
        <span id="alertEmailR"></span>
        <input class="inputTextR" id="passwordR" type="password" name="passwordR" placeholder="Contraseña">
        <span id="alertPasswordR"></span>
        <label id="politics"><input id="agreements" type="checkbox" name="agreements">Acepto términos y condiciones y Política de privacidad de datos  </label>
        <span id="alertCheck"></span>
        <input id="btnRegister" type="button" disabled="true" value="Registrar">
        <a class="o">-------------------- o -------------------</a>
        <section>
          <img id="fbRegistration" alt="ico-fb" class="icoFb" src="https://user-images.githubusercontent.com/77282012/117555345-068ac100-b024-11eb-8c0f-811f51c99abb.png">
          <img id="googleRegistration" alt="ico-google" class="icoGoogle" src="https://user-images.githubusercontent.com/77282012/117885191-282db780-b273-11eb-8899-ee6685fb9cf2.png">
        </section>
        <p id="aRegister">¿Ya tienes una cuenta? <a href="#/">Inicia tu sesión</a> </p>
      </form >
  </section>
`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewRegister;

  const nameIn = divElem.querySelector('#name');
  const lastnameIn = divElem.querySelector('#lastname');
  const emailIn = divElem.querySelector('#emailR');
  const passwordIn = divElem.querySelector('#passwordR');
  const alertName = divElem.querySelector('#alertName');
  const alertLastname = divElem.querySelector('#alertLastname');
  const alertEmailR = divElem.querySelector('#alertEmailR');
  const alertPasswordR = divElem.querySelector('#alertPasswordR');
  const alertCheck = divElem.querySelector('#alertCheck');
  const inputTextR = divElem.querySelectorAll('.inputTextR');
  const terminos = divElem.querySelector('#agreements');
  const btnRegistration = divElem.querySelector('#btnRegister');
  const emailRegex = /^(([^<>()\\[\]\\.,;:\s@”]+(\.[^<>()\\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  const validateFormR = (e) => {
    switch (e.target.name) {
      case 'name':
        if (nameRegex.test(e.target.value)) {
          alertName.innerHTML = '';
          alertName.classList.remove('errorInput');
        } else {
          alertName.innerHTML = '⚠️ Solo letras';
          btnRegistration.disabled = true;
          alertName.classList.add('errorInput');
        }
        break;

      case 'lastname':
        if (nameRegex.test(e.target.value)) {
          alertLastname.innerHTML = '';
          alertLastname.classList.remove('errorInput');
        } else {
          alertLastname.innerHTML = '⚠️ Solo letras';
          btnRegistration.disabled = true;
          alertLastname.classList.add('errorInput');
        }
        break;

      case 'emailR':
        if (emailRegex.test(e.target.value)) {
          // console.log('es un email valido');
          alertEmailR.innerHTML = '';
          alertEmailR.classList.remove('errorInput');
        } else {
          alertEmailR.innerHTML = '⚠️ Debe ser un email';
          btnRegistration.disabled = true;
          alertEmailR.classList.add('errorInput');
          // console.log('no es un email valido');
        }
        break;

      case 'passwordR':
        if (e.target.value.length > 6) {
          // console.log('tiene mas de 6 caract');
          alertPasswordR.innerHTML = '';
          alertPasswordR.classList.remove('errorInput');
        } else {
          alertPasswordR.innerHTML = '⚠️ Contraseña debe ser mayor a 6 caracteres';
          alertPasswordR.classList.add('errorInput');
        }
        break;

      default:
    }
  };

  const ableButton = () => {
    (passwordIn.value.length > 6 && emailRegex.test(emailIn.value) && nameRegex.test(nameIn.value) && nameRegex.test(lastnameIn.value))
      ? btnRegistration.disabled = false
      : btnRegistration.disabled = true;
  };

  inputTextR.forEach((input) => {
    input.addEventListener('keyup', validateFormR);
    // input.addEventListener('click', validateFormR);
    input.addEventListener('blur', validateFormR);
    input.addEventListener('keyup', ableButton);
    input.addEventListener('blur', ableButton);
  });

  btnRegistration.addEventListener('click', () => {
    // const userName = document.querySelector('#userName').value;
    const name = document.querySelector('#name').value;
    const lastname = document.querySelector('#lastname').value;
    const email = document.querySelector('#emailR').value;
    const password = document.querySelector('#passwordR').value;
    const errorMessageR = document.querySelector('#errorMessageR');

    if (terminos.checked) {
      alertCheck.innerHTML = '';
      alertCheck.classList.remove('errorInput');
      registrationFunction(email, password).then(() => {
        if (email && lastname && name && password) {
          updateProfile(name, lastname);
          alert('Por favor verifica tu cuenta de correo electrónico');
        }
      });
    } else {
      alertCheck.innerHTML = '⚠️ Debe marcar la casilla';
      alertCheck.classList.add('errorInput');
    }
  });

  const btnGoogleR = divElem.querySelector('#googleRegistration');
  btnGoogleR.addEventListener('click', () => {
    // console.log('Debería ingresarse via Google');
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
      .then((result) => {
        console.log(result);
        console.log(window.location);
        window.location.hash = '#/home';
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return divElem;
};
