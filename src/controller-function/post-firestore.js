/* eslint-disable max-len */
export const deletePost = (id) => firebase.firestore().collection('posts').doc(id).delete();

// export const editPost = (id) => firebase.firestore().collection('posts').doc(id).onSnapshot((data) => {
//   console.log(data.docs);
// });

export const editPost = (id) => firebase.firestore().collection('posts').doc(id);
// .update({
//   description: 'prueba con update 2',
// });

// ------ BASE DE DATOS CLOUD DE COMENTARIO---------
export const addComment = (UserId, idPost, Comment) => {
  const db = firebase.firestore();
  return db.collection('posts').doc(idPost).collection('comment').add({
    userId: UserId,
    date: new Date().toLocaleString('en-ES'),
    comment: Comment,
  });
};
