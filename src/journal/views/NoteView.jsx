import { BookmarkAdd } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useSelector } from "react-redux"

export const NoteView = () => {

    const { active } = useSelector( state => state.journal );

    return (
        <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{
                mb: 1,
                backgroundColor: '#fff',
                p: 3,
                borderRadius: 3
            }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{ active.date }</Typography>
            </Grid>

            <Grid item>
                <Button
                    variant='contained'
                    fullWidth
                    sx={{
                        height: 40,
                        px: 3,
                        backgroundColor: 'primary.main',
                        borderRadius: 50
                    }}
                >
                    <BookmarkAdd sx={{ mr: 1 }} />
                    Save
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    label="title"
                    sx={{ border: 'none', mt: 1 }}
                    value={ active.title }
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    minRows={5}
                    label="description"
                    sx={{ border: 'none', my: 1 }}
                    value={ active.body }
                />
            </Grid>

            {/* Image gallery */}

            <ImageGallery />
        </Grid>
    )
}
