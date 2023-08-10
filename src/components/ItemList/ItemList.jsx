import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import Item from '../Item/Item';

const ItemList = ({ productos }) => {
    return (
        <section className={styles['Discos']}>
            {productos.map(prod => <Item key={prod.id} {...prod} />)}  
        </section>
    )
}

export default ItemList;