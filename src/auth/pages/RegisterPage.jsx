import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Typography, TextField, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useState } from 'react';

const formData = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email: [ (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) , 'insert a valid e-mail'],
  password: [ (value) => value.length >= 6 , 'the password must have at least 6 characters'],
  displayName: [ (value) => value.length >= 1 , 'the name is obligatory'],
}

export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)

  const { displayName, email, password, onInputChange, formState, isFormValid, emailValid, passwordValid, displayNameValid } = useForm(formData, formValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();

    if( isFormValid ) return;

    setFormSubmitted(true);
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
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
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
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
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
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
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
