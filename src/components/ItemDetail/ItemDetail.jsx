import { useContext, useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';



const Disco = ({id, titulo, artista, categoria, anio, sello, genero, img, precio, descripcion, stock}) => {

    const discoRef = useRef(null);
    const [textColor, setTextColor] = useState('#fff');
    
    
    useEffect(() => {
    const img = discoRef.current.querySelector('figure img');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        const imageData = ctx.getImageData(0, 0, img.width, img.height).data;

        let totalR = 0;
        let totalG = 0;
        let totalB = 0;
        let count = 0;

        for (let i = 0; i < imageData.length; i += 4) {
            totalR += imageData[i];
            totalG += imageData[i + 1];
            totalB += imageData[i + 2];
            count++;
        }

        const avgR = Math.floor(totalR / count);
        const avgG = Math.floor(totalG / count);
        const avgB = Math.floor(totalB / count);

        const gradientColor = `linear-gradient(rgb(${avgR}, ${avgG}, ${avgB}) 0%, rgb(15, 23, 42) 100%)`;
        const contrastColor = getContrastColor(avgR, avgG, avgB);

        discoRef.current.style.background = gradientColor;
        setTextColor(contrastColor);

    };
    }, []);

    const getContrastColor = (r, g, b) => {
    const y = (r * 299 + g * 587 + b * 114) / 1000; 
    return y >= 128 ? 'rgb(11, 17, 32)' : '#fff';
    };

    const { carrito, setCarrito } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1) 
    }

    const handleAgregar = () => {
        const discoAgregado = { id, titulo, artista, precio, cantidad };
        const estaEnElCarrito = carrito.find((item) => item.id === discoAgregado.id);
        
        if (estaEnElCarrito) {
            console.log("Esta en el carrito")
        } else {
            setCarrito([...carrito, discoAgregado]);
        }
        
        console.log(carrito);
    }

    return (
        <section className={styles['disco-ampliado']} >
            <div className={styles['disco-ampliado__container']} ref={discoRef}>
                <div className={styles['disco-ampliado__container--bloque']}>
                    <figure>
                        <img src={img} alt={titulo} />
                    </figure>

                    <div className={styles['disco-ampliado__container--info']}>
                        <h1 style={{ color: textColor }}>{titulo}</h1>
                        <h2 style={{ color: textColor }}>{artista}</h2>
                        <h3 style={{ color: textColor }}>$ {precio}</h3>

                        <div className={styles['disco-ampliado__container--info--botones']}>
                           
                            <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={handleAgregar} />

                        </div>

                    </div>

                    <div className={styles['disco-ampliado__container--back']}>
                        <Link to="/">
                           <i className="bi bi-arrow-left-short"></i>
                            <span>Volver al Listado</span>
                        </Link>
                    </div>
                </div>

                <div className={styles['disco-ampliado__container--detalles']}>
                    
                    <p>{descripcion}</p>
                    
                    <div className={styles['disco-ampliado__container--detalles--atributos']}>
                        <span>Sello:<strong> {sello}</strong></span>
                        <span>Categoría:<strong> {categoria}</strong></span>
                        <span>Año: <strong>{anio}</strong></span>
                        <span>Género: <strong>{genero}</strong></span>
                    </div>
                    
                </div>

            </div>
        </section>
    )
}

export default Disco;