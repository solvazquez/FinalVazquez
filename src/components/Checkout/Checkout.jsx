import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import './Checkout.css';

const Checkout = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfimarcion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");


    const manejadorSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfimarcion) {
            setError("Es necesario que todos los campos estén compleots para realizar la compra");
            return;
        }

        if (email !== emailConfimarcion) {
            setError("Los campos del e-mail deben coincidir");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.log("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden, reintente en unos minutos");
            })

    }
    return (
        <div>
            <h2 >Checkout</h2>
            <form onSubmit={manejadorSubmit} className="formulario">

            <h1 className="info" >Productos</h1>
                
                {carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p className="productoCheckout" >{producto.item.nombre}</p>
                        <p>Cantidad: {producto.cantidad}  libros</p>
                        <p>Precio: ${producto.item.precio} </p>
                        <hr />
                    </div>
                ))}

                <h1 className="info" >Datos a completar</h1>

                <div className="form-group">
                    <label htmlFor=""> Nombre </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Teléfono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> E-mail </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Confirmación del e-mail </label>
                    <input type="email" value={emailConfimarcion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button className="miBtn4" type="submit"> Finalizar compra </button>

                {
                    ordenId && (
                        <strong className="numeroOrden">Su compra ha sido realizada con éxito! Pronto podrá disfrutar de nuevas lecturas. Su número de orden es:
                        <p className="id" >{ordenId} </p>
                        </strong>
                    )
                }
            </form>
        </div>
    )
}

export default Checkout