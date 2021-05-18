// console.log('esto es el home');
import { signOut } from '../controller-function/auth-logIn.js';

export default () => {
  const viewHome = `
    <header>
      <h1 class="h1-style"><img src="https://user-images.githubusercontent.com/77282012/118549107-a4ffdc00-b720-11eb-9040-9de50dfb9369.png" alt="app logo">MIURART</h1>
      <button id="btnSalir">Salir</button>
    </header>
        <section>
          <section class="row">
            <section class="col-md-4">
              <section class="card">
                  <form id="taks-form">
                    <section class="form-group">
                      <input type="text" id="task-title" class="form-control" placeholder="título">
                    </section>
                    <section class="form-group">
                        <textarea id="task-description" rows="3" class="form-control" placeholder="Descripción"></textarea>
                    </section>
                    <button class="btn btn-primary" id="btnPublicar">
                      Guardar
                    </button>
                  </form>
                  <section id="taksContainer"></section>
              </section>
            </section>
          </section>
      </section>
    </section>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;

  const btnSalir = divElem.querySelector('#btnSalir');
  btnSalir.addEventListener('click', () => {
    signOut()
      .then(() => {
      //  console.log('saliste de sesión');
        window.location.hash = '';
      });
    // .catch((error) => {
    //  console.log(error);
    // });
  });
  const username = divElem.querySelector('#username');
  const userDescription = divElem.querySelector('#userDescription');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // username.innerHTML = user.displayName;
      userDescription.innerHTML = 'usuario de MiurArt';
      console.log('Estas logueado');
    } else {
      window.location.hash = '';
      console.log('Tu no estas logueado');
    }
  });

  const saveTask = (title, description) => firebase.firestore().collection('task').doc().set({
    title,
    description,
  });

  const getTaks = () => firebase.firestore().collection('task').doc().get();
  const taksContainer = divElem.querySelector('#taksContainer');

  window.addEventListener('DOMContentLoaded', async () => {
    const querySnaptshot = await getTaks();
    querySnaptshot.forEach((doc) => {
      console.log(doc.data());
      taksContainer.innerHTML += `
      <section class="card card-body">
      <h3>${doc.data().title}</h3>
      </section>
      `;
    });
  });

  const taskForm = divElem.querySelector('#taks-form');

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = taskForm['task-title'];
    const description = taskForm['task-description'];

    saveTask(title.value, description.value);
    taskForm.reset();
    title.focus();
  });
  return divElem;
};
