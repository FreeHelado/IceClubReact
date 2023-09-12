import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './context/CartContext';


const App = () => {

  // const createOrder = () => {
  //   const order = {
  //     buyer: { name:"Alitoh", phone: "099128034", email: "alejandro@i2es.info" },
  //     items: products[0],
  //     total: products[0].price
  //   }

  //   const orderColletion = collection(db, 'orders'),
  //   addDoc(orderColletion, order).then(({id}) => console.log(id))
  // }

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
  // const collectionRef = collection(db, "discos")
  // const getCollection = async () => {
  //   const data = await getDocs(collectionRef)
  //   const dataFiltrada = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //   console.table(dataFiltrada)
  // }

  // useEffect(() => {
  //   getCollection();
  // }, []);
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
            <Route path="/checkout" element={<Checkout/>} />
            <Route path='*' element={ <NotFound/>} />
          </Routes>
          </BrowserRouter>
      </CartProvider>
    </div>
  );
} 

export default App;
