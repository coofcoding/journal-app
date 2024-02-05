import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Typography, TextField, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
  email: '',
  password: '',
  displayName: '',
}

export const RegisterPage = () => {

  const { displayName, email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = ( event ) => {
    event.preventDefault();
  }

  return (
    <AuthLayout
      title='Register'
    >

      <form onSubmit={ onSubmit }>
        <Grid
          container
        >
          <Grid
            item
            xs={12}
            sx={{ mb: 2 }}
          >
            <TextField
              label="username"
              type="text"
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
            />
          </Grid>
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
            >
              <Button
                variant='contained'
                fullWidth
                sx={{
                  height: 50,
                  mb: 2,
                }}
                type='submit'
              >
                CREATE ACCOUNT
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent='end'
          >
            <Typography sx={{ mr: 1 }}>have you an account?</Typography>
            <Link
              component={RouterLink}
              color='inherit'
              to='/auth/login'
            >
              Log in
            </Link>
          </Grid>
        </Grid>
      </form>

    </AuthLayout>
  )
}
