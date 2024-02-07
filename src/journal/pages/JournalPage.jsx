import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startNewNote } from '../../store/journal';
import { useSelector } from 'react-redux';

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal );

  const handleClickNewNote = () => {

    dispatch( startNewNote() );

  }

  return (
    <JournalLayout>

      {
        ( !!active )
        ? <NoteView/>
        : <NothingSelectedView/>
      }

      <IconButton
        disabled={ isSaving }
        onClick={ handleClickNewNote }
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {
            backgroundColor: 'error.main',
            opacity: 0.9
          },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{
          fontSize: 30
        }} />
      </IconButton>

    </JournalLayout>
  )
}
