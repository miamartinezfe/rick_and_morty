export default function validation({email,password}){
    const errors = {}
    if (!email) {
        errors.email = "Introduzca un email";
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        if (email.length>35) errors.email = "El usuario no puede tener mas de 35 caracteres"
    }
    else errors.email = "Introduzca un correo valido";

    if (password.length<6 || password.length>10) errors.password = "La contrasena debe ser de al menos 6 caracteres y maximo 10";
    else if (!(/\d/.test(password))) errors.password = "Debe tener al menos un numero";
    return errors;
}