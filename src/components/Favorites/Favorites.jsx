import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "../Card";
import { filterCards, getFavs, orderCards } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import axios from "axios";
import Cards from "../Cards";

const Favorites = (props) => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    props.getFavs();
  }, [props.myFavorites]);
  const handleGender = (event) => {
    setAux(!aux);
    const gender = event.target.value;
    dispatch(filterCards(gender));
  };
  const handleOrder = (event) => {
    setAux(!aux);
    const orden = event.target.value;
    dispatch(orderCards(orden));
  };
  return (
    <div>
      <div>
        <select onChange={handleOrder}>
          <option>Please choose one option</option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <span> Filter By ID </span>
        <select onChange={handleGender}>
          <option>Please choose one option</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        <span> Filter By Gender </span>
        <hr></hr>
      </div>
      <div>
        {props.myFavorites.map(
          ({ name, status, species, gender, origin, image, id }) => {
            return (
              <Card
                onClose={props.onClose}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin?.name}
                image={image}
                id={id}
                key={id}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export function mapStateToProps({ myFavorites }) {
  return {
    myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getFavs: () => {
      dispatch(getFavs());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
