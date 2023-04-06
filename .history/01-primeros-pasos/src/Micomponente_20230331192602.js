import react from "react";

const Micomponente = () =>{
    const usuario = {
        nombre:"Damián",
        apellidos:"Bermúdez",
        web:"https://damianbermudezdev.es/"

    }
    return (
    <div>
        <h1>Hola! Soy desarrollador web full Stack</h1>
        <h2>Datos del usuario:</h2>
        <ul>
            <li>nombre:<strong>{usuario.nombre}</strong></li>
            <li>apellidos:<strong>{usuario.apellidos}</strong></li>
            <li><a href="https://damianbermudezdev.es/"></a></li>
        </ul>
        <br></br>
        <p>Hola, soy Damián Bermúdez</p>
    </div>
    
    )
}
export default Micomponente;