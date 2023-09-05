import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
// import CartContext from './context/CartContext';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
          <Route path="/disco/:discId" element={<ItemDetailContainer />} />
          <Route path='*' element={ <NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
