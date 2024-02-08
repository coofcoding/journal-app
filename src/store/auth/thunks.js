import { FirebaseAuth } from "../../firebase/config"
import { loginUserWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/provider"
import { setActiveNote, setNotes } from "../journal"
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

export const startLoginWithEmailPassword = (userInfo) => {

    return ( async(dispatch) => {
        dispatch( checkingCredentials() );
    
        const { ok, uid, photoURL, errorMessage, displayName } = await loginUserWithEmailPassword(userInfo);
    
        if ( !ok ) return dispatch( logout({ errorMessage }) );
    
        dispatch( login( {
            uid,
            photoURL,
            displayName,
            email: userInfo.email
        } ) )
    
    } )
    
}

export const startLogout = () => {
    return async ( dispatch ) => {
        await logoutFirebase();

        dispatch( setActiveNote(null) )
        dispatch( setNotes([]) )
        dispatch( logout({}) );
    }
}