/* eslint-disable no-console */
import {
  currentUser,
} from '../controller-function/post-firestore.js';

export default () => {
  const viewPerfil = `
  <div class="container">
  <div class="profile-badge">
    <div class="profile-Edit"></div>
    <div class="profile">
      <img src="https://dummyimage.com/400x200/e85b27/e85b27">
      <div class="profile-pic"></div>
      <div id="cargando"></div>
      <div class="user-detail text-center">
        <div class="profileDisplayName"></div>
        <div id="Description">
          <section id="emailUser">
            <h4>Correo Electrónico</h4>
          </section>
          </div>
          <button class="btn btn-defualt"> Follow </button>
        </div>
        <button id="editProfile"> Editar Perfil </button>
      </div>
    </div>
  </div>
</div>
 `;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewPerfil;

  const profilePhoto = divElem.querySelector('.profile-pic');
  const perfilDisplayName = divElem.querySelector('.profileDisplayName');
  const editProfile = divElem.querySelector('#editProfile');
  const viewProfile = divElem.querySelector('.profile');
  const cargando = divElem.querySelector('#cargando');

  const user = currentUser();

  editProfile.addEventListener(('click'), () => {
    viewProfile.setAttribute('hidden', true);
    divElem.querySelector('.profile-Edit').innerHTML = `
    <div>
      <h3> Edita tu perfil</h3>
      <div>
        <h4>Foto de perfil</h4>
        <div class="profileEditPhoto">
          <label for="selectPhotoPerfil">
            <img id="camera" src="https://user-images.githubusercontent.com/77282012/120905707-928b0b00-c619-11eb-997a-ec5f315d3fc0.png">
            <img id="srcImage" src="${user.photoURL ? user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8HtjDCK27FdSoqHRqLGnZ1Fq8yhs7UvvMTKPqMTlvOGdYiHvFzUW07V8gKsM9_fbK8Y&usqp=CAU'}">
          </label>
        <input type="file" id="selectPhotoPerfil" accept="image/png, image/jpeg" value="upload" id="fileProfile" hidden/>
        </div>
      </div>
      <div id="Description">
        <form id="profileEdit">
          <section>
            <h4>Nombre de Usuario</h4>
            <input id="EditName" type="text" value="${user.displayName}">
          </section>
          <section id="emailUser">
            <h4>Correo Electrónico</h4>
            <input type="text" value="${user.email}">
          </section>
          <section >
            <h4>Sobre mí</h4>
            <textarea placeholder="Artista mural"  cols="30" rows="5" style="resize:none;"></textarea>
          </section>
          <button id="acceptProfile">Aceptar Cambios</button>
        </div>
      </form>
      <button id="cancelProfile">Cancelar</button>
    </div>
    `;

    const selectPhotoPerfil = document.querySelector('#selectPhotoPerfil');
    // const btnAceppt = document.querySelector('#acceptProfile');
    const btnCancel = document.querySelector('#cancelProfile');
    // const profileEditPhoto = document.querySelector('.profileEditPhoto');
    const srcImage = document.querySelector('#srcImage');
    const profileEdit = document.querySelector('#profileEdit');
    const editName = document.querySelector('#EditName');

    selectPhotoPerfil.addEventListener('change', (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        srcImage.src = `${reader.result}`;
      };
    });

    profileEdit.addEventListener('submit', (e) => {
      e.preventDefault();
      const storage = firebase.app().storage('gs://miurart---red-social.appspot.com');
      const storageRef = storage.ref();
      const file = selectPhotoPerfil.files[0];
      console.log(user);
      divElem.querySelector('.profile-Edit').innerHTML = '';
      cargando.innerHTML = '<img id="gif" src="https://acegif.com/wp-content/uploads/loading-25.gif">';
      viewProfile.removeAttribute('hidden');
      if (file || editName) {
        if (file) {
          const imageRef = storageRef.child(`images Profile/${file.name}`);
          imageRef.put(file).then((snapshot) => {
            cargando.innerHTML = '<img id="gif" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/240px-Yes_Check_Circle.svg.png">';
            snapshot.ref.getDownloadURL().then((url) => {
              user.updateProfile({
                photoURL: url,
              });
            });
          });
        } if (editName) {
          user.updateProfile({
            displayName: `${editName.value}`,
          });
        }
      }
    });
    btnCancel.addEventListener('click', () => {
      divElem.querySelector('.profile-Edit').innerHTML = '';
      viewProfile.removeAttribute('hidden');
    });
    //  const updateProfile = (displayName, n ) => {
    //   const user = firebase.auth().currentUser;
    //   user.updateProfile({
    //     displayName: `${nombre} ${apellido}`,
    //     // photoURL: 'https://example.com/jane-q-user/profile.jpg',
    //   });
  //   <select name="visibility" id="visibility">
  //   <option value="publico">Public</option>
  //   <option value="privado">Private</option>
  // </select>
  });

  perfilDisplayName.innerHTML = `<h3>${user.displayName}</h3>`;
  divElem.querySelector('#emailUser').innerHTML += `<p>${user.email}</p>`;
  profilePhoto.innerHTML = `<img src="${user.photoURL ? user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8HtjDCK27FdSoqHRqLGnZ1Fq8yhs7UvvMTKPqMTlvOGdYiHvFzUW07V8gKsM9_fbK8Y&usqp=CAU'}">`;

  return divElem;
};
