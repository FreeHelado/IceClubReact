import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { db } from "../../firebase/client";
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [disco, setDisco] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);

    const { discId } = useParams();

    useEffect(() => {
        const obtenerDisco = async () => {
            try {
                const discoRef = doc(db, "discos", discId);
                const resp = await getDoc(discoRef);
                if (resp.exists()) {
                    setDisco({ ...resp.data(), id: resp.id });
                } else {
                    console.error("El disco no existe");
                    setError(true);
                }
            } catch (error) {
                console.error("Error al obtener el disco:", error);
                setError(true);
            } finally {
                setCargando(false);
            }
        };
        obtenerDisco();
    }, [discId]);

    if (error) {
        return (
            <main className={styles['DiscoCargando']}>
                <h1>¯\_(ツ)_/¯</h1>
                <h1>Error al obtener datos</h1>
            </main>
        )
    }

    if (cargando) {
        return (
            <main className={styles['DiscoCargando']}>
                <h1>Cargando Disco</h1>
                <span className="loader"></span>
            </main>
        )
    }

    return (  
        <ItemDetail {...disco}/>   
    )     
            
}

export default ItemDetailContainer;