/* eslint-disable no-console */
// Función para iniciar Sesión con mi correo electronico
export const singInFunction = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      console.log('existe usuario');
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('no existe usuario');
      console.log(errorCode);
      console.log(errorMessage);
    });
};

// Función para iniciar Sesión con mi facebook
// Función para iniciar Sesión con mi cuenta de google
