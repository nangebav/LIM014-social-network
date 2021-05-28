/* eslint-disable no-console */
// import { signOut } from '../controller-function/auth-logIn.js';
import { deletePost, editPost } from '../controller-function/post-firestore.js';
import MessageSignOut from './box_message_sign_out.js';
import Perfil from './perfil.js';

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
                        <textarea id="post-description" name="post-form" cols="50" rows="3" class="form-control" placeholder="¿Qué estás pensando?"></textarea>
                        <!-- <a><img id="uploadImage" src="https://user-images.githubusercontent.com/67443691/119537339-8c5e7a00-bd4f-11eb-9508-ace2d40f4695.png"</a> -->
                        <input type="file" accept="image/png, image/jpeg" value="upload" id="fileButton" />
                    </section>
                    <button id="btnPublicar">Publicar</button>
                  </form>
              </section>
              <section id="postContainer"></section>
            </section>
          </section>
        </section>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;

  // CONSTANTES DE ELEMENTOS HTML
  const postForm = divElem.querySelector('#post-form');
  const btnSalir = divElem.querySelector('#btnSalir');
  const postContainer = divElem.querySelector('#postContainer');
  const username = divElem.querySelector('#post-username');
  const viewPerfil = divElem.querySelector('#viewPerfil');
  const btnSelectFile = divElem.querySelector('#fileButton');

  // FUNCION PARA OBTENER EL NOMBRE DEL USUARIO
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      username.innerHTML = user.displayName;
      username.value = `${user.displayName}`;
      viewPerfil.appendChild(Perfil());
    }
  });

  // FUNCION PARA CREAR HTML PARA MOSTRAR LOS POSTS EN PANTALLA
  const setupPosts = (data) => {
    if (data.length) {
      postContainer.innerHTML = '';
      data.forEach((doc) => {
        const post = doc.data();
        console.log(post);
        // console.log(username);
        post.id = doc.id;
        postContainer.innerHTML += `
        <div class="post-card">
          <div class="card">
            <div class="btns">
              <button class="btn-edit" data-id="${post.id}">Editar</button>
              <button class="btn-delete" data-id="${post.id}">Eliminar</button>
            </div>
            <h3 class="h5" name="${post.name}">${post.name}</h3>
            <!-- <p id="descriptionEdit">${post.description}</p> --> 
            <div class="editPublicacion" disabled>
              <p id="descriptionEdit">${post.description}</p>   
              <section id="photoPost"></section>
            </div>
            <div hidden class="editNote">
              <textarea class="note" name="comment">${post.description}</textarea>
              <button class="aceptEdit" >Aceptar</button>  
            </div>
          </div>
        <div>
          <button id="like"> ❤ </button>
          <button class="comment"> comentarios </button>
        </div>
        </div>
        <div>
          <form class="commentForm" >
           <div hidden class="commentContainer">
             <h5 id="commenterName"></h5>
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
            const commentContainer = e.target.parentElement.parentElement.querySelector('.commentContainer');
            commentContainer.removeAttribute('hidden');
            const getComments = (idPost, callback) => {
              const db = firebase.firestore();
              db.collection(`post/${idPost}/comment`).orderBy('date', 'desc')
                .onSnapshot((querySnapshot) => {
                  const comment = [];
                  querySnapshot.forEach((doc) => {
                    comment.push({ id: doc.id, ...doc.data() });
                  });
                });
            };
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
                    <div>
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
            const editNote = e.target.parentElement.parentElement.querySelector('.editNote');
            editNote.removeAttribute('hidden');
            editPublicacion.setAttribute('hidden', true);
            // editPublicacion.innerHTML = `
            // <textarea class="note" name="comment">${post.description}</textarea>
            // <button class="aceptEdit" >Aceptar</button>`;
            // const aceptEdit = editPublicacion.querySelector('.aceptEdit');
            const aceptEdit = editNote.querySelector('.aceptEdit');
            aceptEdit.addEventListener('click', (eTwo) => {
              const editText = eTwo.target.parentElement.querySelector('.note');
              editPublicacion.removeAttribute('hidden');
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

  // Create a reference to the file we want to download
  const photoPost = divElem.querySelector('#photoPost');
  const getImagePosted = () => {
    const storageRef = firebase.storage().ref();

    const starsRef = storageRef.child('images/images.jpeg');
    // console.log(starsRef);
    // Get the download URL
    starsRef.getDownloadURL().then((url) => {
      // Insert url into an <img> tag to "download"
      // console.log(url);
      const imgPrueba = `<img src="${url}">`;
      photoPost.innerHTML = imgPrueba;
    }).catch((error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;

        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;

        default:
      }
    });
  };

  // FUNCION PARA TRAER DE FIRESTORE LOS DOC CON LA INFO DE POSTS
  const post = () => firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firebase.firestore().collection('posts').orderBy('date', 'desc')
        .onSnapshot((data) => {
          setupPosts(data.docs);
          getImagePosted();
        });
    } else {
      window.location.hash = '';
    }
  });

  post();

  // ENVIA EL CONTENIDO DEL POST A FIREBASE
  const saveTask = (name, description, date) => firebase.firestore().collection('posts').doc().set({
    name,
    description,
    date,
  });

  // Get a reference to the storage service, which is used to create
  // references in your storage bucket
  // const storage = firebase.app().storage('gs://miurart---red-social.appspot.com');
  // // Create a storage reference from our storage service
  // const storageRef = storage.ref();
  // btnSelectFile.addEventListener('change', (e) => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   const imageRef = storageRef.child(`images/${file.name}`);
  //   imageRef.put(file);
  // });
  // uploadImg();

  // Get a reference to the storage service, which is used to create references in your storage bucket
  // var storage = firebase.app().storage("gs://miurart---red-social.appspot.com");
  // // Create a storage reference from our storage service
  // var storageRef = storage.ref();
  // btnSelectFile.addEventListener('change', (e) => {
  //  const file = e.target.files[0];
  //   //console.log(file);
  //   const imageRef = storageRef.child(`images/${file.name}`);
  //   imageRef.put(file);
  // });

  const fileE = () => {
    btnSelectFile.addEventListener('change', (e) => {
      const file = e.target.files[0].name;
      // console.log(file);
      return file;
    // console.log(file);
    });
    // console.log(fileE());
  };
  // fileE();

  // EVENTO PARA ENVIAR DATOS DEL POST A FIREBASE
  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameInside = divElem.querySelector('#post-username');
    const description = postForm['post-description'];
    const date = Date.now();
    const file = fileE();
    console.log(file);
    saveTask(usernameInside.value, description.value, date);
    // Get a reference to the storage service, which is used to create
    // references in your storage bucket
    const storage = firebase.app().storage('gs://miurart---red-social.appspot.com');
    // Create a storage reference from our storage service
    const storageRef = storage.ref();
    const imageRef = storageRef.child(`images/${file}`);
    imageRef.put(file);
    postForm.reset();
    description.focus();
  });

  // FUNCION PARA CERRAR SESION
  btnSalir.addEventListener('click', () => {
    document.querySelector('#contenedorMessage').appendChild(MessageSignOut());
  });

  return divElem;
};
