// console.log('esto es el home');

export default () => {
  const viewHome = `
    <section id="viewHome">
    <h1> Bienvenido al Home
    <button id="btnSalir">Salir</button>
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
