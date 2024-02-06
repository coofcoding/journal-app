import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/provider"
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentication = ( { email, password } ) => {
    // return an asynchronic callback function for dispatching the actions in the slice
    return async( dispatch ) => {
        dispatch( checkingCredentials() )
    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
        
        const result = await signInWithGoogle();
        
        if( !result.ok ) return dispatch( logout( result.errorMessage ) ) ;
        
        dispatch( login( result ) );
    }
}

export const startCreatingUserWithEmailPassword = (userInfo) => {

    return ( async(dispatch) => {
        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword(userInfo);

        if ( !ok ) return dispatch( logout({ errorMessage }) );

        dispatch( login( {
            uid,
            displayName: userInfo.displayName,
            photoURL,
            email: userInfo.email
        } ) )

    } )
}