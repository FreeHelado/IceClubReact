import logonav from '../../../src/logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import styles from './styles.module.css'

const NavBar = () => {
    return (
        <nav>
            <img src={logonav} alt="" />
            <div className={styles['Menu']}>
            <ul>
                <li><a href="/inex.html">Discos</a></li>
                <li><a href="/inex.html">Vinilos</a></li>
                <li><a href="/inex.html">Cassettes</a></li>
                <li><a href="/inex.html">Novedades</a></li>
            </ul>
            <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;