import { EditNote } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components'
import { useSelector } from 'react-redux'
import { useForm } from './../../hooks/useForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote, startDeletingNote, startSavingNote, startUploadingFiles } from '../../store/journal';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { UploadOutlined } from '@mui/icons-material';
import { useRef } from 'react';
import { DeleteOutline } from '@mui/icons-material';

const MySwal = withReactContent(Swal);

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, isSaving, messageSaved } = useSelector(state => state.journal);

    const { body, title, date, onInputChange, formState } = useForm(note);

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {

        if (messageSaved.length > 0) {
            Swal.fire({
                icon: "success",
                title: 'Note updated successfully!',
                text: messageSaved,
                showConfirmButton: false,
                timer: 2000
            });
        }

    }, [messageSaved])

    const fileInputRef = useRef();


    const handleSaveNote = () => {
        dispatch(startSavingNote());
    }

    const handleFileInputChange = ({ target }) => {
        if (target.files === 0) return;

        dispatch(startUploadingFiles(target.files));
    }

    const onDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            ( result.isConfirmed ) && ( dispatch(startDeletingNote()) );
        })
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
                borderRadius: 1,
                boxShadow: '0px 4px 8px rgba(0,0,0,.15)'
            }}>
            <Grid item>
                <Typography fontSize={30} color={'#00000070'} fontWeight='light'>{date}</Typography>
            </Grid>

            <Grid item >

                <input
                    type='file'
                    multiple
                    onChange={handleFileInputChange}
                    style={{
                        display: 'none'
                    }}
                    ref={fileInputRef}
                />

                <Button
                    variant='contained'
                    sx={{
                        height: 40,
                        backgroundColor: 'error.main',
                        borderRadius: 1,
                        color: '#fff',
                        mr: 2,
                        ':hover': {
                            backgroundColor: 'error.main',
                            opacity: 0.9
                        },
                    }}
                    onClick={onDelete}
                    disabled={isSaving}
                >
                    <DeleteOutline />
                </Button>
                <Button
                    variant='contained'
                    sx={{
                        height: 40,
                        backgroundColor: 'primary.main',
                        borderRadius: 1,
                        color: '#fff',
                        mr: 2
                    }}
                    onClick={() => fileInputRef.current.click()}
                    disabled={isSaving}
                >
                    <UploadOutlined />
                </Button>
                <Button
                    variant='contained'
                    sx={{
                        height: 40,
                        px: 3,
                        backgroundColor: 'primary.main',
                        borderRadius: 1
                    }}
                    onClick={handleSaveNote}
                    disabled={isSaving}
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
                    value={title}
                    name="title"
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    minRows={5}
                    label="description"
                    sx={{ border: 'none', my: 1 }}
                    value={body}
                    name="body"
                    onChange={onInputChange}
                />
            </Grid>

            {/* Image gallery */}

            <ImageGallery
                images={note.imageUrls}
            />
        </Grid>
    )
}
