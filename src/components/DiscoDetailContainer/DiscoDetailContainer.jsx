import { useState, useEffect } from 'react';
import { getDiscoById } from '../../asyncDiscos';
import Disco from '../Disco/Disco';
import { useParams } from 'react-router-dom';

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
                <main>
                    <h1>Cargando Disco</h1>
                </main>
            ) : (
                <Disco {...disco}/>   
                )     
            }
        </>
    )
}

export default DiscoDetailContainer;