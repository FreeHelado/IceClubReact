import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Disco from './components/Disco/Disco';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <Disco />
    </div>
  );
} 

export default App;
