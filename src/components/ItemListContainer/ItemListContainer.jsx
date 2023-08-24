import { useState, useEffect } from 'react';
import { getDiscos } from '../../asyncDiscos';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import styles from './styles.module.css';

const ItemListContainer = () => {
    const [discos, setDiscos] = useState([]);
    const [cargando, setCargando] = useState([true]);
    const categoria = useParams().categoria;

    useEffect(() => {
        getDiscos()
            .then((res) => {
                if (categoria) {
                    setDiscos(res.filter((discos) => discos.categoria === categoria));
                } else {
                    setDiscos(res);
                }
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => setCargando(false));
    }, [categoria]);

    return (
        <>
            {cargando ? (
                <main className={styles['itemListCargando']}>
                    <h1>Cargando Discos</h1>
                    <span className={styles['loader']}></span>
                </main>
            ) : (
                <main className={styles['itemList']}>
                    <ItemList discos={discos}/>
                </main>    
                )     
            }
        </>
    )
}

export default ItemListContainer;