import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import styles from './styles.module.scss';
import { db } from "../../firebase/client";
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [discos, setDiscos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    
    const categoria = useParams().categoria;
    
    const getDiscos = async (q) => {
        try {
            const resp = await getDocs(q);
            setDiscos(
                resp.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }))
            );
        } catch (error) {
            console.error("Error al obtener datos:", error);
            setError(true);
        } finally {
            setCargando(false);
        }
    };
    
    useEffect(() => {
        const discosRef = collection(db, "discos");
        const q = categoria ? query(discosRef, where("categoria", "==", categoria)) : discosRef;
        
        getDiscos(q);
    }, [categoria]);

    if (error) {
        return (
            <main className={styles['itemListCargando']}>
                <h1>¯\_(ツ)_/¯</h1>
                <h1>Error al obtener datos</h1>
            </main>
        )
    }

    if (cargando) {
        return (
            <main className={styles['itemListCargando']}>
                <h1>Cargando Discos</h1>
                <span className={styles['loader']}></span>
            </main>
        )
    }

    return (
        <main className={styles['itemList']}>
            <ItemList discos={discos}/>
        </main>    
    )
}

export default ItemListContainer;
