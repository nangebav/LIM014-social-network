/* eslint-disable no-console */
import { registrationFunction, updateProfile } from '../controller-function/auth-register.js';

export default () => {
  const viewRegister = `
    <section id="viewRegistration">
      <section id="messageRegister">
        <h2>Únete a la comunidad de muralistas independientes más increíble del mundo </h2>
      </section>
      <form id="registration">
        <h1>MiurArt</h1>
        <h3>¡Regístrate aquí!</h3>
        <p> Muestra, promueve y comparte tu trabajo </p>
          <input id="name" type="text" placeholder="Nombre">
          <input id="lastname" type="text" placeholder="Apellido">
          <input id="emailR" type="email" placeholder="Correo electrónico">
          <input id="passwordR" type="password" placeholder="Contraseña">
          <label id="politics"><input id="agreements" type="checkbox">Acepto términos y condiciones y Política de privacidad de datos  </label>
          <input id="btnRegister" type="button" value="Registrar">
          <a class="o">------------------ O ------------------</a>
          <section>
            <img id="auth-fb" alt="ico-fb" class="icoFb" src="https://user-images.githubusercontent.com/77282012/117555345-068ac100-b024-11eb-8c0f-811f51c99abb.png">
            <img id="auth-google" alt="ico-google" class="icoGoogle" src="https://user-images.githubusercontent.com/77282012/117885191-282db780-b273-11eb-8899-ee6685fb9cf2.png">
          </section>
          <p>¿Ya tienes una cuenta? <a href="#/">Inicia tu sesión</a> </p>
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
    // console.log(name);
    // console.log(lastname);
    // console.log(email);
    // console.log(password);

    // funcion para actualizar usuario

    // invocar funcion
    // if(isPasswordCorrect){firebase.auth} else {log error}
    registrationFunction(email, password).then(() => {
      updateProfile(name, lastname);
    });

   

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
