import React from "react";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      onSearch(id);
      setId("");
    }
  };
  return (
    <div>
      <input
        type="search"
        onChange={handleChange}
        onKeyDown={handleEnter}
        value={id}
      />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        Agregar
      </button>
    </div>
  );
}
