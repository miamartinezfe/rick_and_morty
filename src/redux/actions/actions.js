import { ADD_FAV, REMOVE_FAV,FILTER,ORDER } from "./types";

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

export const filterCards = (gender) => {
    return {
        type:FILTER,
        payload:gender
    }
}

export const orderCards = (order) => {
    return {
        type:ORDER,
        payload:order
    }
}