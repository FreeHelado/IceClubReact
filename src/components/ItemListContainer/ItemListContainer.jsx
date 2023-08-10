import { useState, useEffect } from 'react'
import { getDiscos } from '../../asyncDiscos'
import ItemList from '../ItemList/ItemList'
import styles from './styles.module.css'

const ItemListContainer = ({ mensaje }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getDiscos()
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <main className={styles['itemList']}>
            <ItemList productos={productos}/>
            {/* <h1>{mensaje}</h1> */}
        </main>
    )
}

export default ItemListContainer;