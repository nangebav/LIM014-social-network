// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();
document.getElementById('btnRegister').addEventListener('click', register);

function register(){
    var name = document.querySelector("#name").value;
    console.log(name);
}
