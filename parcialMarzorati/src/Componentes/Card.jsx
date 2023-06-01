//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
const Card = (datos) => {

    return (
      <div>
                <h2>Hola {datos.nombre}</h2>
                <p>Tu color favorito es:</p>
                <button>{datos.color}</button>         
      </div>
    );
  }
  
  export default Card;

