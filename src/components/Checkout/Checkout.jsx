import styles from './styles.module.scss';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext } from '../../context/CartContext';
import confetti from 'canvas-confetti';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from "../../firebase/client";

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");
    const [cargando, setCargando] = useState(false);
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const comprar = async (data) => {
        setCargando(true);
        const order = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        vaciarCarrito()
        console.log(order)

        const orderRef = collection(db, "orders");
        const orderDoc = await addDoc(orderRef, order);

        for (const producto of carrito) {
            const { id, cantidad } = producto;

            const productRef = doc(db, "discos", id);
            const productDoc = await getDoc(productRef);

            if (productDoc.exists()) {
                const stockActual = productDoc.data().stock;
                const nuevoStock = stockActual - cantidad;

                await updateDoc(productRef, { stock: nuevoStock });
            }
        }

        setPedidoId(orderDoc.id);
        setCargando(false);
        confetti();

    } 
    
    if (pedidoId) {
        return (
            <section className={styles['checkout__respuesta']}>
                <h1>(づ ◕‿◕ )づ</h1>
                <h1>🎉 Gracias por tu Compra</h1>
                <div className={styles['checkout__respuesta--id']}>
                    <h2>Tu número de pedido es:</h2>
                    <h3>{pedidoId}</h3>
                </div>
            </section>
        )
    }

    return (
        <section className={styles['checkout']}>
            <h1>Finalizá tu Pedido</h1>
            <form onSubmit={handleSubmit(comprar)}>
                
                <input type="text" placeholder="Ingresa tu Nombre" {...register("nombre", { required: true })} />
                {errors.nombre &&
                    <i>(¬､¬) ¡El Nombre es requerido!</i>
                }

                <input type="text" placeholder="Ingresá tu Email" {...register("email", { required: true })} />
                {errors.email &&
                    <i>(¬､¬) ¡El e-mail es requerido!</i>
                }
                
                <input type="number" placeholder="Ingresá tu Teléfono"
                    {...register("telefono", {
                        required: true
                    })} />
                    
                    {errors.telefono &&
                        <i>(¬､¬) ¡El Teléfono es requerido!</i>
                    }
                
                {cargando ? (
                    <div className={styles['checkout__cargador']}>
                        <h2>Enviando Pedido</h2>
                        <span class="loader"></span>
                    </div>
                ): (
                    <div className={styles['checkout__total']}>
                        <h2>Total de tu compra: ${ precioTotal() }</h2>
                        <button type="submit">CONFIRMAR COMPRA</button>
                    </div>
                    )
                } 
                

            </form>
        </section>
    )
}

export default Checkout;