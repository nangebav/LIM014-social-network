export default () => {
  const viewLogIn = `
  <form id="iniciarSesion">
    <h1>MiurArt</h1>
    <input id="email" placeholder="Correo electrónico">
    <input id="password" type="password" placeholder="Contraseña">
    <input id="btnLogIn" type="submit" value="Ingresar">
    <a>Para ingresar con google</a>
    <label>imagen de fb</label>
    <section>
      <img id="auth-fb" alt="ico-fb" class="ico-fb" src="https://user-images.githubusercontent.com/77282012/117555345-068ac100-b024-11eb-8c0f-811f51c99abb.png">
      <img id="auth-google" alt="ico-google" class="ico-google" src="https://user-images.githubusercontent.com/77282012/117555346-07235780-b024-11eb-8bb0-1a93c7aa1a1f.png">
    </section>
    <p>¿No tienes una cuenta? <a href="#/register">Registrarse</a> </p>
  </form>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewLogIn;

  const btnRegistration = divElem.querySelector('#btnLogIn');
  btnRegistration.addEventListener('click', () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    console.log(email);
    console.log(password);
  });
  return divElem;
};
