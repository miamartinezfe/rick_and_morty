import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions/actions";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function Card({
  name,
  status,
  species,
  image,
  id,
  onClose,
  addFav,
  removeFav,
  myFavorites,
  gender,
  origin,
}) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const isFavorite = myFavorites.some((fav) => fav.id === id);
    setIsFav(isFavorite);
  }, [myFavorites, id]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else if (!isFav) {
      const search = myFavorites.find((fav) => {
        return fav.id === id;
      });
      if (!search) {
        setIsFav(true);
        addFav({ name, status, species, image, id, onClose, gender, origin });
      }
    }
  };

  return (
    <div>
      <button onClick={() => onClose(id)}>X</button>
      <span></span>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      {<img src={image} alt="" />}
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: (fav) => {
      dispatch(addFav(fav));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
