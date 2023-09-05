// import { useState } from 'react';
import styles from './styles.module.scss';

const ItemCount = ( {cantidad, handleSumar, handleRestar, handleAgregar} ) => {
    
   

    return (
        <>
        <div className={styles['counter']}>
            <i className="bi bi-dash" onClick={handleRestar}></i>
            <span>{cantidad}</span>
            <i className="bi bi-plus" onClick={handleSumar}></i>
        </div>

        <div className={styles['agregarBtn']}>
            <button onClick={handleAgregar}>
                <i className="bi bi-bag"></i>
                <span>Agregar al Carrito</span> 
            </button>
            </div>
        </>
    )
}

export default ItemCount;