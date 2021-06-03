/* eslint-disable no-console */
import {
  currentUser,
} from '../controller-function/post-firestore.js';

export default () => {
  const viewPerfil = `
 <div class="container">
 <div class="profile-badge">
   <img src="https://dummyimage.com/400x200/e85b27/e85b27">
   <div class="profile-pic">
   </div>
   <div class="user-detail text-center">
    <div class="profileDisplayName"></div>
    <label for="selectPhotoPerfil">
      <img id="img_form" src="https://image.flaticon.com/icons/svg/56/56535.svg" />
    </label>
    <input type="file" id="selectPhotoPerfil" accept="image/png, image/jpeg" value="upload" id="fileProfile"/>
    <button id="acceptProfile">Aceptar</button>
     <div id="Description">
     <section id="emailUser">
      <h4>Correo Electrónico</h4>
      </section>
      <section>
      <h4>Número telefónico</h4>
      <p></p>
      <h4>Sobre mí</h4>
       <textarea placeholder="Artista mural"></textarea>
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
    document.querySelector('.profile-badge').innerHTML = `
    <div>
      <p> Edita tu perfil</p>
      <img src="https://dummyimage.com/400x200/e85b27/e85b27">
      <div class="profileEditPhoto">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8HtjDCK27FdSoqHRqLGnZ1Fq8yhs7UvvMTKPqMTlvOGdYiHvFzUW07V8gKsM9_fbK8Y&usqp=CAU"></img>
      ${(user.photoURL) ? `<img src="${user.photoURL}"></img>` : '<img class="profileEdit" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8HtjDCK27FdSoqHRqLGnZ1Fq8yhs7UvvMTKPqMTlvOGdYiHvFzUW07V8gKsM9_fbK8Y&usqp=CAU"></img>'}
      </div>
    </div>
    `;
  });

  perfilDisplayName.innerHTML = `<h3>${user.displayName}</h3>`;
  divElem.querySelector('#emailUser').innerHTML += `<p>${user.email}</p>`;
  if (user.photoURL) {
    profilePhoto.innerHTML = `<img src="${user.photoURL}"></img>`;
  } else {
    profilePhoto.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8HtjDCK27FdSoqHRqLGnZ1Fq8yhs7UvvMTKPqMTlvOGdYiHvFzUW07V8gKsM9_fbK8Y&usqp=CAU"></img>';
  }

  const selectPhotoPerfil = divElem.querySelector('#selectPhotoPerfil');
  const acceptProfile = divElem.querySelector('#acceptProfile');
  selectPhotoPerfil.addEventListener('change', (e) => {
    const storage = firebase.app().storage('gs://miurart---red-social.appspot.com');
    const storageRef = storage.ref();
    const file = e.target.files[0];
    acceptProfile.addEventListener('click', () => {
      if (file) {
        const imageRef = storageRef.child(`images Profile/${file.name}`);
        const uploadImage = imageRef.put(file);
        console.log(uploadImage);
      }
    });
  });

  return divElem;
};
