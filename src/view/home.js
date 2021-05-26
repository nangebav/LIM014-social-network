/* eslint-disable no-console */
// console.log('esto es el home');
// import { signOut } from '../controller-function/auth-logIn.js';
import { deletePost, editPost } from '../controller-function/firesotre.js';
import MessageSignOut from './box_message.js';

export default () => {
  const viewHome = `
    <header>
      <h1 class="h1-style"><img src="https://user-images.githubusercontent.com/77282012/118549107-a4ffdc00-b720-11eb-9040-9de50dfb9369.png" alt="app logo">MIURART</h1>
      <button id="btnSalir">Salir</button>
    </header>
        <section id="viewHome">
        <section id="contenedorMessage"></section>
        <section id="viewPerfil"></section>
          <section class="row">
            <section class="col-md-4">
              <section class="card">
                  <form id="post-form">
                    <section class="user-identifier">
                      <img id="post-userpic">
                      <p id="post-username" name="post-form" class="form-control"></p>
                    </section>
                    <section class="body-form">
                        <textarea id="post-description" name="post-form" rows="3" class="form-control" placeholder="¿Qué estás pensando?"></textarea>
                        <!-- <a><img id="uploadImage" src="https://user-images.githubusercontent.com/67443691/119537339-8c5e7a00-bd4f-11eb-9508-ace2d40f4695.png"</a> -->
                        <input type="file" value="upload" id="fileButton" />
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
  const viewPerfil = divElem.querySelector('#viewPerfil');
  const btnSelectFile = divElem.querySelector('#fileButton');

  // FUNCION PARA OBTENER EL NOMBRE DEL USUARIO
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      username.innerHTML = user.displayName;
      username.value = `${user.displayName}`;
      viewPerfil.innerHTML = `
      <div class="container">
            <div class="profile-badge">
              <img src="https://dummyimage.com/400x200/e85b27/e85b27">
              <div class="profile-pic">
              </div>
              <div class="user-detail text-center">
                <h3>${user.displayName}</h3>
                <div id="Description">
                  <textarea placeholder="Artista mural"></textarea>
                </div>
                <button class="btn btn-defualt"> Follow </button><br>
              </div>
            </div>
      </div>`;
      // console.log('Estas logueado');
    }
    const profilePhoto = document.querySelector('.profile-pic');
    if (user.photoURL) {
      profilePhoto.innerHTML = `<img src="${user.photoURL}"></img>`;
    } else {
      profilePhoto.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8HtjDCK27FdSoqHRqLGnZ1Fq8yhs7UvvMTKPqMTlvOGdYiHvFzUW07V8gKsM9_fbK8Y&usqp=CAU"></img>';
    }
  });

  // const orderPosts = () => firebase.firestore().collection('posts').orderBy('date', 'desc');

  // FUNCION PARA CREAR HTML PARA MOSTRAR LOS POSTS EN PANTALLA
  const setupPosts = (data) => {
    if (data.length) {
      postContainer.innerHTML = '';
      data.forEach((doc) => {
        const post = doc.data();
        // console.log(username);
        post.id = doc.id;
        postContainer.innerHTML += `
        <div class="card">
          <div>
            <button class="btn-delete" data-id="${post.id}"> 🗑 Eliminar</button>
            <button class="btn-edit" data-id="${post.id}"> 🖉 Editar</button>
          </div>
          <h3 class="h5" name="${post.name}">${post.name}</h3>
          <!-- <p id="descriptionEdit">${post.description}</p> --> 
          <div class="editPublicacion" disabled>
            <p id="descriptionEdit">${post.description}</p>   
          </div>
        </div>
        <div>
          <button id="like"> ❤ </button>
          <button class="comment"> comentarios </button>
        </div>
        <div>
          <form class="commentForm" >
           <div hidden class="commentContainer">
             <h5 id="commenterName">${post.name}</h5>
             <input id="commentDesc" type="text">
             <button id="commentPost">Comentar</button>
             <button id="cancelPost"">cancelar</button>
            </div>
          </form>
        </div>`;

        // const btnComment = postContainer.querySelectorAll('.comment');
        // btnComment.forEach((btn) => {
        //   btn.addEventListener('click', () => {
        //   // console.log('click en comentar');
        //     const formComment = postContainer.querySelectorAll('.commentForm');
        //     formComment.innerHTML += `
        //     <h5 id="commenterName"
        //     <input id="commentDesc" type="text">
        //     <button id="commentPost>Comentar</button>`;
        //   });
        // });

        // const btnComment = postContainer.querySelector('.comment');
        // btnComment.addEventListener('click', () => {
        //   postContainer.querySelector('.commentContainer').classList.toggle('show');
        // });

        const btnsComment = postContainer.querySelectorAll('.comment');
        btnsComment.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            console.log(e.target.parentElement.parentElement.querySelector('.commentForm'));
          });
        });

        // window.addEventListener('click', (e) => {
        //   if (e.target !== btnComment) {
        //     postContainer.querySelector('.commentContainer').classList.remove('show');
        //   }
        // });

        const btnsDelete = document.querySelectorAll('button.btn-delete');
        btnsDelete.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            const mensaje = `
            <section class="messageValid">
              <div class="message">
              <img class="exitMessage" id="exitMessage" src="chrome://global/skin/icons/close.svg">
              <img class="imageWarning" src="https://image.flaticon.com/icons/png/512/95/95458.png" alt="alert">
                  <h2>¿Seguro(a) que deseas eliminar la publicación?<h2>
                  <p>Esta acción no puedrá revertirse.</p>
                  <div class="confirmUserPost">
                    <button class="cancel" id="cancelDelete"> cancelar </button>      
                    <button class="confirm" id="confirmDelete"> Eliminar </button>    
                  </div>
              </div>
            </section>
            `;
            document.querySelector('#contenedorMessage').innerHTML = mensaje;
            const btnConfirmDelete = document.querySelector('#confirmDelete');
            const btnCancelDelete = document.querySelector('#cancelDelete');
            const exitMessage = document.querySelector('#exitMessage');

            btnConfirmDelete.addEventListener('click', () => {
              deletePost(e.target.dataset.id);
              document.querySelector('#contenedorMessage').innerHTML = '';
            });
            btnCancelDelete.addEventListener('click', () => {
              document.querySelector('#contenedorMessage').innerHTML = '';
            });
            exitMessage.addEventListener('click', () => {
              document.querySelector('#contenedorMessage').innerHTML = '';
            });
          });
        });

        const btnsEdit = document.querySelectorAll('button.btn-edit');
        btnsEdit.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            // console.log();
            const editPublicacion = e.target.parentElement.parentElement.querySelector('.editPublicacion');
            editPublicacion.removeAttribute('disabled');
            editPublicacion.innerHTML = `
            <textarea class="note" name="comment">${post.description}</textarea>
            <button class="aceptEdit" >Aceptar</button>`;
            const aceptEdit = editPublicacion.querySelector('.aceptEdit');
            document.querySelector('.note').value = '';
            aceptEdit.addEventListener('click', (eTwo) => {
              const editText = eTwo.target.parentElement.querySelector('.note');
              editPost(e.target.dataset.id)
                .update({
                  description: `${editText.value}`,
                });
              eTwo.target.parentElement.innerHTML = '';
            });

            // const postDescription = docDescription.data();
            // console.log(postDescription);
          });
        });
      });
    } else {
      postContainer.innerHTML = '<h4 class="text-white"></h4>';
    }
  };

  // FUNCION PARA TRAER DE FIRESTORE LOS DOC CON LA INFO DE POSTS
  const post = () => firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firebase.firestore().collection('posts').orderBy('date', 'desc')
        .onSnapshot((data) => {
          setupPosts(data.docs);
        });
    } else {
      window.location.hash = '';
    }
  });

  post();
  // orderPosts();

  // ENVIA EL CONTENIDO DEL POST A FIREBASE
  const saveTask = (name, description, date) => firebase.firestore().collection('posts').doc().set({
    name,
    description,
    date,
  });

  btnSelectFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    console.log(file);

    const sotorageRef = firebase.storage().ref(`imagePosts/${file.name}`);

    const imageP = sotorageRef.put(file);
  });
  // uploadImg();

  // EVENTO PARA ENVIAR DATOS DEL POST A FIREBASE
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameInside = divElem.querySelector('#post-username');
    const description = taskForm['post-description'];
    const date = Date.now();
    console.log(date);
    saveTask(usernameInside.value, description.value, date);
    taskForm.reset();
    description.focus();
  });

  // FUNCION PARA CERRAR SESION
  btnSalir.addEventListener('click', () => {
    document.querySelector('#contenedorMessage').appendChild(MessageSignOut());
  });

  return divElem;
};
