import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { db } from "../../firebase/client";
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [disco, setDisco] = useState(null)
    const [cargando, setCargando] = useState([true])

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
                }
            } catch (error) {
                console.error("Error al obtener el disco:", error);
            } finally {
                setCargando(false);
            }
        };

        obtenerDisco();
    }, [discId]);

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