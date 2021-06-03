/* eslint-disable no-console */
import {
  currentUser,
} from '../controller-function/post-firestore.js';

export default () => {
  const viewPerfil = `
 <div class="container">
 <div class="profile-Edit"><div>
  <div class="profile-badge">
    <img src="https://dummyimage.com/400x200/e85b27/e85b27">
    <div class="profile-pic"></div>
    <div class="user-detail text-center">
      <div class="profileDisplayName"></div>
      <div id="Description">
        <section id="emailUser">
          <h4>Correo Electrónico</h4>
        </section>
        <section>
          <h4>Número telefónico</h4>
          <p></p>
          <h4>Sobre mí</h4>
          <p></p>
        </section>
      </div>
    <button class="btn btn-defualt"> Follow </button><br>
  </div>
  <button id="editProfile"> Editar Perfil </button><br>
  </div>
</div>
 `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewPerfil;
  const profilePhoto = divElem.querySelector('.profile-pic');
  const perfilDisplayName = divElem.querySelector('.profileDisplayName');
  const editProfile = divElem.querySelector('#editProfile');
  const user = currentUser();

  editProfile.addEventListener(('click'), () => {
    document.querySelector('.profile-badge').setAttribute('hidden', true);
    document.querySelector('.profile-Edit').innerHTML = `
    <div>
      <h3> Edita tu perfil</h3>
      <div>
        <h4>Foto de perfil</h4>
        <div class="profileEditPhoto">
        <label for="selectPhotoPerfil">
          ${(user.photoURL) ? `<img src="${user.photoURL}"></img>` : '<img class="profileEdit" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8HtjDCK27FdSoqHRqLGnZ1Fq8yhs7UvvMTKPqMTlvOGdYiHvFzUW07V8gKsM9_fbK8Y&usqp=CAU"></img>'}
        </label>
        <input type="file" id="selectPhotoPerfil" accept="image/png, image/jpeg" value="upload" id="fileProfile" hidden/>
        </div>
      </div>
      <div id="Description">
        <section id="emailUser">
          <h4>Correo Electrónico</h4>
          <input type="text">
        </section>
        <section>
          <h4>Número telefónico</h4>
          <input type="text">
          <h4>Sobre mí</h4>
          <textarea placeholder="Artista mural"  cols="45" rows="5" style="resize:none;"></textarea>
        </section>
      </div>
      <button id="acceptProfile">Aceptar</button>

    </div>
    `;
    //  const updateProfile = (displayName, n ) => {
    //   const user = firebase.auth().currentUser;
    //   user.updateProfile({
    //     displayName: `${nombre} ${apellido}`,
    //     // photoURL: 'https://example.com/jane-q-user/profile.jpg',
    //   });
  });

  perfilDisplayName.innerHTML = `<h3>${user.displayName}</h3>`;
  divElem.querySelector('#emailUser').innerHTML += `<p>${user.email}</p>`;
  if (user.photoURL) {
    profilePhoto.innerHTML = `<img src="${user.photoURL}"></img>`;
  } else {
    profilePhoto.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8HtjDCK27FdSoqHRqLGnZ1Fq8yhs7UvvMTKPqMTlvOGdYiHvFzUW07V8gKsM9_fbK8Y&usqp=CAU"></img>';
  }

  // const selectPhotoPerfil = divElem.querySelector('#selectPhotoPerfil');
  // const acceptProfile = divElem.querySelector('#acceptProfile');
  // selectPhotoPerfil.addEventListener('change', (e) => {
  //   const storage = firebase.app().storage('gs://miurart---red-social.appspot.com');
  //   const storageRef = storage.ref();
  //   const file = e.target.files[0];
  //   acceptProfile.addEventListener('click', () => {
  //     if (file) {
  //       const imageRef = storageRef.child(`images Profile/${file.name}`);
  //       const uploadImage = imageRef.put(file);
  //       console.log(uploadImage);
  //     }
  //   });
  // });

  return divElem;
};
