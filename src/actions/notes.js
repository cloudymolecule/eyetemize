export const fetchNotes = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_NOTES' })
        fetch('http://127.0.0.1:3000/notes')
        .then(res => res.json())
        .then(notes => {
            dispatch({ type: 'ADD_NOTES', notes})
        })
    }
}

export const postNote = note => {
    return (dispatch) => {
        dispatch({ type: 'SAVING_NOTE' })
        fetch('http://127.0.0.1:3000/notes', {method: 'POST', body: note})
        .then(res => res.json())
        
    }
}

export const deleteNote = id => {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/notes/${id}`, { method: 'DELETE' })
        .then(note => dispatch({ type: 'DELETE_NOTE', note}))
    }
}

export const editNote = note => {
    console.log(note)
    return (dispatch) => {
        dispatch({ type: 'SAVING_NOTE' })
        fetch(`http://127.0.0.1:3000/notes/${note.id}`, {method: 'PATCH', body: note})
        .then(res => res.json())
    }
}