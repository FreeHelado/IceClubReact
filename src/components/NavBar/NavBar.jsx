import React, { useState, useEffect } from 'react';
import logonav from '../../../src/logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import styles from './styles.module.css'

const NavBar = () => {
    const [scrollBackground, setScrollBackground] = useState(false);

    const handleScroll = () => {
        setScrollBackground(window.scrollY > 200 ? true : false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.nav} ${scrollBackground ? styles.scrollBackground : ''}`}>
            <img src={logonav} alt="" />
            <div className={styles['menu']}>
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