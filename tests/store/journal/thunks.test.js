import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from '../../../src/store/journal/journalSlice';
import { startDeletingNote, startLoadingNotes, startNewNote, startSavingNote, startUploadingFiles } from './../../../src/store/journal/thunks';
import { FirebaseDB } from '../../../src/firebase/config';
import { loadNotes } from '../../../src/helpers/loadNotes';
import { activeNote } from '../../fixtures/journalFixtures';

describe('Pruebas en JournalThunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();
    const fileUpload = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('startNewNote debe de crear una nueva nota en blanco', async() => {

        const uid = 'TEST-UID';
        getState.mockReturnValue({ auth: { uid } })
        
        await startNewNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith( savingNewNote() );
        expect(dispatch).toHaveBeenCalledWith( addNewEmptyNote({
            body: '',
            title: '',
            id: expect.any( String ),
            date: expect.any( String ),
        }));
        expect(dispatch).toHaveBeenCalledWith( setActiveNote({
            body: '',
            title: '',
            id: expect.any( String ),
            date: expect.any( String ),
        }));

        // Delete data from firebase
        const collectionRef = collection( FirebaseDB, `${uid}/journal/notes` );
        const docs = await getDocs( collectionRef );

        const deletePromises = [];
        docs.forEach( doc => deletePromises.push( deleteDoc( doc.ref ) ) );

        await Promise.all( deletePromises );

    })

    test('startLoadingNotes debe de empezar a cargar las notas del usuario', async() => {

        const uid = 'TEST-UID';
        getState.mockReturnValue({ auth: { uid } })

        const notes = await loadNotes('TEST-UID')
        
        await startLoadingNotes()(dispatch, getState);

        expect( dispatch ).toHaveBeenCalledWith( setNotes(notes) );

    })

    test('startSavingNote debe de crear una nueva nota', async() => {

        const uid = 'TEST-UID';
        getState.mockReturnValue({ auth: { uid }, journal: { active: activeNote.active } })
        
        await startSavingNote()(dispatch, getState);

        expect( dispatch ).toHaveBeenCalledWith( setSaving() );
        expect( dispatch ).toHaveBeenCalledWith( updateNote( activeNote.active ) )

    })

    test('startDeletingNote debe de crear una nueva nota', async() => {

        const uid = 'TEST-UID';
        getState.mockReturnValue({ auth: { uid }, journal: { active: activeNote.active } })
        
        await startDeletingNote()(dispatch, getState);

        expect( dispatch ).toHaveBeenCalledWith( setSaving() );
        expect( dispatch ).toHaveBeenCalledWith( deleteNoteById( activeNote.active.id ) )

    })
    
})