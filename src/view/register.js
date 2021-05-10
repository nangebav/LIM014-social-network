/* eslint-disable no-console */
import { registrationFunction } from '../controller-function/auth-register.js';

export default () => {
  const viewRegister = ` 
  <div id="registration">
  <h1>MiurArt</h1>
  <h3>¡Regístrese aquí!</h3>
  <p> Muestre, promueva y comparta su trabajo </p>
    <input id="name" placeholder="Nombre">
    <input id="lastname" placeholder="Apellido">
    <input id="userName" placeholder="Nombre de usuario">
    <input id="emailR" placeholder="Correo electrónico">
    <input id="passwordR" type="password" placeholder="Contraseña">
    <label><input id="agreements" type="checkbox">Acepto términos y condiciones y Política de privacidad de datos  </label>
    <input id="btnRegister" type="button" value="Registrar">
    <a>Para registrarse con google</a>
    <label>imagen de fb</label>
    <section>
      <img id="auth-fb" alt="ico-fb" class="ico-fb" src="https://user-images.githubusercontent.com/77282012/117555345-068ac100-b024-11eb-8c0f-811f51c99abb.png">
      <img id="auth-google" alt="ico-google" class="ico-google" src="https://user-images.githubusercontent.com/77282012/117555346-07235780-b024-11eb-8bb0-1a93c7aa1a1f.png">
    </section>
    <p>¿Ya tienes una cuenta? <a href="#/">Inicia tu sesión</a> </p>
  </div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewRegister;

  const btnRegistration = divElem.querySelector('#btnRegister');
  btnRegistration.addEventListener('click', () => {
    // const userName = document.querySelector('#userName').value;
    // const name = document.querySelector('#name').value;
    // const lastname = document.querySelector('#lastname').value;
    const email = document.querySelector('#emailR').value;
    const password = document.querySelector('#passwordR').value;
    // console.log(name);
    // console.log(lastname);
    // console.log(email);
    // console.log(password);

    // funcion para actualizar usuario

    // invocar funcion
    // if(isPasswordCorrect){firebase.auth} else {log error}
    registrationFunction(email, password);

    // const user = firebase.auth().currentUser;
    // name, lastname, email,
    // var photoUrl, uid, emailVerified;

    // if (user != null) {
    //   name = user.displayName;
    //   email = user.email;
    //   photoUrl = user.photoURL;
    //   emailVerified = user.emailVerified;
    //   uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    // }
  });

  return divElem;
};
