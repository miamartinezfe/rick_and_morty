import React from "react"
import { connect } from "react-redux";
import Card from "../Card";

const Favorites = (props) => {

    return (
        <div>
         {props.myFavorites.map(({ name, status, species, gender, origin, image, id }) => {
            return (<Card 
               onClose={props.onClose}
               name={name} 
               status={status} 
               species={species} 
               gender={gender} 
               origin={origin?.name} 
               image={image} 
               id = {id}
               key = {id}               
               />)
         }

         )}
      </div>
    )
}

export function mapStateToProps({myFavorites}) {
    return {
       myFavorites,
    }
 }

 export default connect(mapStateToProps, null)(Favorites);