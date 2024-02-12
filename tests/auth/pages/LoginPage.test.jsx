import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../../src/store/auth";
import { MemoryRouter } from "react-router-dom";
import { NotAuthenticatedState } from './../../fixtures/authFixtures';
import { startLoginWithEmailPassword } from './../../../src/store/auth/thunks';

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginWithEmailPassword: ({ email, password }) => () => mockStartLoginWithEmailPassword({ email, password })
}))

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
}))

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: NotAuthenticatedState
    }
})

describe('Pruebas en <LoginPage/>', () => {

    beforeEach( () => jest.clearAllMocks() );

    test('debe de renderizar el componente correctamente', () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1)
    })

    test('boton de google debe de llamar el startGoogleSignIn', () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )
        
        const googleBTN = screen.getByTestId('google-btn');
        fireEvent.click(googleBTN);
        
        expect( mockStartGoogleSignIn ).toHaveBeenCalled();
    })
    
    test('debe de llamar el startLoginWithEmailPassword', () => {
        
        const email = 'coofcoding@gmail.com';
        const password = '123456';

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )

        const emailfield = screen.getByRole('textbox', { name: 'email' });
        fireEvent.change(emailfield, { target: { name: 'email', value: email } })

        const passwordfield = screen.getByTestId('password');
        fireEvent.change(passwordfield, { target: { 'data-testid': 'password', value: password } })

        const loginForm = screen.getByTestId('submit-form');
        fireEvent.submit( loginForm )

        expect( mockStartLoginWithEmailPassword ).toHaveBeenCalledWith({
            email,
            password
        })

    });

})