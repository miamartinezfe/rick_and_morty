import './App.css';
import axios from "axios";
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id) {
      console.log(id);
      setCharacters(characters.filter((character) => {
         return character.id !== parseInt(id, 10);
      }

      ))
   }
   return (
      <div className='App'>
         <Nav onSearch={onSearch}></Nav>
         <Cards onClose={onClose} characters = {characters}/>
      </div>
   );
}

export default App;
