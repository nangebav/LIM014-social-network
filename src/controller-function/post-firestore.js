/* eslint-disable max-len */
// const collection = firebase.firestore().collection('posts');

export const deletePost = (id) => firebase.firestore().collection('posts').doc(id).delete();

// export const deletePostAndComments = (id) => firebase.firestore().collection('posts').doc(id).collection('comment')
//  .delete();
// export const editPost = (id) => firebase.firestore().collection('posts').doc(id).onSnapshot((data) => {
//   console.log(data.docs);
// });

// ONSTATECHANGE
// export const onAuthSChange = (u) => firebase.auth().onAuthStateChanged((user) =>)

// CURRENT USER
export const currentUser = () => firebase.auth().currentUser;

export const editPost = (id) => firebase.firestore().collection('posts').doc(id);
// .update({
//   description: 'prueba con update 2',
// });

// ---- actualizar likes
export const updateLikes = (postid, likes) => firebase.firestore().collection('posts').doc(postid).update({ likes });

// ENVIA EL CONTENIDO DEL POST A FIREBASE
export const savePost = (name, description, date, userId, userPhoto, likes) => firebase.firestore().collection('posts').add({
  name,
  description,
  date,
  userId,
  userPhoto,
  likes,
});

// FUNCION PARA TRAER DE FIRESTORE LOS DOC CON LA INFO DE POSTS

// export const collectionData = (post) => firebase.firestore().collection(post);

// --------HACER UPDATE-------

export const updatePost = (name, description, date, userId, userPhoto, likes, id) => firebase.firestore().collection('posts').doc(id).update({
  name,
  description,
  date,
  userId,
  userPhoto,
  likes,
});

// ------ BASE DE DATOS CLOUD DE COMENTARIO---------
export const addComment = (UserId, idPost, Comment, userName) => {
  const db = firebase.firestore();
  return db.collection('posts').doc(idPost).collection('comment').add({
    userId: UserId,
    idPost,
    date: new Date().toLocaleString('en-ES'),
    comment: Comment,
    userName,
  });
};

// ---------FUNCIÓN PARA TRAER LA SUB COLECCIÓN DE MI COLECCIÓN

export const getComment = (idContent) => firebase.firestore().collection('posts').doc(idContent).collection('comment')
  .orderBy('date', 'asc');
