import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Nav (props) {
    const location = useLocation();
    if (location.pathname==="/") return <></>
    else return (
        <>
        <Link to={"/about"}><button>About</button></Link>
        <Link to={"/home"}><button>Home</button></Link>
        <Link to={"/Favorites"}><button>Favorites</button></Link>
        <SearchBar onSearch={props.onSearch} />        
        <hr></hr>
        </>
    );
}