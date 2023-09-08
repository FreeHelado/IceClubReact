import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div className={styles['carrito']}>
            <Link to="/cart">
                <i className="bi bi-bag"></i>
                <span>{cantidadEnCarrito()}</span>
            </Link>
        </div>
    )
}

export default CartWidget;