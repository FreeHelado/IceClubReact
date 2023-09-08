import styles from './styles.module.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {

    const { carrito } = useContext(CartContext);

    return (
        <div className={styles['micarrito']}>
            <h1>Mi Carrito</h1>
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
                        </div>
                    </div> 
                ))
            }
            </section>
        </div>
    )
}

export default Cart;