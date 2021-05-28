export default () => {
  const viewPerfil = `
 <div class="container">
 <div class="profile-badge">
   <img src="https://dummyimage.com/400x200/e85b27/e85b27">
   <div class="profile-pic">
   </div>
   <div class="user-detail text-center">
    <div class="profileDisplayName"></div>
     <div id="Description">
       <textarea placeholder="Artista mural"></textarea>
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
    if (user.photoURL) {
      profilePhoto.innerHTML = `<img src="${user.photoURL}"></img>`;
    } else {
      profilePhoto.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8HtjDCK27FdSoqHRqLGnZ1Fq8yhs7UvvMTKPqMTlvOGdYiHvFzUW07V8gKsM9_fbK8Y&usqp=CAU"></img>';
    }
  });
  return divElem;
};
