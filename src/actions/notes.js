// export const addNote = note => ({
//     type: 'ADD_NOTE',
//     note
// })

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
        .then(data => {
            console.log(data)
        })
    }
}

export const deleteNote = id => {
    return (dispatch) => {
        let nObj = {id}
        let configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(pObj)
        }
        fetch('http://127.0.0.1:3000/notes', configObj)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })       
    }
}
