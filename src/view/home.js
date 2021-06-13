/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import {
  editPost, addComment, savePost, getComment, currentUser, updateLikes,
} from '../controller-function/post-firestore.js';
import { commentView } from './comentarios.js';
import MessageSignOut from './box_message_sign_out.js';
import MessageDelete from './box_message_delete.js';
import Perfil from './perfil.js';

export default () => {
  const viewHome = `
  <header>
  <h1 class="h1-style"><img src="https://user-images.githubusercontent.com/77282012/118549107-a4ffdc00-b720-11eb-9040-9de50dfb9369.png" alt="app logo">MIURART</h1>
  <img id="logo" src="https://user-images.githubusercontent.com/77282012/118549107-a4ffdc00-b720-11eb-9040-9de50dfb9369.png" alt="app logo">
  <button id="btnSalir"><img src="https://user-images.githubusercontent.com/77282012/121115625-f872c080-c7da-11eb-9d55-53aba04edf15.png"></button>
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
                  <div id="body-form-postsection">
                  <textarea id="post-description" name="post-form" cols="50" rows="3" class="form-control" placeholder="¿Qué estás pensando?"></textarea>
                  <div id="imgpreview"></div>
                  </div>
                  <label for="fileButton">
                    <img src="https://user-images.githubusercontent.com/77282012/121268708-11837c00-c884-11eb-92dc-b6e6bfa95ce1.png">
                  </label>
                  <input hidden type="file" accept="image/png, image/jpeg" value="upload" id="fileButton" />
                </section>
                <section>
                  <button id="btnPublicar">Publicar ✔ </button>
                  <input type="reset" value="Cancelar ✖" id="cancelPost">
                </section>
              </form>
            </section>
          <section id="postContainer"></section>
        </section>
      </section>
    </section>
    <footer>
      <img id="perfilImg" src="https://user-images.githubusercontent.com/67443691/121232034-c2732200-c856-11eb-928c-01e838f3d792.png">
      <button id="btnSalirM"><img src="https://user-images.githubusercontent.com/77282012/121115625-f872c080-c7da-11eb-9d55-53aba04edf15.png"></button>
    </footer>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;

  // CONSTANTES DE ELEMENTOS HTML
  const postForm = divElem.querySelector('#post-form');
  const btnSalir = divElem.querySelector('#btnSalir');
  const btnSalirM = divElem.querySelector('#btnSalirM');
  const postContainer = divElem.querySelector('#postContainer');
  const username = divElem.querySelector('#post-username');
  const viewPerfil = divElem.querySelector('#viewPerfil');
  const btnSelectFile = divElem.querySelector('#fileButton');
  const photoForm = divElem.querySelector('.photoForm');
  const btnPerfil = divElem.querySelector('#perfilImg');
  // const userP = currentUser();

  btnPerfil.addEventListener('click', () => {
    document.getElementById('#viewPerfil').classList.add('.viewPerfil-btnonclick');
    console.log('ocultar perfil');
  });
  // FUNCION PARA OBTENER EL NOMBRE DEL USUARIO
  const getProfile = () => {
    const user = currentUser();
    // firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // console.log(user);
      photoForm.innerHTML = `
      <img src="${user.photoURL ? user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8HtjDCK27FdSoqHRqLGnZ1Fq8yhs7UvvMTKPqMTlvOGdYiHvFzUW07V8gKsM9_fbK8Y&usqp=CAU'}">`;
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
        // console.log(post);
        post.id = doc.id;
        const user = currentUser();
        const postElem = document.createElement('div');
        postElem.innerHTML = `
        <div class="post-card">
          <div class="cardUserPost">
          ${(post.userId === user.uid)
    ? `<div class="btns-edit-delete" name="${post.userId}" data-id-post="${post.id}">
              <img class="btn-edit" data-id="${post.id}" src="https://user-images.githubusercontent.com/77282012/120040454-32b6b380-bfcc-11eb-81cb-96f0e713e84c.png">
              <img class="btn-delete" data-id="${post.id}" src="https://user-images.githubusercontent.com/77282012/120018025-389c9c80-bfac-11eb-9d7d-0a68441eca20.png">
            </div>` : ''}
            <section class="postUser">
              <img class="postUserImage" src="${post.userPhoto}">
              <section>
                <h6>${post.date}</h6>
                <h3 class="h5" name="${post.name}">${post.name}</h3>
              </section>
            </section>
            <div class="editPublicacion" disabled>
              <p id="descriptionEdit">${post.description}</p>   
              <section id="photoPost"></section>
            </div>
            <div hidden class="editNote">
              <textarea class="note" name="comment">${post.description}</textarea>
              <button class="aceptEdit">Aceptar</button>
              <button class="cancelEdit">Cancelar</button>  
            </div>
            ${(post.photo) ? `<img class="photoPublic" src="${post.photo}">` : ''}
          </div>
          <div class="likeAndComment">
            <button class="like" data-id="${post.id}"> ❤ </button><label>${post.likes.length}</label>
            <button class="commentButton" data-id="${post.id}"><img src="https://user-images.githubusercontent.com/77282012/121792623-1cf4e100-cbbd-11eb-93e3-9005c0f19485.png"> Comentarios </button><label class="conterComment"></label>
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

        postContainer.appendChild(postElem);

        const commentContainer = document.querySelector(`form[data-id="${post.id}"]`);
        const contentComment = document.querySelector(`div.contentComment[data-id="${post.id}"]`);
        const idContent = contentComment.getAttribute('data-id');
        const btnsComment = document.querySelector(`button.commentButton[data-id="${post.id}"]`);

        // console.log(post.userId === user.uid);
        if (post.userId === user.uid) {
          editPost(post.id)
            .update({
              userPhoto: `${user.photoURL}`,
              name: `${user.displayName}`,
            });
        }

        // Mostrar la vista para crear los comentarios
        btnsComment.addEventListener('click', () => {
          const viewContainer = btnsComment.parentElement.parentElement.querySelector('div.userComment');
          if (viewContainer.getAttribute('hidden') === null) {
            viewContainer.setAttribute('hidden', true);
          } else {
            viewContainer.removeAttribute('hidden');
          }
        });

        // console.log(commentContainer);
        // Enviar los comentarios a Firebase
        commentContainer.addEventListener('submit', (e) => {
          e.preventDefault();
          // const usernameComment = divElem.querySelector('#commenterName');
          // console.log(usernameComment);
          const idPost = commentContainer.getAttribute('data-id');
          // console.log(idPost);
          const descriptionComment = commentContainer.commentDesc;
          addComment(user.uid, idPost, descriptionComment.value, user.displayName, user.photoURL);
          descriptionComment.value = '';
        });

        // Mostrar los comentarios de las Publicaciones
        getComment(idContent)
          .onSnapshot((com) => {
            contentComment.innerHTML = '';
            commentView(com.docs, post, user, contentComment);
          });

        // ------ actualizar likes

        const btnsLikes = document.querySelectorAll('button.like');
        // console.log(btnsLikes);
        btnsLikes.forEach((btn) => {
          if (btn.dataset.id === post.id) {
            btn.addEventListener('click', () => {
              const likeAdded = post.likes.indexOf(user.uid);
              if (likeAdded === -1) {
                post.likes.push(user.uid);
              } else {
                post.likes.splice(likeAdded, 1);
              }

              updateLikes(post.id, post.likes);
            });
          }
        });

        const btnsDelete = document.querySelectorAll('img.btn-delete');
        // console.log(btnsDelete);
        btnsDelete.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            document.querySelector('#contenedorMessage').innerHTML = '';
            document.querySelector('#contenedorMessage').appendChild(MessageDelete(e.target.dataset.id));
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
  const post = (user) => {
    // const user = currentUser();
    // console.log(user);
    if (user) {
      console.log('Estas Logueado');
      firebase.firestore().collection('posts').orderBy('date', 'desc')
        .onSnapshot((data) => {
          setupPosts(data.docs);
          getImagePosted();
        });
    } else {
      console.log('No estas Logueado');
      window.location.hash = '';
      // alert('Tu deberías ser un usuario para ver los posts');
    }
  };

  if (window.location.hash === '#/home') {
    const user = currentUser();
    post(user);
  }

  // --NO BORRAR, IMAGENES

  // Get a reference to the storage service, which is used to create
  // references in your storage bucket
  // --ENVIA IMG A FIREBASE AL MOEMNTO DE DAR CLICK ABRIR

  const preViewImg = (e) => {
    // const storage = firebase.app().storage('gs://miurart---red-social.appspot.com');
    // Create a storage reference from our storage service
    // const storageRef = storage.ref();
    // const fileName;

    // btnSelectFile.addEventListener('change', (e) => {
    // const fileName = e.target.files[0].name;

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function () {
      const preview = divElem.querySelector('#imgpreview');
      const image = document.createElement('img');

      image.src = reader.result;

      preview.innerHTML = '';
      preview.append(image);
    };

    // return fileName;
    // };
    // console.log(file);
    // const imgpv =
    // divElem.querySelector('#imgpreview').innerHTML = imgpv;
    // const imageRef = storageRef.child(`images/${file.name}`);
    // imageRef.put(file);
  };

  //  const getFile = (e) => {
  //    const file = e.target.files[0].name;
  //    console.log(file);
  //    return file;
  //  };

  btnSelectFile.addEventListener('change', (e) => {
    preViewImg(e);
  //  getFile(e);
  });
  // uploadImg();

  // Get a reference to the storage service, which is used to
  // create references in your storage bucket
  // const postImage = (e) => {
  //   const storage = firebase.app().storage('gs://miurart---red-social.appspot.com');
  //   // Create a storage reference from our storage service
  //   const storageRef = storage.ref();
  //   btnSelectFile.addEventListener('change', (e) => {
  //     const file = e.target.files[0];
  //     console.log(file);
  //     const imageRef = storageRef.child(`images/${file.name}`);
  //     imageRef.put(file);
  //   // });
  //   });
  // };

  // ---

  // const getFile = () => {
  //  btnSelectFile.addEventListener('change', (e) => {
  //    const file = e.target.files[0].name;
  //    console.log(typeof file);
  //    return file;
  //  // console.log(file);
  //  });
  // console.log(fileE());
  // };
  // fileE();

  divElem.querySelector('#cancelPost').addEventListener('click', () => {
    btnSelectFile.value = null;
    divElem.querySelector('#imgpreview').innerHTML = '';
  });

  // EVENTO PARA ENVIAR DATOS DEL POST A FIREBASE
  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // const imageFilbtnSelectFile.file
    // const img = preview.querySelector('img');
    // const file = img.src;
    // console.log(file);
    const usernameInside = divElem.querySelector('#post-username');
    const date = new Date().toLocaleString('en-ES');
    const userPr = currentUser();
    const userId = userPr.uid;
    const description = postForm['post-description'];
    // const userId = firebase.auth().currentUser.uid;
    // const userId = currentUserId;
    const userPhoto = userPr.photoURL;
    const likes = [];

    const inputFile = btnSelectFile.files;
    if (description.value || inputFile.length >= 1) {
      if (inputFile.length >= 1) {
        const file = inputFile[0];
        const storage = firebase.app().storage('gs://miurart---red-social.appspot.com');
        // Create a storage reference from our storage service
        const storageRef = storage.ref();
        const textPost = description.value;
        const imageRef = storageRef.child(`images/${file.name}`);
        imageRef.put(file).then((snapshot) => {
          snapshot.ref.getDownloadURL().then((url) => {
            savePost(usernameInside.value, textPost, date, userId, userPhoto, likes, url);
          });
        });
      } else {
        savePost(usernameInside.value, description.value, date, userId, userPhoto, likes, '');
      }
    }
    postForm.reset();
    description.focus();
    divElem.querySelector('#imgpreview').innerHTML = '';

    // console.log(file);
    // savePost(usernameInside.value, description.value, date, userId, userPhoto, likes);

    // postImage();
    // ---PROBAR
    // Get a reference to the storage service, which is used to create
    // references in your storage bucket
  });
  // --- PROBAR --

  // FUNCION PARA CERRAR SESION
  btnSalir.addEventListener('click', () => {
    document.querySelector('#contenedorMessage').innerHTML = '';
    document.querySelector('#contenedorMessage').appendChild(MessageSignOut());
  });

  btnSalirM.addEventListener('click', () => {
    document.querySelector('#contenedorMessage').innerHTML = '';
    document.querySelector('#contenedorMessage').appendChild(MessageSignOut());
  });

  return divElem;
};
