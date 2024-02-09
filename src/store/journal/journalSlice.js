import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'abc',
        //     title: '',
        //     body: '',
        //     date: 1234,
        //     imageUrls: []
        // }
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action ) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: ( state, action ) => {
            state.notes = action.payload;
        },
        setSaving: ( state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: ( state, action ) => {

            state.notes = state.notes.map( (note) => (
                ( note.id === action.payload.id )
                ? action.payload
                : note
            ))

            state.isSaving = false;

            state.messageSaved = `${action.payload.title}`;

        },
        setPhotosToActiveNote: ( state, action ) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        },
        deleteNoteById: ( state, action ) => {

        },
        clearNotesLogout: (state) => {
            state.isSaving = false,
            state.messageSaved = '',
            state.notes = [],
            state.active = null
        }
    }
});
        
// Action creators are generated for each case reducer function
export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, clearNotesLogout, setPhotosToActiveNote } = journalSlice.actions;