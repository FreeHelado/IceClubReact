import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import precioInterno from '../../preciosInternos';
import DiscogList from '../DiscogList/DiscogList';
import DiscogItemLoading from './DiscogItemLoading';

const DiscogsCollection = () => {
  const [collection, setCollection] = useState([]);
  const [cargador, setCargador] = useState(true);

  useEffect(() => {

    fetch('https://api.discogs.com/users/AleFerreira27/collection/folders/0/releases', {
      headers: {
        'Authorization': 'Discogs token=OJnskVbtFJmFcuLsVBJWCwWZRRgtFoTGpguQtfKz',
      },
    })
      .then(res => res.json())
      .then(data => {
        setCollection(data.releases);
        setCargador(false);
      })
      .catch(error => {
        console.error('No hay Discos disponibles:', error);  
      })
      .finally(() => setCargador(false));
    
  }, []);

  return (
    <main className={styles['itemList']}>
      {cargador ? (
        <div className={styles['itemsCargando']}>
          <DiscogItemLoading />
          <DiscogItemLoading />
          <DiscogItemLoading />
          <DiscogItemLoading />
          <DiscogItemLoading />
          <DiscogItemLoading />
          <DiscogItemLoading />
          <DiscogItemLoading />
        </div>
      ) : (    
        <DiscogList collection={collection} precioInterno={precioInterno} />
      )}
    </main>
  );
};

export default DiscogsCollection;