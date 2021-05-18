import { signInFunction, signInGoogle } from '../controller-function/auth-logIn.js';

export default () => {
  const viewLogIn = `
  <section id="viewLog">
    <section id="messageLogIn">
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

  const formulario = document.querySelector('#frmLogIN');
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
          //console.log(e);
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
    password.value.length > 6 && emailRegex.test(email.value)
      ? btnLogIn.disabled = false
      : btnLogIn.disabled = true;
  };

  inputText.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('click', validateForm);
    input.addEventListener('blur', validateForm);
    input.addEventListener('keyup', ableButton);
    input.addEventListener('blur', ableButton);
  });

  // inputText.addEventListener('keyup', () => {
  //   if (email.value !== null && password.value !== null) {
  //     btnLogIn.disabled = true;
  //     console.log('entro a disable true');
  //   } else {
  //     btnLogIn.disabled = false;
  //     console.log('entro a disable false');
  //   }
  //   function isFormCompleted() {

  //   }
  // });

  // email.addEventListener('keyup', () => {
  //   // const emailvalue = divElem.querySelector('#email').value;
  //   // const passwordValue = divElem.querySelector('#password').value;
  //   if (email.value === '') {
  //     alertEmail.innerHTML = '⚠️ Debe ingresar su email';
  //     btnLogIn.disabled = true;
  //     alertEmail.classList.add('errorInput');
  //   } else {
  //     btnLogIn.disabled = false;
  //   }
  // });

  // password.addEventListener('keyup', () => {
  //   // const emailvalue = divElem.querySelector('#email').value;
  //   // const passwordValue = divElem.querySelector('#password').value;
  //   if (password.value === '') {
  //     alertPassword.innerHTML = '⚠️ Debe ingresar contraseña';
  //     btnLogIn.disabled = true;
  //     alertPassword.classList.add('errorInput');
  //   } else {
  //     btnLogIn.disabled = false;
  //   }
  // });

  // inputText.addEventListener('keyup', () => {
  //   const emailvalue = divElem.querySelector('#email').value;
  //   const passwordValue = divElem.querySelector('#password').value;
  //   if (emailvalue.value === '' && passwordValue.value === '') {
  //     alertEmail.innerHTML = '⚠️ Debe ingresar su email';
  //     btnLogIn.disabled = true;
  //     alertEmail.classList.add('errorInput');
  //   } else if () {
  //     alertPassword.innerHTML = '⚠️ Debe ingresar contraseña';
  //     btnLogIn.disabled = true;
  //     alertPassword.classList.add('errorInput');
  //   } else {
  //     btnLogIn.disabled = false;
  //   }
  // } else if (!(email === '') && passwordValue.length > 6) {
  //   console.log('ya no deberian salir los mensajes');
  //   alertEmail.innerHTML = '';
  //   alertPassword.innerHTML = '';
  //   btnLogIn.disabled = false;
  // }

  // } if (passwordValue.length < 6) {
  //   alertPassword.innerHTML = '⚠️ Debe ingresar contraseña';
  //   btnLogIn.disabled = true;
  //   alertPassword.classList.add('errorInput');
  // } else if (emailRegex.test(emailvalue) === true && passwordValue.length > 6) {
  //   console.log('ya no deberian salir los mensajes');
  //   alertEmail.innerHTML = '';
  //   alertPassword.innerHTML = '';
  //   btnLogIn.disabled = false;
  // }
  // });

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
