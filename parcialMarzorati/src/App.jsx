import Card from "./Componentes/Card";
import Form from "./Componentes/Form";
import "./App.css";
import { useState } from "react";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
const [datos,setDatos]= useState()

const handleSubmit = (formData) => {
  setDatos(formData);
};

  
  return (
    <div className="App">    
            
              <>
              <div className="cards">
                <Form onSubmit={handleSubmit} />
                {datos && <Card nombre={datos.nombre} color={datos.color} />}
              </div></>
                    
         
      
    </div>
  
  );
        }





export default App;