// Este es el punto de entrada de tu aplicacion

import { changeView } from './view_controller/index';

// myFunction();
// document.getElementById('btnRegister').addEventListener('click', register);

// function register(){
//    var name = document.querySelector("#name").value;
//    console.log(name);
// }

const init = () => {
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
