export const addNote = note => ({
    type: 'ADD_NOTE',
    note
})

export const fetchNotes = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_NOTES' })
        fetch('http://localhost:3000/notes')
        .then(res => res.json())
        .then(notes => {
            dispatch({ type: 'ADD_NOTES', notes})
        })
    }
}

export const postNote = note => {
    return (dispatch) => {
        dispatch({ type: 'SAVING_NOTE' })
        fetch('http://localhost:4000/notes', {method: 'POST', body: note})
        .then(res => res.json())
        .then(data => {
            // if (data.errors) {
                // dispatch({ type: 'FORM_ERRORS', formErrors: data.errors})
            // } else {
                dispatch({ type: 'ADD_PROPERTY', note})
            // }
           
        })
    }
}
