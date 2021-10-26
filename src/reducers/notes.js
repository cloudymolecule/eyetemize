const notes = (state = { notes: [], errors: [], loading: false}, action) => {
    switch (action.type) {
        case 'LOADING_NOTES':
            return {
                ...state,
                notes: [...state.notes],
                loading: true
            }
    }
}