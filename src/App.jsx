import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
import { CartContext } from './context/CartContext';

const App = () => {

  const [carrito, setCarrito] = useState([]);


  return (
    <div className="App">
      <CartContext.Provider value={ {carrito, setCarrito} }>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
            <Route path="/disco/:discId" element={<ItemDetailContainer />} />
            <Route path='*' element={ <NotFound/>} />
          </Routes>
          </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
} 

export default App;
