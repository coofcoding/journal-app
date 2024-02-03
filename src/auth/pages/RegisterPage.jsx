import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Typography, TextField, Link } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout
    title='Register'
    >

    <form>
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
                component={ RouterLink }
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
