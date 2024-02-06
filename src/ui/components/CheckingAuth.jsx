import { CircularProgress, Grid } from "@mui/material"

export const CheckingAuth = () => {
    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: '100vh',
                backgroundColor: 'primary.main',
            }}
        >
            <Grid item
                sx={{
                    padding: 1,
                    borderRadius: 2
                }}
            >
                <CircularProgress color="warning"/>
            </Grid>
        </Grid>
    )
}
