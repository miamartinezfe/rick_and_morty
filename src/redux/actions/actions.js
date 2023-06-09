import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";
import axios from "axios";

export const addFav = (character) => {
    const endpoint = '/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };

 export const getFavs = () => {
   const endpoint = '/character';
   return (dispatch) => {
      axios.get(endpoint).then(({ data }) => {
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      });
   };
};

 export const removeFav = (id) => {
    const endpoint = `/fav/${id}`;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
