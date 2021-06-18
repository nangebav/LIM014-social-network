import mockFirebase from '../src/_mocks_/storage-mock.js';

import { uploadFile } from '../src/controller-function/storage';

global.firebase = mockFirebase();

describe('Función de fireStorage', () => {
// done es un atributo que dice que no espere y no salga error el test
  it('Debe mandar una imagen a storage', (done) => uploadFile('images/folder', 'img.jpg')
    .then((data) => {
      /* console.log(data); */
      expect(data).toBe('The file img.jpg was added to images/folder');
      done();
    }));
});
