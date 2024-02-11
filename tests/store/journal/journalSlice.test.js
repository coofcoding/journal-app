import { addNewEmptyNote, journalSlice, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "../../../src/store/journal/journalSlice";
import { getUserNotes, initialState } from "../../fixtures/journalFixtures";

describe('Pruebas a journalSlice', () => {

    test('debe de llamar el estado inicial y llamarse journal', () => {

        expect(journalSlice.name).toBe('journal');

        const state = journalSlice.reducer(initialState, {});

        expect(state).toEqual(initialState);

    })

    test('debe de llamar el savingNewNote', () => {

        const state = journalSlice.reducer(initialState, savingNewNote());

        expect(state).toEqual({
            ...initialState,
            isSaving: true
        })
    })

    test('debe de llamar el addNewEmptyNote', () => {

        const newNote = {
            title: '',
            body: '',
            date: '05 February 2024'
        }

        const state = journalSlice.reducer(initialState, addNewEmptyNote(newNote));

        expect(state).toEqual({
            isSaving: false,
            messageSaved: '',
            notes: [newNote],
            active: null
        })
    })

    test('debe de llamar el setActiveNote', () => {

        const state = journalSlice.reducer(getUserNotes, setActiveNote(getUserNotes.notes[0]));

        expect(state).toEqual({
            ...getUserNotes,
            active: getUserNotes.notes[0]
        })

    })

    test('debe de llamar el setNotes', () => {

        const note = [
            {
                id: 'abc',
                title: 'First Note',
                body: 'Description of the first Note',
                date: '03 February 2024',
                imageUrls: ["imagen1.jpg", "imagen1.jpg"]
            },
            {
                id: 'abc123',
                title: 'Second Note',
                body: 'Description of the second Note',
                date: '04 February 2024',
                imageUrls: [ "logo.jpg", "image.jpg" ]
            }
        ]

        const state = journalSlice.reducer(initialState, setNotes(note));

        expect(state).toEqual(getUserNotes)

    })

    test('debe de llamar el setSaving', () => {

        const state = journalSlice.reducer(initialState, setSaving());

        expect(state).toEqual({
            ...initialState,
            isSaving: true,
            messageSaved: ''
        })

    })

    test('debe de llamar el updateNote', () => {

        const noteToUpdate = {
            id: 'abc',
            title: 'updated First Note',
            body: 'updated the description of the first note',
            date: '03 February 2024',
            imageUrls: [ "imagen1.jpg", "imagen1.jpg" ],
        };

        const state = journalSlice.reducer(getUserNotes, updateNote(noteToUpdate));

        expect( state ).toEqual({
            ...getUserNotes,
            notes: [ noteToUpdate, getUserNotes.notes[1] ],
            messageSaved: noteToUpdate.title
        })

    })

})