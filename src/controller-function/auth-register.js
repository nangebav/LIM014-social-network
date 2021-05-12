/* eslint-disable no-console */
// Función para poder Registrar una Cuenta en MiuArt
// ---------------------------------------------REGISTER---------------------------------------
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

export const registrationFunction = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password)
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

export const updateProfile = (nombre, apellido) => {
  const user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: `${nombre} ${apellido}`,
    // photoURL: 'https://example.com/jane-q-user/profile.jpg',
  }).then(() => {
  // Update successful.
    console.log('usuario creado');
  }).catch((error) => {
  // An error happened.
    console.log(error);
  });
};
