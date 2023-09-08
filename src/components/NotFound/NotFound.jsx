import styles from './styles.module.scss';

const NotFound = () => {

    return (
        <div className={styles['error']}>
            <img src="/assets/404.png" alt="" />
            <h1> :( 404 Ops! No hay nada aquí</h1>
        </div>
            
    )
}

export default NotFound;