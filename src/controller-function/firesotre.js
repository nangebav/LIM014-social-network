export const deletePost = (id) => firebase.firestore().collection('posts').doc(id).delete();

export const editPost = (id) => firebase.firestore().collection('posts').doc(id).onSnapshot((data) => {
  console.log(data.docs);
});
