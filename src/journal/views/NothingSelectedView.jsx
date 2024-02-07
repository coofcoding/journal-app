import { Comment } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            borderRadius={5}
            sx={{
                minHeight: 'calc(100vh - 112px)',
                backgroundColor: 'warning.main',
                border: '1px solid',
                borderColor: 'warning_content.main'
            }}
        >
            <Grid
                item
            >
                <Comment sx={{ fontSize: 30, color: 'warning_content.main', mr: 3, my: 2 }} />
            </Grid>
            <Grid
                item
            >
                <Typography variant="p" color={'warning_text.main'}>Please select a note</Typography>
            </Grid>
        </Grid>
    )
}
