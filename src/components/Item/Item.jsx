import styles from './styles.module.css'

const Item = ({id, titulo, artista, categoria, anio, img, precio}) => {
    return (
        <div className={styles['disco']}>
            <figure>
                <img src={img} alt={titulo} />
            </figure>
            <div className={styles['discos__info']}>
                <h2>{titulo} - {artista}</h2>
                <h3>{precio} USD</h3>
                <div className={styles['discos__info--detalle']}>
                    <span>{categoria}</span>
                    <span>{anio}</span>
                </div>
                <button>Lo quiero</button>
            </div>
        </div>
    )
}

export default Item;