/* eslint-disable no-console */
export default () => {
  const viewPerfil = `
 <div class="container">
 <div class="profile-badge">
   <img src="https://dummyimage.com/400x200/e85b27/e85b27">
   <div class="profile-pic">
   </div>
   <div class="user-detail text-center">
    <div class="profileDisplayName"></div>
    <input type="file" accept="image/png, image/jpeg" value="upload" id="fileProfile"/>
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
 </div>
</div>
 `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewPerfil;
  const profilePhoto = divElem.querySelector('.profile-pic');
  const perfilDisplayName = divElem.querySelector('.profileDisplayName');

  firebase.auth().onAuthStateChanged((user) => {
    perfilDisplayName.innerHTML = `<h3>${user.displayName}</h3>`;
    divElem.querySelector('#emailUser').innerHTML += `<p>${user.email}</p>`;
    if (user.photoURL) {
      profilePhoto.innerHTML = `<img src="${user.photoURL}"></img>`;
    } else {
      profilePhoto.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8HtjDCK27FdSoqHRqLGnZ1Fq8yhs7UvvMTKPqMTlvOGdYiHvFzUW07V8gKsM9_fbK8Y&usqp=CAU"></img>';
    }
  });

  const selectProfile = divElem.querySelector('#fileProfile');
  const acceptProfile = divElem.querySelector('#acceptProfile');
  selectProfile.addEventListener('change', (e) => {
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
