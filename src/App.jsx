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
