import { REVERSE_MODE, MENU_OPEN, KEEP_MAP } from "../actions/actions";

const initialState = {
    darkMode: false,
    isMenuOpen: false,
}

function reducer(state = initialState, action={}) {
    switch (action.type) {

        case REVERSE_MODE:
            return {
                ...state,
                darkMode: !state.darkMode,
            }

        case MENU_OPEN:
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen,
            }
        
        case KEEP_MAP:
            return {
                ...state,
                isMenuOpen: action.isMenuOpen,
            }

        default:
            return state;
    }
}
export default reducer;