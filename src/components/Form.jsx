import React from "react";
import logo from "./logo/RM.png"
import { useState } from "react";
import validation from "../validation";
import { useNavigate } from "react-router-dom";

export default function Form({email,password,setAccess}) {
    const navigate = useNavigate();
    const [userData,setUserData] = useState({email:"",password:""})
    const [errors,setErrors] = useState({email:"",password:""})

    
    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name] : event.target.value,
        })
        setErrors(validation({...userData,[event.target.name] : event.target.value}))
    }

    const login = (event) => {
        event.preventDefault();
        if (userData?.email === email && userData?.password === password) {
            setAccess(true); 
            navigate("/home");
        }
        else alert('Password o contrasena incorrectos');
    }

    return (
        <form onSubmit={login}>
            <img src={logo} alt="" width={300} height={300}/>
            <div/>
            <label>Email</label>
            <input
            name="email"
            placeholder='Escribe tu email...'
            type="text"
            value={userData.email}
            onChange = {handleChange}
            ></input>
            <p>{errors.email}</p>
            <div/>
            <label>Password</label>
            <input
            name="password"
            placeholder='Escribe tu contrasena...'
            type="text"
            value={userData.password}
            onChange = {handleChange}
            ></input>
            <p>{errors.password}</p>
            <div/>
            <button type='submit' >Enviar</button>
        </form>
    );
}