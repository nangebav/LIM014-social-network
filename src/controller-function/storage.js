export const uploadFile = (fileEnv, file) => firebase.storage().ref().child(fileEnv).put(file);
