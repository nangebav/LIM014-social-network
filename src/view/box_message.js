import { signOut } from '../controller-function/auth-logIn.js';

export default () => {
  const viewMeesage = `
    <section class="messageValid">
      <img class="exitMessage" id="exitMessage" src="chrome://global/skin/icons/close.svg">
      <div>
        <div class="message">
        <img class="imageWarning" src="https://image.flaticon.com/icons/png/512/95/95458.png" alt="alert">
        <p>¿Seguro(a) que deseas salir de tu sesión?</p>
        </div>
          <div>
            <button class="cancel" id="cancel"> cancelar </button>      
            <button class="confirm" id="confirm"> salir </button>    
          </div>
      </div>
    </section>
    `;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewMeesage;

  // FUNCION PARA CERRAR SESION
  const btnConfirm = divElem.querySelector('#confirm');
  const btnCancel = divElem.querySelector('#cancel');
  const exitMessage = divElem.querySelector('#exitMessage');

  btnConfirm.addEventListener('click', () => {
    signOut()
      .then(() => {
        window.location.hash = '';
        document.querySelector('#contenedorMessage').innerHTML = '';
      });
  });

  exitMessage.addEventListener('click', () => {
    document.querySelector('#contenedorMessage').innerHTML = '';
  });

  btnCancel.addEventListener('click', () => {
    document.querySelector('#contenedorMessage').innerHTML = '';
  });

  return divElem;
};
