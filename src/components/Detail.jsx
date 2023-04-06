import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Detail() {
    const [character, setCharacter] = useState({});
    const { id } = useParams();

    useEffect(() => {    //si le pasamos el id a useEffect funciona como componentWillUnmount()
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    },[id]);
    return (
        <div>
            <>
            <h1>{character.name}</h1>
            <h3>Status : {character.status}</h3>
            <h3>Specie : {character.species}</h3>
            <h3>Gender : {character.gender}</h3>
            <h3>Created : {character.created}</h3>
            <h3>{character.origin?.name}</h3>
            {<img src={character.image} alt='' />}
            </>
        </div>
    );
}  