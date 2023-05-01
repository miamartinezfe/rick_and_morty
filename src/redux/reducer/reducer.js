import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GETFAVS } from "../actions/types";
const initialState = {
  myFavorites: [],
  allCharacters: [],
};
export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };

    case REMOVE_FAV:
      return { ...state, myFavorites: payload };

    case FILTER: {
      const copia = [...state.allCharacters];
      return {
        ...state,
        myFavorites: copia.filter((char) => {
          return char.gender === payload;
        }),
      };
    }

    case ORDER: {
      const copia = [...state.allCharacters];
      if (payload === "A") copia.sort((char1, char2) => char1.id - char2.id);
      else if (payload === "D")
        copia.sort((char1, char2) => char2.id - char1.id);
      return {
        ...state,
        myFavorites: copia,
      };
    }

    case GETFAVS: {
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };
    }
    default: {
      return state;
    }
  }
};
