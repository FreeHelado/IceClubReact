import styles from './styles.module.scss'

const CartWidget = () => {
    return (
        <div className={styles['carrito']}>
            <i className="bi bi-bag"></i>
            <span>0</span>
        </div>
    )
}

export default CartWidget;