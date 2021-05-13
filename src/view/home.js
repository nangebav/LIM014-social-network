// console.log('esto es el home');

export default () => {
  const viewHome = `
    <section id="viewHome">
    <h1> Bienvenido al Home
    </section>
    `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;

  return divElem;
};
