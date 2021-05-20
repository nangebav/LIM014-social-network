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
              </section>
              <section id="taksContainer"></section>
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
        window.location.hash = '';
      })
      .catch((error) => {
        console.log(error);
      });
  });
  // const username = divElem.querySelector('#username');

  const taksContainer = divElem.querySelector('#taksContainer');

  // Vista Publicaciones

  const setupPosts = (data) => {
    if (data.length) {
      // console.log(data);
      let html = '';
      data.forEach((doc) => {
        const post = doc.data();
        const li = `<div class="card card-body mt-2 border-primary">
      <h3 class="h5">${post.title}</h3>
      <p>${post.description}</p>
      </div>`;
        html += li;
      });
      taksContainer.innerHTML = html;
    } else {
      taksContainer.innerHTML = '<h4 class="text-white">Login to See Posts</h4>';
    }
  };

  // Mostrar posts
  const post = () => firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firebase.firestore().collection('task')
        .get()
        .then((snapshot) => {
          setupPosts(snapshot.docs);
        });
    } else {
      window.location.hash = '';
    }
  });

  post();

  // Guardar notas en firebase
  const saveTask = (title, description) => firebase.firestore().collection('task').doc().set({
    title,
    description,
  });

  const taskForm = divElem.querySelector('#taks-form');

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = taskForm['task-title'];
    const description = taskForm['task-description'];

    saveTask(title.value, description.value);
    taskForm.reset();
    title.focus();

    // Mostrar posts
    post();
  });

  return divElem;
};
