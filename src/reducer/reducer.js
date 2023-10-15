import { REVERSE_MODE } from "../actions/actions";

const initialState = {
    darkMode: false,
}

function reducer(state = initialState, action={}) {
    switch (action.type) {

        case REVERSE_MODE:
            return {
                ...state,
                darkMode: !state.darkMode,
            }

        default:
            return state;
    }
}
export default reducer;