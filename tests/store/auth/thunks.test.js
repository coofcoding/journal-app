import { loginUserWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../../src/firebase/provider";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import { checkingAuthentication, checkingAuthentications, startCreatingUserWithEmailPassword, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";
import { demoUser } from '../../fixtures/authFixtures';

jest.mock('../../../src/firebase/provider')

describe('Pruebas en auth thunks', () => {
    
    const dispatch = jest.fn();
    
    beforeEach( () => jest.clearAllMocks() );

    test('debe de invocar el checkingCredentials', async() => {

        await checkingAuthentications()(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );

    })

    test ('startGoogleSignIn debe de llamar checkingCredentials y login - Exito', async() => {

        const loginData = { ok: true, ...demoUser };
        await signInWithGoogle.mockResolvedValue( loginData );
        
        // thunk
        await startGoogleSignIn()( dispatch );
        
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
        
    })
    
    test ('startGoogleSignIn debe de llamar checkingCredentials y logount - Error', async() => {
        
        const loginData = { ok: false, errorMessage: 'Un error en Google' };
        await signInWithGoogle.mockResolvedValue( loginData );
        
        await startGoogleSignIn()( dispatch );
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) );

    })

    test ('startLoginWithEmailPassword debe de llamar checkingCredentials y login - Exito', async() => {
        
        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456' };

        await loginUserWithEmailPassword.mockResolvedValue( loginData );

        await startLoginWithEmailPassword( formData )(dispatch);



        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( demoUser ) );

    })
    
    test ('startLoginWithEmailPassword debe de llamar checkingCredentials y logout - Error', async() => {
        
        const loginData = { ok: false, errorMessage: 'Error al iniciar sesion' };
        const formData = { email: demoUser.email, password: '123456' };

        await loginUserWithEmailPassword.mockResolvedValue( loginData );

        await startLoginWithEmailPassword( formData )(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( {errorMessage: loginData.errorMessage}  ) );

    })

    test('startCreatingUserWithEmailPassword debe de llamar checkingCredentials y login - Exito', async() => {

        const loginData = { ok: true, ...demoUser };
        const registerData = { email: demoUser.email, password:'123456', displayName: demoUser.displayName };

        await registerUserWithEmailPassword.mockResolvedValue( loginData );
        await startCreatingUserWithEmailPassword( registerData )(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( demoUser ) );

    })

    test('startCreatingUserWithEmailPassword debe de llamar checkingCredentials y logout - Error', async() => {

        const loginData = { ok: false, errorMessage: 'Ocurrio un error al intentar registrar el usuario' };
        const registerData = { email: demoUser.email, password:'123456', displayName: demoUser.displayName };

        await registerUserWithEmailPassword.mockResolvedValue( loginData );
        await startCreatingUserWithEmailPassword( registerData )(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( {errorMessage: loginData.errorMessage }));

    })
    
    test('startLogout debe de llamar logoutFirebase, crealrNotes y logout', async() => {

        await startLogout()(dispatch);

        expect( logoutFirebase ).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );

    })

})