import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./";
import { loadNotes } from "../../helpers/loadNotes";

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

        // TODO: generate the dispatch( newNote ) and activeNote

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