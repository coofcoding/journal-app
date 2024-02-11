export const initialState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
}

export const savingState = {
    isSaving: true,
    messageSaved: '',
    notes: [],
    active: null,
}

export const getUserNotes = {
    isSaving: false,
    messageSaved: '',
    notes: [
        {
            id: 'abc',
            title: 'First Note',
            body: 'Description of the first Note',
            date: '03 February 2024',
            imageUrls: [ "imagen1.jpg", "imagen1.jpg" ]
        },
        {
            id: 'abc123',
            title: 'Second Note',
            body: 'Description of the second Note',
            date: '04 February 2024',
            imageUrls: [ "logo.jpg", "image.jpg" ]
        }
    ],
    active: null,
}

export const activeNote = {
    isSaving: false,
    messageSaved: '',
    notes: [
        {
            id: 'abc',
            title: 'First Note',
            body: 'Description of the first Note',
            date: '03 February 2024',
            imageUrls: [ "imagen1.jpg", "imagen1.jpg" ]
        },
        {
            id: 'abc123',
            title: 'Second Note',
            body: 'Description of the second Note',
            date: '04 February 2024',
            imageUrls: [ "logo.jpg", "image.jpg" ]
        }
    ],
    active: {
        id: 'abc',
        title: 'First Note',
        body: 'Description of the first Note',
        date: '03 February 2024',
        imageUrls: [ "imagen1.jpg", "imagen1.jpg" ]
    }
}