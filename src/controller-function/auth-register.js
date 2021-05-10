/* eslint-disable no-console */
// Función para poder Registrar una Cuenta en MiuArt
export const registrationFunction = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
      console.log(userCredential);
    // var user = userCredential.user;
    // llamar la funcion para settear el usuario
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};
