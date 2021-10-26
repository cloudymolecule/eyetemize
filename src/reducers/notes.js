const notes = (state = { notes: [], errors: [], loading: false}, action) => {
    switch (action.type) {
        case 'LOADING_NOTES':
            return {
                ...state,
                notes: [...state.notes],
                loading: true
            }
        
        case 'SAVING_NOTE':
            return {
                ...state,
                notes: [...state.notes],
                loading: true
            }

        case 'ADD_NOTE':
                return {
                    ...state,
                    notes: [...state.notes, action.note],
                    errors: [],
                    loading: false
                }

        case 'ADD_NOTES':
            return {
                ...state,
                notes: action.notes,
                loading: false
            }
        
        case 'FORM_ERRORS':
            return {
                ...state,
                errors: action.formErrors,
                loading: false
            }

        case 'RESET_ERRORS':
            return {
                ...state,
                errors: [],
                loading: false
            }
        
        default:
            return state

    }
}

export default notes