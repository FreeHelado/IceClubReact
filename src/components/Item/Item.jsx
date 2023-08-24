import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Item = ({id, titulo, artista, categoria, anio, sello, genero, img, precio}) => {
    return (
        <div className={styles['disco']}>
            <figure>
                <img src={img} alt={titulo} />
            </figure>
            <div className={styles['discos__info']}>
                <h2>{titulo} - {artista}</h2>
                <h3>$ {precio}</h3>
                <div className={styles['discos__info--detalle']}>
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