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
                  <form id="post-form">
                    <section class="user-identifier">
                      <img id="post-userpic">
                      <textarea id="post-username"rows="1" name="post-form" class="form-control"></textarea>
                    </section>
                    <section class="body-form">
                        <textarea id="post-description" name="post-form" rows="3" class="form-control" placeholder="Descripción"></textarea>
                    </section>
                    <button id="btnPublicar">
                      Publicar
                    </button>
                  </form>
              </section>
              <section id="PostContainer"></section>
            </section>
          </section>
      </section>
    </section>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;

  // CONSTANTES DE ELEMENTOS HTML
  const taskForm = divElem.querySelector('#post-form');
  const btnSalir = divElem.querySelector('#btnSalir');
  const postContainer = divElem.querySelector('#PostContainer');
  const username = divElem.querySelector('#post-username');

  // FUNCION PARA OBTENER EL NOMBRE DEL USUARIO
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      username.innerHTML = user.displayName;
      // console.log('Estas logueado');
    }
  });

  const deletePost = (id) => firebase.firestore().collection('posts').doc(id).delete();

  const editPost = (id) => firebase.firestore().collection('posts').doc(id);
  // FUNCION PARA CREAR HTML PARA MOSTRAR LOS POSTS EN PANTALLA
  const setupPosts = (data) => {
    if (data.length) {
      postContainer.innerHTML = '';
      data.forEach((doc) => {
        const post = doc.data();
        post.id = doc.id;
        postContainer.innerHTML += `<div class="card card-body mt-2 border-primary">
      <h3 class="h5">${post.name}</h3>
      <p>${post.description}</p>
      <div>
        <button class="btn-delete" data-id="${post.id}">Eliminar</button>
        <button class="btn-edit" data-id="${post.id}">Editar</button>
      </div>`;

        const btnsDelete = document.querySelectorAll('button.btn-delete');
        btnsDelete.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            deletePost(e.target.dataset.id);
          });
        });

        const btnsEdit = document.querySelectorAll('button.btn-edit');
        btnsEdit.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            editPost(e.target.dataset.id);
          });
        });
      });
    } else {
      postContainer.innerHTML = '<h4 class="text-white">Login to See Posts</h4>';
    }
  };

  // FUNCION PARA TRAER DE FIRESTORE LOS DOC CON LA INFO DE POSTS
  const post = () => firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firebase.firestore().collection('posts')
        .onSnapshot((data) => {
          setupPosts(data.docs);
        });
    } else {
      window.location.hash = '';
    }
  });

  post();

  // ENVIA EL CONTENIDO DEL POST A FIREBASE
  const saveTask = (name, description) => firebase.firestore().collection('posts').doc().set({
    name,
    description,
  });

  // EVENTO PARA ENVIAR DATOS DEL POST A FIREBASE
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameInside = taskForm['post-username'];
    const description = taskForm['post-description'];
    saveTask(usernameInside.value, description.value);
    taskForm.reset();
    description.focus();
  });

  // FUNCION PARA CERRAR SESION
  btnSalir.addEventListener('click', () => {
    signOut()
      .then(() => {
        window.location.hash = '';
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return divElem;
};
