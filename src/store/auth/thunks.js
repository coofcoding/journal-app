import { checkingCredentials } from "./"

export const checkingAuthentication = ( { email, password } ) => {

    console.log(email, password)

    // return an asynchronic callback function for dispatching the actions in the slice
    return async( dispatch ) => {
        dispatch( checkingCredentials() )
    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}