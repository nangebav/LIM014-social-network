// import { deletePost, deletePostAndComments } from '../controller-function/post-firestore.js';
import { commentsDelete, deletePost } from '../controller-function/post-firestore.js';

export default (dataTargetId) => {
  const viewMessageDelete = `
  <div class="contenedor">
    <section class="messageValid">
    <div class="message">
      <img class="exitMessage" id="exitMessage" src="https://user-images.githubusercontent.com/77282012/120414466-ab48a780-c31f-11eb-90c2-964c8493f064.png">
      <img class="imageWarning" src="https://image.flaticon.com/icons/png/512/95/95458.png" alt="alert">
        <h2>¿Seguro(a) que deseas eliminar la publicación?<h2>
        <p>Esta acción no puedrá revertirse.</p>
        <div>
          <button class="cancel" id="cancelDelete"> cancelar </button>      
          <button class="confirm" id="confirmDelete"> Eliminar </button>    
        </div>
      </div>
    </section>
  </div>
    `;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewMessageDelete;

  const btnConfirmDelete = divElem.querySelector('#confirmDelete');
  const btnCancelDelete = divElem.querySelector('#cancelDelete');
  const exitMessage = divElem.querySelector('#exitMessage');

  btnConfirmDelete.addEventListener('click', () => {
    // deletePostAndComments(dataTargetId);
    deletePost(dataTargetId);
    commentsDelete(dataTargetId);
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
