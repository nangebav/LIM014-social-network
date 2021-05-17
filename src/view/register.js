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
        <input id="name" type="text" placeholder="Nombre">
        <input id="lastname" type="text" placeholder="Apellido">
        <input id="emailR" type="email" placeholder="Correo electrónico">
        <input id="passwordR" type="password" placeholder="Contraseña">
        <label id="politics"><input id="agreements" type="checkbox">Acepto términos y condiciones y Política de privacidad de datos  </label>
        <input id="btnRegister" type="button" value="Registrar">
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

  const btnRegistration = divElem.querySelector('#btnRegister');
  btnRegistration.addEventListener('click', () => {
    // const userName = document.querySelector('#userName').value;
    const name = document.querySelector('#name').value;
    const lastname = document.querySelector('#lastname').value;
    const email = document.querySelector('#emailR').value;
    const password = document.querySelector('#passwordR').value;
    const errorMessageR = document.querySelector('#errorMessageR');
    // console.log(name);
    // console.log(lastname);
    // console.log(email);
    // console.log(password);

    // funcion para actualizar usuario

    // invocar funcion
    // if(isPasswordCorrect){firebase.auth} else {log error}
    registrationFunction(email, password).then(() => {
      if (email && lastname && name && password) {
        updateProfile(name, lastname);
        alert('Por favor verifica tu cuenta de correo electrónico');
      } else {
        errorMessageR.innerHTML = 'llene todos los campos';
      }
    });
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
