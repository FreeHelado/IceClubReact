import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'

const DiscogsCollection = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await fetch('https://api.discogs.com/users/AleFerreira27/collection/folders/0/releases', {
          headers: {
            'Authorization': 'Discogs token=OJnskVbtFJmFcuLsVBJWCwWZRRgtFoTGpguQtfKz',
          },
        });
        const data = await response.json();
        setCollection(data.releases);
      } catch (error) {
        console.error('No hay Discos disponibles:', error);
      }
    };

    fetchCollection();
  }, []);

  const precioInterno = {
    8392678: 19.95,
    2820289: 6.4,
    6473449: 5.47,
    11557517: 23.73,
    5504349: 25.48,
    5425037: 17.01,
    2112572: 12.80,
    2726086: 10.01,
    8645720: 22.75,
    784023: 15.52,
    1075934: 12.34,
    8528867: 18.19,
    823440: 18.10,
    7322988: 10.41,
    8442455: 12.83,
    8796391: 13.16,
    8206315: 6.34,
    13690579: 18.20,
    2416800: 31.85,
    7036268: 12.00,
    7103501: 15.62,
    4398091: 5.75,
    6800500: 40.95,
    1981738: 330.20,
    2070299: 30.45,
    2771111: 3.64,
    5108220: 24.14,
    4660729: 20.11,
    2917760: 27.76,
    6478358: 120,
    4501773: 37.27,
    2331282: 20.02,
    354906: 25.34,
    1349108: 23.22,
    3526708: 11.20,
    11914604: 9.03,
    7210650: 18.20,
    11323115: 48.48,
    8163243: 18.20,
    4304078: 20.39,
    6142444: 16.16,
    8647246: 25.43,
    4640177: 19.90,
    
  };

  return (
    <main className={styles['itemList']}>
    <section className={styles['discogs']}>
      
        {collection.map((release) => (
          
          <div className={styles['discog']} key={release.id}>
            <figure>
                {release.basic_information.cover_image && (
                    <img src={release.basic_information.cover_image} alt={release.basic_information.title} />
                )}
            </figure>
            <div className={styles['discogs__info']}>
              <h2>{release.basic_information.title} - {release.basic_information.artists[0].name}</h2>
              <h3>$ {precioInterno[release.id] || 'N/A'}</h3>
              <div className={styles['discogs__info--detalle']}>
                <span>{release.basic_information.year || 'N/A'}</span>
                <span>{release.basic_information.formats[0].name} {release.basic_information.formats[0].descriptions[0]}</span>
                <span>{release.basic_information.labels[0].name}</span>
                <span>{release.basic_information.genres[0]}</span>
              </div>
              <button>Lo quiero</button>
              
            </div>
          </div>
        ))}
    </section>
    </main>  
  );
};

export default DiscogsCollection;