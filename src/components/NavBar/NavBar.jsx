import logonav from '../../../src/logo.svg';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav>
            <img src={logonav} alt="" />
            <div className="Menu">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Catálogo</a></li>
                <li><a href="#">Novedades</a></li>
            </ul>
            <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;