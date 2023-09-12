import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import styles from './styles.module.scss';
import { db } from "../../firebase/client";
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

    const [discos, setDiscos] = useState([]);
    const [cargando, setCargando] = useState([true]);
    const categoria = useParams().categoria;
    
    useEffect(() => {
        const discosRef = collection(db, "discos");
        const q = categoria ? query(discosRef, where("categoria", "==", categoria)) : discosRef;
        try {
            getDocs(q)
                .then((resp) => {
                    setDiscos(
                        resp.docs.map((doc) => {
                            return { ...doc.data(), id: doc.id }
                        })
                    );
                    setCargando(false);
                })
                .catch(error => {
                    console.error("Error al obtener datos:", error);
                    setCargando(false); 
                });
            } catch (error) {
            console.error("Error al obtener datos:", error);
            setCargando(false); 
        }
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