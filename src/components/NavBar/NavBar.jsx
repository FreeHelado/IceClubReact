import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import styles from './styles.module.css';

const NavBar = () => {
    const [scrollBackground, setScrollBackground] = useState(false);

    const handleScroll = () => {
        setScrollBackground(window.scrollY > 60 ? true : false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.nav} ${scrollBackground ? styles.scrollBackground : ''}`}>
            <Link to="/"><img src="/assets/logo.svg" alt="IceCLub" /></Link>
            <div className={styles['menu']}>
                <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/categoria/Vinilo">Vinilos</Link></li>
                <li><Link to="/categoria/Simple">Simples</Link></li>
                <li><Link to="/categoria/CD">Discos</Link></li>
                <li><Link to="/categoria/Cassette">Cassettes</Link></li>
                
            </ul>
            <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;