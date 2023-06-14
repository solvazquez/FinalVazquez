import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2> No tiene artículos en su carrito de compras. </h2>
                <Link className="miBtn2" to='/'> Ver productos </Link>
            </>
        )
    }
    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <div className="total" >
                <p>Total: ${total} </p>
                <p>Cantidad total: {cantidadTotal} </p>
            </div>
            <button className="miBtn2" onClick={() => vaciarCarrito()}> Vaciar carrito </button>
            <Link className="miBtn2" to='/checkout'> Finalizar Compra </Link>

        </div>
    )
}

export default Cart