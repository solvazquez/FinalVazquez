import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div>
        <h4 className="nombreLibro" > {item.nombre} </h4>
        <h4 className="nombreAutor" > - {item.autor} </h4>
        <p> Cantidad: {cantidad} </p>
        <p> Precio por unidad: $ {item.precio} </p>
        <button className="btnEliminar" onClick={()=> eliminarProducto(item.id)}> Eliminar </button>
        <hr />
    </div>
  )
}

export default CartItem