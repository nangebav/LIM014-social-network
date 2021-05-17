/* eslint-disable no-console */
// ---------------------------------------------LOGIN----------------------------------------
// Función para iniciar Sesión con mi correo electronico

export const signInFunction = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

// Función para iniciar Sesión con mi facebook

// Función para iniciar Sesión con mi cuenta de google
