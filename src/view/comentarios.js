import { deleteComment, editComment } from '../controller-function/post-firestore.js';

export const commentView = (collection, post, user, contenedor) => {
  collection.forEach((com) => {
    const commentPost = com.data();
    commentPost.id = com.id;
    const viewComment = document.createElement('div');
    viewComment.innerHTML = `
    <div class="messageValid"></div>
    <div class="boxComment">
    ${(commentPost.userId === user.uid) ? `
    <div class="btns-edit-delete" name="${commentPost.userId}" data-id-post="${post.id}">
      <img class="btn-deleteComment" data-id="${commentPost.id}" src="https://user-images.githubusercontent.com/77282012/120018025-389c9c80-bfac-11eb-9d7d-0a68441eca20.png">
    </div>` : ''}
    <section class="commentPostUser">
      <img class="commentUserImage" src="${commentPost.userPhoto}">
      <section>
        <h5>${commentPost.userName}</h5>
        <h6>${commentPost.date}</h6>
      </section>
    </section>
    <p>${commentPost.comment}</p>
    </div>
    `;
    contenedor.appendChild(viewComment);

    if (commentPost.userId === user.uid) {
      editComment(post.id, commentPost.id)
        .update({
          userName: `${user.displayName}`,
          userPhoto: `${user.photoURL}`,
        });
    }

    const btnsDelete = document.querySelectorAll('img.btn-deleteComment');
    // const messageValid = document.querySelector('.messageValid')
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        deleteComment(post.id, e.target.dataset.id);
      });
    });
  });
};
