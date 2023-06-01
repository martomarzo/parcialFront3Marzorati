import { useState } from "react";
import "../App.css";

// eslint-disable-next-line react/prop-types
const Form=({onSubmit}) => {

    const [nombre, setNombre] = useState("");

    const [color, setColor] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (x) => {

    x.preventDefault();

    if (nombre.trim().length < 3 || /^\s/.test(nombre)) {
      setError('El nombre no puede ser menor a 3 caracteres');
      return;
    }

    if (color.length < 3) {
      setError('El color no puede ser menor de 3 caracteres');
      return;
    }

    onSubmit({ nombre, color });
    setError('');
    setNombre('');
    setColor('');
  };

    return (


    <div>
        <form className = "form-container" onSubmit={handleSubmit}>
            <div>

                <h1>Tu color favorito</h1>
                <label>Tu nombre</label>
                <input type="text" placeholder="" value={nombre} onChange={(x) => {
                    setNombre(x.target.value);
                    }}/>


                <label>Tu color favorito</label>
                <input type="text" value={color} placeholder="" onChange={(x) => {
                  setColor(x.target.value)
                }}/>


                <button type="submit">Enviar</button>
            </div>
            {error && <p>{error}</p>}
        </form>
                
    </div>
    )
            }
    
    
    


export default Form;