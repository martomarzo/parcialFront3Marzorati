import Card from "./Componentes/Card"
import Form from "./Componentes/Form";
import "./App.css";
import { useState } from "react";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
const [datos,setDatos]= useState({
  nombre:'',
  color:''

})
  return (
    <div className="App">

      <Form datos={datos} setDatos={setDatos}/>
      <Card datos={datos} setDatos={setDatos}/>
      
    </div>
  );
}

export default App;