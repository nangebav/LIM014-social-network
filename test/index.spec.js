// importamos la funcion que vamos a testear
import { signInFunction, signInGoogle, signOut } from '../src/controller-function/auth-logIn.js';

import { sendEmail, registrationFunction, updateProfile } from '../src/controller-function/auth-register.js';
// import { deletePost } from '../src/controller-function/firesotre.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mockfirestore = new firebasemock.MockFirestore();
const mockstorage = new firebasemock.MockStorage();
const mocksdk = new firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  null,
  // use null if your code does not use AUTHENTICATION
  () => mockauth,
  // use null if your code does not use FIRESTORE
  () => mockfirestore,
  // use null if your code does not use STORAGE
  () => mockstorage,
  // use null if your code does not use MESSAGING
  null,
);

mockauth.autoFlush(); //
global.firebase = mocksdk;

// Firebase Auth
// Funciones del LogIn
describe('signInFunction', () => {
  it('Debería poder iniciar sesión con email: lemeca5029@o3live.com y password:abcdefgh', () => {
    signInFunction('lemeca5029@o3live.com', 'abcdefgh')
      .then((user) => {
        expect(user.email).toBe('lemeca5029@o3live.com');
      });
  });
});

describe('signInGoogle', () => {
  it('debería poder iniciar sesión con mi cuenta de google', () => {
    signInGoogle()
      .then((user) => expect(user.email).toBe('lemeca5029@o3live.com'));
  });
});

// Funciones del Register
describe('registrationFunction', () => {
  it('debería poder registrarme con email: lemeca5029@o3live.com y password:abcdefgh', () => {
    registrationFunction('lemeca5029@o3live.com', 'abcdefgh')
      .then((user) => expect(user.email).toBe('lemeca5029@o3live.com'));
  });
});

describe('sendEmail', () => {
  it('debería ser una función', () => {
    expect(typeof sendEmail).toBe('function');
  });
});

// Funcion para la creación de el nombre y apellido
describe('signOut', () => {
  it('debería poder salir de mi sesión', () => {
    signOut()
      .then((user) => expect(user).toBe(null));
  });
});

// Funcion para guardar el nombre del usuario
describe('updateProfile', () => {
  it('debería poder guardar mi nombre y apellido', () => {
    expect(updateProfile('Sutana', 'Fulanita')).toBe();
  });
});

// Firebase Firestore

// Función para eliminar comentarios
// describe('deletePost', () => {
//   it('debería eliminar el post que se hizo', () => {
//     expect(deletePost('tWJz2EbWDSBSjEX382zo')).toBe({ id: 9 });
//   });
// });

// Firebase Storage
