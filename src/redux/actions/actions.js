import { ADD_FAV, REMOVE_FAV } from "./types";

export const addFav = (fav) => {
    return {
        type:ADD_FAV,
        payload:fav
    }
}

export const removeFav = (id) => {
    return {
        type:REMOVE_FAV,
        payload:id
    }
}