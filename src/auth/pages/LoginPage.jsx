import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Typography, TextField, Link } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout
    title='Login'
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
                label="Correo"
                type="email"
                placeholder='correo@google.com'
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ mb: 2 }}
            >
              <TextField
                label="Contraseña"
                type="password"
                placeholder='···········'
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
                sm={6}
              >
                <Button
                  variant='contained'
                  fullWidth
                  sx={{
                    height: 50,
                    mb: 2,
                  }}
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
                component={ RouterLink }
                color='inherit'
                to='/auth/register'
              >
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>

    </AuthLayout>
  )
}
