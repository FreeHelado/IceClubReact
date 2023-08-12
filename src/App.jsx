import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Disco from './components/Disco/Disco';
import DiscogsCollection from './components/Discogs/Discogs';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <Disco />
      <DiscogsCollection />
    </div>
  );
} 

export default App;
