export default () => {
  const viewLogIn = `
    <form id="iniciarSesion">
    <h1>MiurArt</h1>
    <input id="email" placeholder="correo electrónico">
    <input id="password" placeholder="contraseña">
    <input id="btnLogIn" type="submit" value="Ingresar">
    <a>Para ingresar con google</a>
    <label>imagen de fb</label>
    </form>
 `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewLogIn;
  return divElement;
};
