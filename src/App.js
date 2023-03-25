import './App.css';
import axios from "axios";
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/view/About';
import Detail from './components/Detail';
import Form from './components/Form';

function App() {   
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   const email = "miguel@prueba.com"
   const password = "abc123"
   console.log(access);
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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
         <Routes>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters} />}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
            <Route path='/' element={<Form setAccess = {setAccess} email = {email} password = {password}></Form>}></Route>
         </Routes>
      </div>
   );
}

export default App;
