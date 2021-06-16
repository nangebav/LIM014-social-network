import MockFirebase from 'mock-cloud-firestore';
import { savePost, getComment } from '../src/controller-function/post-firestore.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        id_001: {
          date: '',
          description: '',
          likes: [],
          name: 'Gabriela',
          photo: '',
          userId: '001',
          userPhoto: '',

          __collection__: {
            comment: {
              __doc__: {
                cid_001: {
                  comment: 'texto en comentario',
                  date: '',
                  idPost: 'id_001',
                  userId: '001',
                  userName: 'Gabriela',
                  userPhoto: '',
                },
              },
            },
          },
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('savePost', () => {
  it('Debería crear una nueva publicación', (done) => savePost('', '', [], 'Gabriela', '', '001', '')
    .then(() => getComment(
      (data) => {
        // verificar que
        const result = data.find((posts) => posts.newPost === 'texto en muro');
        expect(result.newPost).toBe('texto en muro');
        done(); // ES LA PROMESA QUE LE DICE AL TEST QUE NO SE QUEDE ESPERANDO A LA OTRA PROMESA
      },
    )));
});
