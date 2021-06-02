/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import {
  deletePost, editPost, addComment, savePost, getComment, currentUser, updateLikes,
} from '../controller-function/post-firestore.js';
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
                  <p id="post-username" name="post-form" class="form-control"></p>
                </section>
                <section class="body-form">
                  <section class="photoForm"></section>
                  <textarea id="post-description" name="post-form" cols="50" rows="3" class="form-control" placeholder="¿Qué estás pensando?"></textarea>
                </section>
                <section>
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
  const photoForm = divElem.querySelector('.photoForm');
  const userP = currentUser();

  // FUNCION PARA OBTENER EL NOMBRE DEL USUARIO
  const getProfile = () => {
    const user = currentUser();
    // firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      photoForm.innerHTML = `
      <img src="${user.photoURL}">`;
      username.innerHTML = user.displayName;
      username.value = `${user.displayName}`;
      viewPerfil.appendChild(Perfil());
    }
  };
  // });
  getProfile();
  // FUNCION PARA CREAR HTML PARA MOSTRAR LOS POSTS EN PANTALLA
  const setupPosts = (data) => {
    if (data.length) {
      postContainer.innerHTML = '';
      data.forEach((doc) => {
        const post = doc.data();
        console.log(post);
        post.id = doc.id;
        const user = currentUser();
        postContainer.innerHTML += `
        <div class="post-card">
          <div class="cardUserPost">
          ${(post.userId === user.uid)
    ? `<div class="btns-edit-delete" name="${post.userId}" data-id-post="${post.id}">
              <img class="btn-edit" data-id="${post.id}" src="https://user-images.githubusercontent.com/77282012/120040454-32b6b380-bfcc-11eb-81cb-96f0e713e84c.png">
              <img class="btn-delete" data-id="${post.id}" src="https://user-images.githubusercontent.com/77282012/120018025-389c9c80-bfac-11eb-9d7d-0a68441eca20.png">
            </div>` : ''}
            <h6>${post.date}</h6>
            <h3 class="h5" name="${post.name}">${post.name}</h3>
            <div class="editPublicacion" disabled>
              <p id="descriptionEdit">${post.description}</p>   
              <section id="photoPost"></section>
            </div>
            <div hidden class="editNote">
              <textarea class="note" name="comment">${post.description}</textarea>
              <button class="aceptEdit">Aceptar</button>
              <button class="cancelEdit">Cancelar</button>  
            </div>
          </div>
          <div>
            <button class="like" data-id-p="${post.id}"> ❤ </button> <label>${post.likes}</label>
            <button class="commentButton" data-id="${post.id}"> comentarios </button><label class="conterComment"></label>
          </div>
          <div hidden class="userComment" data-id="${post.id}">
            <form class="commentContainer" data-id="${post.id}">
                <img class="photoComment" src="${user.photoURL}">
                <textarea id="commentDesc" cols="45" data-id="${post.id}" placeholder="Escribe una respuesta"></textarea>
                <button class="commentPost" data-id="${post.id}"><img src="https://user-images.githubusercontent.com/77282012/120261005-a111a500-c25c-11eb-99b7-7f3bd7cc7697.png"></button>
            </form>
            <div class="contentComment" data-id="${post.id}"></div>
          </div>
        </div>
       `;

        const btnsComment = document.querySelectorAll('button.commentButton');
        btnsComment.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            const viewContainer = e.target.parentElement.parentElement.querySelector('div.userComment');
            if (viewContainer.getAttribute('hidden') === null) {
              viewContainer.setAttribute('hidden', true);
            } else {
              viewContainer.removeAttribute('hidden');
            }
          });
        });

        const commentContainer = document.querySelectorAll('.commentContainer');
        // console.log(commentContainer);
        commentContainer.forEach((form) => {
          form.addEventListener('submit', (e) => {
            e.preventDefault();
            const usernameComment = divElem.querySelector('#commenterName');
            console.log(usernameComment);
            const idPost = form.getAttribute('data-id');
            // console.log(idPost);
            const descriptionComment = form.commentDesc;
            addComment(user.uid, idPost, descriptionComment.value, user.displayName);
            descriptionComment.value = '';
          });
        });

        // const btnsComment = document.querySelector('button.commentButton');
        // const btnsComment = document.querySelector(`button.commentButton[data-id="${post.id}"]`);
        // console.log(btnsComment);
        // btnsComment.forEach((btn) => {
        // btnsComment.addEventListener('click', () => {
        //   console.log('hiciste click');
        //   // const commentContainer = e.target.parentElement.parentElement.querySelector('div#commentContainer');
        //   // console.log(commentContainer);
        //   // console.log(e.target.parentElement);
        //   // commentContainer.innerHTML = `
        //   // <h5 id="commenterName"></h5>
        //   // <textarea id="commentDesc" data-id="${post.id}"></textarea>
        //   // <button class="commentPost" data-id="${post.id}">Comentar</button>
        //   // <button id="cancelPost"">cancelar</button>`;

        //   // const commentPost = document.querySelectorAll('.commentPost');
        //   // console.log(e.target.parentElement.parentElement.querySelector('#commentDesc'));
        //   // console.log(e.target.parentElement.parentElement.querySelector('.commentPost'));

        //   // const commentPost1 = e.target.parentElement.parentElement.parentElement.querySelector('#commentDesc');
        //   // console.log(commentPost1);
        //   // console.log(document.querySelectorAll('.commentPost'));
        //   // const commentDesc = document.getElementById('commentDesc').value;
        //   // addComment(post.userId, post.id, commentDesc);
        // });
        // });

        // ------ actualizar likes
        const updateLikes = (postid, likesA) => firebase.firestore().collection('posts').doc(postid).update({ likes: likesA });

        function removeItemFromArr(arr, item) {
          const i = arr.indexOf(item);

          if (i !== -1) {
            arr.splice(i, 1);
          }
        }

        const btnsLikes = document.querySelector(`#like-${post.id}`);
        console.log(btnsLikes);
        btnsLikes.addEventListener('click', () => {
          // e.preventDefault();
          // const a = e.target.dataset;
          // console.log(a);
          // const pid = btnsLikes.getAttribute('data-id-p');
          // console.log(pid);
          console.log(post.id);
          // console.log(post);
          const likeAdded = post.likes;
          console.log(likeAdded);

          if (likeAdded.includes(user.uid)) {
            likeAdded.push(user.uid);
            console.log('dentro del if');
          } else {
            // post.likes.splice(likeAdded, 1);
            removeItemFromArr(likeAdded, user.uid);
          }

          updateLikes(post.id, likeAdded);
        });

        const btnsDelete = document.querySelectorAll('img.btn-delete');
        // console.log(btnsDelete);
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

        const btnsEdit = document.querySelectorAll('img.btn-edit');
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
              editNote.setAttribute('hidden', true);
              editPost(e.target.dataset.id)
                .update({
                  description: `${editText.value}`,
                });
            });

            const cancelEdit = editNote.querySelector('.cancelEdit');
            cancelEdit.addEventListener('click', () => {
              editPublicacion.removeAttribute('hidden');
              editNote.setAttribute('hidden', true);
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
  // firebase.auth().onAuthStateChanged((user) => {
  const post = () => {
    const user = currentUser();
    if (user) {
      firebase.firestore().collection('posts').orderBy('date', 'desc')
        .onSnapshot((data) => {
          setupPosts(data.docs);
          getImagePosted();
        });
    } else {
      window.location.hash = '';
    }
  };

  post();

  // --NO BORRAR, IMAGENES

  // hacer update
  // .doc(id).update()

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

  // Get a reference to the storage service, which is used to
  // create references in your storage bucket
  // var storage = firebase.app().storage("gs://miurart---red-social.appspot.com");
  // // Create a storage reference from our storage service
  // var storageRef = storage.ref();
  // btnSelectFile.addEventListener('change', (e) => {
  //  const file = e.target.files[0];
  //   //console.log(file);
  //   const imageRef = storageRef.child(`images/${file.name}`);
  //   imageRef.put(file);
  // });

  // ---

  const getFile = () => {
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
    const date = new Date().toLocaleString('en-ES');
    const file = getFile();
    const userPr = currentUser();
    const userId = userPr.uid;
    // const userId = firebase.auth().currentUser.uid;
    // const userId = currentUserId;
    const userPhoto = userPr.photoURL;
    const likes = [];
    // console.log(file);
    savePost(usernameInside.value, description.value, date, userId, userPhoto, likes);

    // ---PROBAR
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
  // --- PROBAR --

  // FUNCION PARA CERRAR SESION
  btnSalir.addEventListener('click', () => {
    document.querySelector('#contenedorMessage').appendChild(MessageSignOut());
  });

  return divElem;
};
