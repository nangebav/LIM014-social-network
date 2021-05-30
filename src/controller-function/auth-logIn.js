// LOGIN
// Función para iniciar Sesión con mi correo electronico
export const signInFunction = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

// Función para iniciar Sesión con mi facebook
// export const signInFacebook = () => {
//  const facebookProvider = new firebase.auth.FacebookAuthProvider();
//  return firebase.auth().signInWithPopup(facebookProvider);
// };

// Función para iniciar Sesión con mi cuenta de google
export const signInGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider);
};

// SIGN OUT
// Función para salir de mi sesion
export const signOut = () => firebase.auth().signOut();
