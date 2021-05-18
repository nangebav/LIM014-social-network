// importamos la funcion que vamos a testear
import { signInFunction, signInGoogle } from '../src/controller-function/auth-logIn.js';
import { sendEmail, registrationFunction } from '../src/controller-function/auth-register.js';

describe('signInFunction', () => {
  it('Debería poder iniciar sesión con email: lemeca5029@o3live.com y password:abcdefgh', () => {
    expect(signInFunction('lemeca5029@o3live.com', 'abcdefgh'))
      .then((user) => {
        expect(user.email).toBe('lemeca5029@o3live.com');
      });
  });

  it('No debería poder iniciar sesión con email: lemeca5029@o3live.com y password:abcdefgh', () => {
    expect(signInFunction('lemeca5029@o3live.com', 'abcdefgh'))
      .then((user) => {
        expect(user.email).toBe('lemeca5029@o3live.com');
      });
  });
});

describe('signInGoogle', () => {
  it('debería aparecerme una pestaña emegente para iniciar mi sesión con mi cuenta google', () => {
    expect(signInGoogle()).toBe(true);
  });
});

describe('registrationFunction', () => {
  it('debería poder registrarme con email: lemeca5029@o3live.com y password:abcdefgh', () => {
    expect(registrationFunction('lemeca5029@o3live.com', 'abcdefgh')).toBe(true);
  });
});

describe('sendEmail', () => {
  it('debería enviarme un mensaje a mi correo paraverificarmi cuenta ', () => {
    expect(sendEmail('lemeca5029@o3live.com')).toBe(true);
  });
});
