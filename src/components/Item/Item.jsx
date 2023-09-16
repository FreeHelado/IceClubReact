import styles from './styles.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const Item = ({id, titulo, artista, categoria, anio, sello, genero, img, precio}) => {
    
    const navigate = useNavigate();
    const redirectToDisco = () => {
        navigate(`/disco/${id}`);
    };
    
    return (
        <div className={styles['disco']} onClick={redirectToDisco}>
            <figure>
                <img src={img} alt={titulo} />
            </figure>
            <div className={styles['disco__info']}>
                <h2>{titulo} - {artista}</h2>
                <h3>$ {precio}</h3>
                <div className={styles['disco__info--detalle']}>
                    <span>{categoria}</span>
                    <span>{anio}</span>
                    <span>{genero}</span>
                    <span>{sello}</span>
                </div>
                <Link to={`/disco/${id}`}>Ampliar</Link>
            </div>
        </div>
    )
}

export default Item;