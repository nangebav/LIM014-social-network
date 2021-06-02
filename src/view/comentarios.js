import { addComment } from '../controller-function/post-firestore.js';

export default (user, post) => {
  const viewComment = `
  <form class="commentContainer" data-id="${post.id}">
  <img class="photoComment" src="${user.photoURL}">
  <textarea id="commentDesc" cols="45" data-id="${post.id}" placeholder="Escribe una respuesta"></textarea>
  <button class="commentPost" data-id="${post.id}"><img src="https://user-images.githubusercontent.com/77282012/120261005-a111a500-c25c-11eb-99b7-7f3bd7cc7697.png"></button>
</form>
  `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewComment;

  const commentContainer = divElem.querySelectorAll('.commentContainer');
  console.log(commentContainer);
  commentContainer.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const usernameComment = divElem.querySelector('#commenterName');
      console.log(usernameComment);
      const idPost = form.getAttribute('data-id');
      console.log(idPost);
      const descriptionComment = form.commentDesc;
      addComment(post.userId, idPost, descriptionComment.value, user.displayName);
    });
  });

  return divElem;
};
