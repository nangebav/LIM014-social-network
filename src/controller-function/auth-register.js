/* eslint-disable no-console */
// Función para poder Registrar una Cuenta en MiuArt
const sendEmail = () => {
  const user = firebase.auth().currentUser;

  user.sendEmailVerification().then(() => {
  // Email sent.
  }).catch((error) => {
  // An error happened.
    console.log(error);
    console.log('no se envio el correo');
  });
};

export const registrationFunction = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
      sendEmail();
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
