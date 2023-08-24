import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import DiscoDetailContainer from './components/DiscoDetailContainer/DiscoDetailContainer';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
          <Route path="/disco/:discId" element={<DiscoDetailContainer />} />
          <Route path='*' element={ <NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
