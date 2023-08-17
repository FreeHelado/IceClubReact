import DiscogItem from "../DiscogItem/DiscogItem";
import styles from './styles.module.css';

const DiscogList = ({ collection, precioInterno }) => {
    return (
        <section className={styles['discogs']}>
            {collection.map((release) => (
                <DiscogItem key={release.id} release={release} precioInterno={precioInterno} />
            ))}
        </section>
    );
}

export default DiscogList;