import {
  editComment,
} from '../controller-function/post-firestore.js';

export const commentView = (collection, post, user, contenedor) => {
  collection.forEach((com) => {
    const commentPost = com.data();
    commentPost.id = com.id;
    const viewComment = document.createElement('div');
    viewComment.innerHTML = `
    <div class="boxComment">
    ${(commentPost.userId === user.uid) ? `
    <div class="btns-edit-delete" name="${commentPost.userId}" data-id-post="${post.id}">
      <img class="btn-edit" data-id="${commentPost.id}" src="https://user-images.githubusercontent.com/77282012/120040454-32b6b380-bfcc-11eb-81cb-96f0e713e84c.png">
      <img class="btn-delete" data-id="${commentPost.id}" src="https://user-images.githubusercontent.com/77282012/120018025-389c9c80-bfac-11eb-9d7d-0a68441eca20.png">
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
  });
};
