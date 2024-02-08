import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        imageUrls: [],
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
        },
        setNotes: ( state, action ) => {
            state.notes = action.payload;
        },
        setSaving: ( state ) => {
            state.isSaving = true;
            // TODO: mensaje de error
        },
        updateNote: ( state, action ) => {

            state.notes = state.notes.map( (note) => (
                ( note.id === action.payload.id )
                ? action.payload
                : note
            ))

            state.isSaving = false;

        },
        deleteNoteById: ( state, action ) => {

        },
    }
});
        
// Action creators are generated for each case reducer function
export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions;