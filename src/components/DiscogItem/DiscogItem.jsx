import styles from './styles.module.css';

const DiscogItem = ({ release, precioInterno }) => {
    return (
        <div className={styles['discog']} key={release.id}>
            <figure>
                {release.basic_information.cover_image && (
                    <img src={release.basic_information.cover_image} alt={release.basic_information.title} />
                )}
            </figure>
            <div className={styles['discogs__info']}>
                <h2>{release.basic_information.title} - {release.basic_information.artists[0].name}</h2>
                <h3>$ {precioInterno[release.id] || 'N/A'}</h3>
                <div className={styles['discogs__info--detalle']}>
                    <span>{release.basic_information.year || 'N/A'}</span>
                    <span>{release.basic_information.formats[0].name} {release.basic_information.formats[0].descriptions[0]}</span>
                    <span>{release.basic_information.labels[0].name}</span>
                    <span>{release.basic_information.genres[0]}</span>
                </div>
                <button>Lo quiero</button>
              
            </div>
        </div>
    );
};

export default DiscogItem;