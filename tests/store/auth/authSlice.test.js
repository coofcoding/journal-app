import { NotAuthenticatedState, authenticatedState, demoUser, initialState } from '../../fixtures/authFixtures';
import { authSlice, checkingCredentials, login, logout } from './../../../src/store/auth/authSlice';

describe('Pruebas en authSlice', () => {

    test('debe de regresar el estado inicial y llamarse "auth"', () => {
        
        expect( authSlice.name ).toBe('auth');

        const state = authSlice.reducer( initialState, {} );

        expect( state ).toEqual( initialState );

    })

    test('debe de realizar el login', () => {

        const state = authSlice.reducer( initialState, login( demoUser ) )

        expect( state ).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMsg: null
        })

    })

    test( 'debe de realizar el logout sin argumentos', () => {

        const logoutState = authSlice.reducer( authenticatedState, logout() )
        
        expect( logoutState ).toEqual(NotAuthenticatedState)
        
    })
    
    test( 'debe de realizar el logout y mostrar un mensaje de error', () => {
        
        const errorMessage = 'Credenciales no son correctas';


        const logoutState = authSlice.reducer( authenticatedState, logout( { errorMessage } ) )

        expect( logoutState ).toEqual({
            ...NotAuthenticatedState,
            errorMsg: errorMessage
        })

    })

    test('debe de cambiar el estado a checking', () => { 
        const state = authSlice.reducer( authenticatedState, checkingCredentials() );

        expect( state.status ).toBe('checking');
     })
    
})