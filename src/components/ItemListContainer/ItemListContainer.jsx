import styles from './styles.module.css'

const ItemListContainer = ({ mensaje }) => {
    return (
        <main className={styles['itemList']}>
            <h1>{mensaje}</h1>
        </main>
    )
}

export default ItemListContainer;