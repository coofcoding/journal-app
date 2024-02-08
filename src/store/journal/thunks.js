import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        
        dispatch( savingNewNote( ) );

        const { uid } = getState().auth;

        // user: uid

        const InstanceDate = new Date();

        const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        let actualDate = `${("0" + InstanceDate.getDate()).slice(-2)} ${ monthsList[ InstanceDate.getMonth() ] } ${InstanceDate.getFullYear()}`;

        const newNote = {
            title: '',
            body: '',
            date: actualDate,
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );

    }
}

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        
        const notes = await loadNotes( uid );
        
        dispatch( setNotes( notes ) )
    }
}

export const startSavingNote = () => {
    return async( dispatch, getState ) => {
        
        dispatch( setSaving() );
        
        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };

        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}` )
        await setDoc( docRef, noteToFireStore, { merge: true } );
        
        dispatch( updateNote(note) )
    }
}

export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {

        dispatch( setSaving() );

        await fileUpload(files[0]);

    }
}