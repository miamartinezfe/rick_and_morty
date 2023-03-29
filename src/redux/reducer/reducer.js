import { ADD_FAV, REMOVE_FAV } from "../actions/types"
const initialState = {
    myFavorites: []
}
export const rootReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case ADD_FAV:
            
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            };

        case REMOVE_FAV:
            
            return {
                ...state,
                myFavorites: state.myFavorites.filter((fav) => {
                    return fav.id !== action.payload;
                })
            };

        default:
            return state;
    }
    
}
