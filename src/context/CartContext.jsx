import { createContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';

// Creamos el contexto con createContext
export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState(carritoInicial);
    
    const mostrarAlerta = () => {
        Swal.fire({
            title: 'Agregado al Carrito',
            text: 'El producto se agregó al carrito',
            icon: 'success',
            showDenyButton: true,
            denyButtonText: "Seguir Comprando",
            denyButtonColor: "#000",
            confirmButtonText: '<a href="/cart" style="text-decoration: none; color: white;">Ir al carrito</a>',
        })
    };



    const agregarAlCarrito = (id, titulo, artista, precio, img, cantidad) => {
        const discoAgregado = { id, titulo, artista, precio, img, cantidad };
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = carrito.find((item) => item.id === discoAgregado.id);
        
        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(discoAgregado);
        }
        setCarrito(nuevoCarrito);
        mostrarAlerta()
        console.table(carrito);
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter((item) => item.id !== id);
        setCarrito(nuevoCarrito);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])
    
    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito, eliminarDelCarrito }}>
            {children} 
        </CartContext.Provider>
    )

}