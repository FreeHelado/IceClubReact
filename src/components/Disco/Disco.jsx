import { useState, useRef, useEffect } from 'react'
import styles from './styles.module.css'
import tapa from '../../assets/covers/R-8392678-1460792762-1145.jpg'

const Disco = () => {

const discoRef = useRef(null);

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

      const backgroundColor = `rgb(${avgR}, ${avgG}, ${avgB})`;
      discoRef.current.style.backgroundColor = backgroundColor;
    };
    }, []);

    const discoStyle = {
        backgroundImage: `url(${tapa})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
    };
    
    const overlayStyle = {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 1,
        pointerEvents: 'none',
    };

    const [valorContador, setValorContador] = useState(0)

    const sumar = () => {
        setValorContador(Number(valorContador) + 1)
    }
    const restar = () => {
        setValorContador(Number(valorContador) - 1)
    }


    return (
        <section className={styles['disco-ampliado']} style={discoStyle}>
            <div style={overlayStyle}></div>
            <div className={styles['disco-ampliado__container']} ref={discoRef}>
                <figure>
                    <img src={tapa} alt="" />
                </figure>
                <div className={styles['disco-ampliado__container--info']}>
                    <h1>Axis: Bold As Love</h1>
                    <h2>The Jimi hendrix Expirience</h2>
                    <h3>USD 50,00</h3>

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
            </div>
        </section>
    )
}

export default Disco;