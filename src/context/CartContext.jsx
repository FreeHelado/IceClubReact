import { createContext, useState } from 'react';

// Creamos el contexto con createContext
export const CartContext = createContext(),

// Creamos un componente para nuestro contexto
export const CartComponentContext = ({ children }) => {
    
    const [cart, setCart] = useState([])
    const [totalCarrito, setTotalCarrito] = useState([])

    return <CartContext.Provider value={{ cart, setCart, totalCarrito, setTotalCarrito, vaciarCarrito}}>
        {children}
    </CartContext.Provider>

}