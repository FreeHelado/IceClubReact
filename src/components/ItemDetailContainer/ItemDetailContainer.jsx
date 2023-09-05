import { useState, useEffect } from 'react';
import { getDiscoById } from '../../asyncDiscos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';

const ItemDetailContainer = () => {
    const [disco, setDisco] = useState(null)
    const [cargando, setCargando] = useState([true])

    const { discId } = useParams();

    useEffect(() => {
        getDiscoById(discId)
            .then(res => {
                setDisco(res)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => setCargando(false))
    }, [discId])

    return (
        <>
            {cargando ? (
                <main className={styles['DiscoCargando']}>
                    <h1>Cargando Disco</h1>
                    <span className="loader"></span>
                </main>
            ) : (
                <ItemDetail {...disco}/>   
                )     
            }
        </>
    )
}

export default ItemDetailContainer;