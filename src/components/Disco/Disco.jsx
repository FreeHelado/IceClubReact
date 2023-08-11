import { useState } from 'react'
import styles from './styles.module.css'

const Disco = () => {
    const [valorContador, setValorContador] = useState(0)

    const sumar = () => {
        setValorContador(Number(valorContador) + 1)
    }
    const restar = () => {
        setValorContador(Number(valorContador) - 1)
    }

    

    return (
        <section className={styles['disco-ampliado']}>
            <div className={styles['disco-ampliado__container']}>
                <figure>
                    <img src="https://i.discogs.com/27JqDA5Hi80q4j2nv4DNDl8vw3HzydECG-zjf3RH26E/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExOTcx/MTQtMTM2ODEzNTE1/MS02MzgxLmpwZWc.jpeg" alt="" />
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