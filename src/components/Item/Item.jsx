import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, autor, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3 className='nombreProducto' >{nombre} </h3>
        <p className='autor' > {autor} </p>
        <p className='precio' > ${precio} </p>


        <Link className='btnProducto' to={`/item/${id}`}> Comprar </Link>
        
        <p className='isbn' >ISBN: {id} </p>
       
        {/* En vez de ID puse "ISBN" pues es un identificador único para libros,
        y me pareció que iba perfecto con la temática de mi web.​ */}

    </div>
  )
}

export default Item