import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import DiscogsContainer from './components/DiscogsContainer/DiscogsContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import DiscoDetailContainer from './components/DiscoDetailContainer/DiscoDetailContainer';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
          <Route path="/disco/:discId" element={<DiscoDetailContainer />} />
          <Route path="/discogs" element={<DiscogsContainer />} />  
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
