import styles from './styles.module.css'

const CartWidget = () => {
    return (
        <div className={styles['carrito']}>
            <i class="bi bi-bag"></i>
            <span>0</span>
        </div>
    )
}

export default CartWidget;