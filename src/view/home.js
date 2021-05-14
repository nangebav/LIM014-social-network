// console.log('esto es el home');

export default () => {
  const viewHome = `
  <header>
  <h1> Mi
  <button id="btnSalir">Salir</button>
  </header>
    <section id="viewHome">
    <h1> Bienvenido al Home

    </section>
    `;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;

  const btnSalir = divElem.querySelector('#btnSalir');
  btnSalir.addEventListener('click', () => {
    firebase.auth().signOut()
      .then(() => {
        console.log('saliste de sesión');
        window.location.hash = '';
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return divElem;
};
