import { useState } from "react";
import "./Form.css" 

function Form(){

    const [nombre,setNombre] = useState("");
    const [edad,setEdad] = useState(0);
    const [pokemon,setPokemon] = useState("");


    function handleNombre(e){
        setNombre(e.target.value);
    }

    function handleEdad(e){
        setEdad(e.target.value);
    }

    function handlePokemon(e){
        setPokemon(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        alert("Los datos fueron enviados");
        console.log(nombre);
        console.log(edad);
        console.log(pokemon);

        setTimeout(e.target.reset(),5000)
    }


    return(
        
        <form onSubmit={handleSubmit}>

        <h3>Registro de pokemon favorito</h3>

        <input type="text" placeholder="Ingresa tu nombre" onChange={handleNombre} />

        <input type="number" placeholder="Ingresa tu edad" onChange={handleEdad} />

        <input type="text" placeholder="Ingresa tu pokemon favorito" onChange={handlePokemon} />

        <input type="submit" value="Enviar formulario" />

        </form>
        
)

}

export default Form;