import { useState, useEffect } from 'react'
import { getDiscos } from '../../asyncDiscos'
import ItemList from '../ItemList/ItemList'
import styles from './styles.module.css'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState([true])

    useEffect(() => {
        getDiscos()
            .then(res => {
                setProductos(res)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => setCargando(false))
    }, [])

    return (
        <>
            {cargando ? (
                <main className={styles['itemListCargando']}>
                    <h1>Cargando Discos</h1>
                    <span className={styles['loader']}></span>
                </main>
            ) : (
                <main className={styles['itemList']}>
                    <ItemList productos={productos}/>
                </main>    
                )     
            }
        </>
    )
}

export default ItemListContainer;