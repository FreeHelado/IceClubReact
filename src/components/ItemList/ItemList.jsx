import styles from './styles.module.css'
import Item from '../Item/Item';

const ItemList = ({ discos }) => {
    return (
        <section className={styles['discos']}>
            {discos.map(disco => <Item key={disco.id} {...disco} />)}
        </section>
    )
}

export default ItemList;