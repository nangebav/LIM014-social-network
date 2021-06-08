/* eslint-disable no-alert */
/* eslint-disable no-console */
// Función para poder Registrar una Cuenta en MiuArt

// REGISTRARSE
// Función para enviar el mensaje de validación a mi correo

// export const verificationEmail = () => firebase.auth().currentUser.sendEmailVerification();

export const sendEmail = () => {
  const user = firebase.auth().currentUser;

  user.sendEmailVerification();
  // .then(() => {
  //   // Email sent.
  // }).catch((error) => {
  //   // An error happened.
  //   console.log(error);
  //   console.log('no se envio el correo');
  // });
};

// Función para registrar a mi usuario
export const registrationFunction = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => { // (userCredential)
    // Signed in
    sendEmail();
    // console.log(userCredential);
    // var user = userCredential.user;
    // llamar la funcion para settear el usuario
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    alert(`${errorMessage}`);
  });

//
//

export const updateProfile = (nombre, apellido) => {
  const user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: `${nombre} ${apellido}`,
    // photoURL: 'https://example.com/jane-q-user/profile.jpg',
  }).catch((error) => {
    const errorMessage = error.message;
    alert(`${errorMessage}`);
  });
  // .then(() => {
  // // Update successful.
  // //  console.log('usuario creado');
  // }).catch((error) => {
  // // An error happened.
  //   console.log(error);
  // });
};

export const user = () => firebase.auth().currentUser;

export const UserPhoto = (photoURL) => firebase.auth().currentUser
  .updateProfile({ photoURL });
