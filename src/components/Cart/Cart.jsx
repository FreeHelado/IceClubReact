import styles from './styles.module.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cart = () => {

    const alertaVaciado = () => {
        Swal.fire({
            title: 'Vaciar Carrito',
            text: '👀 ¿Estás seguro que quieres vaciar el Carrito?',
            icon: 'warning',
            showDenyButton: true,
            denyButtonText: "No",
            confirmButtonText: "Si",

        }).then(response => {
            if (response.isConfirmed) {
                Swal.fire('👌¡Listo!', 'El carrito se vació correctamente', 'success');
                vaciarCarrito();
            } else {
                Swal.fire('(◕‿◕)', 'No pasa nada, seguí con tu compra');
            }
        })
    }
    
    const alertaEliminado = (id, titulo) => {
        Swal.fire({
            title: 'Eliminar del Carrito',
            text: '👀 ¿Estás seguro que quieres eliminar ese disco del carro?',
            icon: 'warning',
            showDenyButton: true,
            denyButtonText: "Noooo!",
            confirmButtonText: "Si, borrar",

        }).then(response => {
            if (response.isConfirmed) {
                Swal.fire('👌¡Listo!', 'El disco ya no está en tu carrito', 'success');
                eliminarDelCarrito(id);
            } else {
                Swal.fire('(◕‿◕)', 'No pasa nada, seguí con tu compra');
            }
        })
    }

    const { carrito, precioTotal, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext);
    
    const handleVaciarCarrito = () => {
        alertaVaciado();
    }

    const handleEliminar = (id) => {
        alertaEliminado(id);
    };


    return (
        <div className={styles['micarrito']}>
            <h1>Mi Carrito</h1>
            { carrito.length > 0 ?
            <section className={styles['micarrito__lista']}>
                {
                    carrito.map((prod) => (
                        <div key={prod.id} className={styles['micarrito__lista--card']}>
                            <figure>
                                <img src={prod.img} alt={prod.titulo} />
                            </figure>
                            <div className={styles['micarrito__lista--card--info']}>
                                <h2>{prod.titulo}</h2>
                                <h3>{prod.artista}</h3>
                                <div className={styles['micarrito__lista--card--info--precio']}>
                                    <span>$ {prod.precio}</span>
                                    <span>x {prod.cantidad}</span>
                                </div>
                                <h2>Total: $ {prod.precio * prod.cantidad}</h2>
                                <i className="bi bi-x-lg" onClick={() => handleEliminar(prod.id)}></i>
                            </div>
                        </div> 
                    ))
                }
                    <div className={styles['micarrito__lista--totales']}>
                        <h1>Precio Total: $ {precioTotal()}</h1>
                        <div className={styles['micarrito__lista--totales--btn']} >
                            <Link to="/checkout" >
                                <i className="bi bi-music-note"></i>
                                <span>CONTINUAR COMPRA</span>
                            </Link>
                        </div>
                    </div>
                    <div onClick={handleVaciarCarrito} className={styles['micarrito__lista--vaciar']}>
                        <i className="bi bi-trash"></i>
                        <span>Vaciar Carrito</span>
                    </div>
            </section> :
            <section className={styles['micarrito__vacio']}>
                <h1>( ͡° ͜ʖ ͡°) </h1>
                <h2>No hay nada en tu carrito</h2>
            </section>
            }    
                
        </div>
    )
}

export default Cart;