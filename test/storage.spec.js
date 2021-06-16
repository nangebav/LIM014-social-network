// import { uploadFile } from '../src/firebase/firestorageFx.js';

import mockFirebase from '../src/_mocks_/storage-mock.js';

global.firebase = mockFirebase();

/*
describe('Función de fireStorage', () => {
// done es un atributo que dice que no espere y no salga error el test
  it('Debe mandar una imagen a storage', (done) => uploadFile('thefolderuser01', 'img.jpg')
    .then((data) => {
      /* console.log(data); */
/*     expect(data).toBe('The file img.jpg was added to thefolderuser01');
      done();
    }));
}); */
