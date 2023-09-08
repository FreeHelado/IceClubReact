import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
import Cart from './components/Cart/Cart';
import { CartContext } from './context/CartContext';
import { db } from "./firebase/client";
import { getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const App = () => {

  //FIREBASE - LLAMAR A UN SOLO DOCUMENTO
  // const productRef = doc(db, "products", "4dKZoGjw0GjLgIjOqyOC")

  // const getProduct = () => {
  //   getDoc(productRef).then((snapshot => {
  //     if(snapshot.exists()) {
  //       console.log({ id: snapshot.id, ...snapshot.data() })
  //     }
  //   }))
  // }

  // useEffect(() => {
  //   getProduct();
  // }, []);
  //FIREBASE - LLAMAR A UN SOLO DOCUMENTO

  ///FIREBASE - LLAMAR A TODOS LOS DOCUMENTOS
  const collectionRef = collection(db, "products")
  const getCollection = async () => {
    const data = await getDocs(collectionRef)
    const dataFiltrada = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    console.log(dataFiltrada)
  }

  useEffect(() => {
    getCollection();
  }, []);
  ///FIREBASE - LLAMAR A TODOS LOS DOCUMENTOS

  ///FIREBASE - LLAMAR A COLECION FILTRADA
  // const productsRefFilter = query(
  //   collection(db, "products"),
  //   where("categoryId", "==", "discos"),
  //   where("stock", "<", 10),
  //   limit(1) //limita la respuesta
  // )
  ///FIREBASE - LLAMAR A COLECION FILTRADA

  
  const [carrito, setCarrito] = useState([]);
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
        console.table(carrito);
  }

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  }
  
  return (
    <div className="App">
      <CartContext.Provider value={ {carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal} }>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
            <Route path="/disco/:discId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path='*' element={ <NotFound/>} />
          </Routes>
          </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
} 

export default App;
