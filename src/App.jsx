import './App.css';
import NavBar from './components/NavBar/NavBar';
import Disco from './components/Disco/Disco';
import DiscogsContainer from './components/DiscogsContainer/DiscogsContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      {/* <DiscogsContainer /> */}
      <Disco />
    </div>
  );
} 

export default App;
