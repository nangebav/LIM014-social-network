import { deletePost } from '../controller-function/post-firestore.js';

export default () => {
  const messageDeleted = `
  <section class="messageValid">
    <div class="message">
    <img class="exitMessage" id="exitMessage" src="chrome://global/skin/icons/close.svg">
    <img class="imageWarning" src="https://image.flaticon.com/icons/png/512/95/95458.png" alt="alert">
        <h2>¿Seguro(a) que deseas eliminar la publicación?<h2>
        <p>Esta acción no puedrá revertirse.</p>
        <div class="confirmUserPost">
          <button class="cancel" id="cancelDelete"> cancelar </button>      
          <button class="confirm" id="confirmDelete"> Eliminar </button>    
        </div>
    </div>
  </section>
  `;
  const divElem = document.createElement('div');
  divElem.innerHTML = messageDeleted;

  const btnConfirmDelete = divElem.querySelector('#confirmDelete');
  const btnCancelDelete = divElem.querySelector('#cancelDelete');
  const exitMessage = divElem.querySelector('#exitMessage');

  btnConfirmDelete.addEventListener('click', () => {
    deletePost(e.target.dataset.id);
    document.querySelector('#contenedorMessage').innerHTML = '';
  });
  btnCancelDelete.addEventListener('click', () => {
    document.querySelector('#contenedorMessage').innerHTML = '';
  });
  exitMessage.addEventListener('click', () => {
    document.querySelector('#contenedorMessage').innerHTML = '';
  });

  return divElem;
};
