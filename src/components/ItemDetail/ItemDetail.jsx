import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

//Importamos el CarritoContext: 
import { CarritoContext } from '../../context/CarritoContext';
//Importo el Hook useContext: 
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, autor, precio, img, stock }) => {
  //1) Creamos un estado con la cantidad de productos agregados: 
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //useContext: 
  const {agregarProducto} = useContext(CarritoContext);

  //2) Creamos una función manejadora de la cantidad: 

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id, nombre, autor, precio}; 
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>{nombre} </h2>
      <h3>{autor}</h3>
      <p className='precio' >${precio} </p>
      
      
      <img className='imgDetail' src={img} alt={nombre} />

      <p className='isbn' >ISBN: {id} </p>

      <p className='sinopsis' >Sinopsis</p>
      <p className='textoSinopsis' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio eveniet facere maiores quo tempore quisquam! Consectetur dolores quos ducimus maiores quam quae, eveniet voluptatibus beatae, nemo cumque tempore modi?</p>
      {
        agregarCantidad > 0 ? (<Link className='miBtn2' to="/cart"> Ver mi carrito </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail