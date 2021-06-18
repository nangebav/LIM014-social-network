// instrucciones que se mockean
const storage = () => ({
  ref: () => ({
    child: (refPath) => ({
      put: (file) => new Promise((resolve) => {
        resolve(`The file ${file} was added to ${refPath}`);
      }),
    }),
  }),
});

const firebase = {
  storage,
};

export default jest.fn(() => firebase);
