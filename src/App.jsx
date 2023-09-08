import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import { db } from "./firebase/client";
import { getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore';


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

  return (
    <div className="App">
      <CartProvider>
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
      </CartProvider>
    </div>
  );
} 

export default App;
