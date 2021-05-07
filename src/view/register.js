export default () => {
  const viewRegister = ` 
  <h1>MiurArt</h1>
  <input id="name" placeholder="nombre">
  <input id="lastname" placeholder="apellido">
  <input id="userName" placeholder="nombre de usuario">
  <input id="emailR" placeholder="correo electrónico">
  <input id="passwordR" type="password" placeholder="contraseña">
  <label><input id="agreements" type="checkbox">Acepto términos y condiciones y Política de privacidad de datos  </label>
  <input id="btnRegister" type="button" value="Registrar">
  <a>Para registrarse con google</a>
  <label>imagen de fb</label>
   `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewRegister;
  return divElement;
};
