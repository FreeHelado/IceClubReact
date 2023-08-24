import { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Disco = ({id, titulo, artista, categoria, anio, sello, genero, img, precio, desripcion}) => {

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

    const [valorContador, setValorContador] = useState(0);

    const sumar = () => {
        setValorContador(Number(valorContador) + 1);
    }

    const restar = () => {
        setValorContador(Number(valorContador) - 1);
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
                            <div className={styles['disco-ampliado__container--info--botones--cantidad']}>
                                <i class="bi bi-dash" onClick={restar}></i>
                                <input type="text" value={valorContador>0 ? valorContador : 1} />
                                <i class="bi bi-plus" onClick={sumar}></i>
                            </div>

                            <div className={styles['disco-ampliado__container--info--botones--add']}>
                                <button>
                                    <i class="bi bi-bag"></i>
                                <span>Agregar al Carrito</span> 
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className={styles['disco-ampliado__container--back']}>
                        <Link to="/">
                           <i class="bi bi-arrow-left-short"></i>
                            <span>Volver al Listado</span>
                        </Link>
                    </div>
                </div>

                <div className={styles['disco-ampliado__container--detalles']}>
                    
                    <p>{desripcion}</p>
                    
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