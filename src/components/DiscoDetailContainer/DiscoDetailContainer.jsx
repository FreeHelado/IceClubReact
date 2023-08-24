import { useState, useEffect } from 'react';
import { getDiscoById } from '../../asyncDiscos';
import Disco from '../Disco/Disco';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';

const DiscoDetailContainer = () => {
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
                <Disco {...disco}/>   
                )     
            }
        </>
    )
}

export default DiscoDetailContainer;