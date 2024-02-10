export const initialState = {
    status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMsg: null,
}

export const authenticatedState = {
    status: 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
    uid: 'Alfd23iksdjlk1k',
    email: 'correo@google.com',
    displayName: 'coofcoding',
    photoURL: 'https://profilephoto.jpg',
    errorMsg: null,
}

export const NotAuthenticatedState = {
    status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMsg: null,
}

export const demoUser = {
    uid: 'newuser1234567890',
    email: 'nuevo@usuario.com',
    displayName: 'Nuevo Usuario',
    photoURL: 'https://profilephoto.jpg'
}