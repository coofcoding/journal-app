import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Typography, TextField, Link, Alert } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';

export const LoginPage = () => {

  const { email, password, onInputChange, formState } = useForm({
    email: '',
    password: '',
  });

  // getSelectors and get useDispatch hook to the store.js file
  const { status, errorMsg } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isAutheticated = useMemo(() => status === 'checking' || status === 'authenticated', [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    // after to it, create an dispatch for the function in my thunks.js file
    dispatch(startLoginWithEmailPassword({
      email: formState.email,
      password: formState.password,
    })
    )
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout
      title='Log in'
    >

      <form onSubmit={onSubmit}>
        <Grid
          container
        >
          <Grid
            item
            xs={12}
            sx={{ mb: 2 }}
          >
            <TextField
              label="email"
              type="email"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ mb: 2 }}
          >
            <TextField
              label="password"
              type="password"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={12}
            >
              {
                (!!errorMsg)
                  ? <Alert severity='error' >
                      {errorMsg}
                  </Alert>
                  : ''
              }
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <Button
                variant='contained'
                fullWidth
                sx={{
                  height: 50,
                  mb: 2,
                }}
                type='submit'
                disabled={isAutheticated}
              >
                Login
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <Button
                variant='contained'
                fullWidth
                sx={{
                  height: 50,
                  mb: 2,
                }}
                onClick={onGoogleSignIn}
                disabled={isAutheticated}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent='end'
          >
            <Link
              component={RouterLink}
              color='inherit'
              to='/auth/register'
            >
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>

    </AuthLayout>
  )
}
