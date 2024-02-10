import { checkingCredentials } from "../../../src/store/auth";
import { checkingAuthentication, checkingAuthentications } from "../../../src/store/auth/thunks"

jest.mock('../../../src/firebase/provider')

describe('Pruebas en auth thunks', () => {

    const dispatch = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('debe de invocar el checkingCredentials', async() => {

        await checkingAuthentications()(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );

    })
    
})