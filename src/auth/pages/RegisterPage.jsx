import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Typography, TextField, Link } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout
    title='Crear cuenta'
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
                label="Nombre completo"
                type="text"
                placeholder='Jhon Doe'
                fullWidth
              />
            </Grid>
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
              >
                <Button
                  variant='contained'
                  fullWidth
                  sx={{
                    height: 50,
                    mb: 2,
                  }}
                >
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              direction='row'
              justifyContent='end'
            >
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link
                component={ RouterLink }
                color='inherit'
                to='/auth/login'
              >
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>

    </AuthLayout>
  )
}
