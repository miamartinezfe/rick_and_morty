import Card from './Card';
import React from 'react';

export default function Cards(props) {
   
   return (
      <div>
         {props.characters.map(({ name, status, species, gender, origin, image, id }) => {
            return (<Card 
               onClose={props.onClose}
               name={name} 
               status={status} 
               species={species} 
               gender={gender} 
               origin={origin.name} 
               image={image} 
               id = {id}
               key = {id}               
               />)
         }

         )}
      </div>
   )
}


