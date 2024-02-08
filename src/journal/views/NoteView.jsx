import { EditNote } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useSelector } from "react-redux"
import { useForm } from './../../hooks/useForm';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote, startSavingNote } from "../../store/journal";

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active : note } = useSelector( state => state.journal );

    const { body, title, date, onInputChange, formState } = useForm( note );

    useEffect(() => {
      dispatch( setActiveNote( formState ) )
    }, [ formState ])
    
    const handleSaveNote = () => {
        dispatch( startSavingNote() );
    }

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
                <Typography fontSize={39} fontWeight='light'>{ date }</Typography>
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
                    onClick={ handleSaveNote }
                >
                    <EditNote sx={{ mr: 1 }} />
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
                    value={ title }
                    name="title"
                    onChange={ onInputChange }
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    minRows={5}
                    label="description"
                    sx={{ border: 'none', my: 1 }}
                    value={ body }
                    name="body"
                    onChange={ onInputChange }
                />
            </Grid>

            {/* Image gallery */}

            <ImageGallery />
        </Grid>
    )
}
