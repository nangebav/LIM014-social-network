// console.log('esto es el home');
import { signOut } from '../controller-function/auth-logIn.js';

export default () => {
  const viewHome = `
    <header>
      <h1 class="h1-style"><img src="https://user-images.githubusercontent.com/77282012/118549107-a4ffdc00-b720-11eb-9040-9de50dfb9369.png" alt="app logo">MIURART</h1>
      <button id="btnSalir">Salir</button>
    </header>
    <section id="viewHome">
      <h1> Bienvenido al Home </h1>
      <section>
      <ul>
        <h2 id="username"></h2>
        <p> [Aquí se debería poner la descripción del usuario]</p>
      </ul>
    </section>
    </section>
    `;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;

  const btnSalir = divElem.querySelector('#btnSalir');
  btnSalir.addEventListener('click', () => {
    signOut()
      .then(() => {
      //  console.log('saliste de sesión');
        window.location.hash = '';
      });
    // .catch((error) => {
    //  console.log(error);
    // });
  });
  const username = divElem.querySelector('#username');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      username.innerHTML = user.displayName;
      console.log('Estas logueado');
    } else {
      window.location.hash = '';
      console.log('Tu no estas logueado');
    }
  });

  return divElem;
};
