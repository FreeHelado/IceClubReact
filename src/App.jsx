import './App.css';
import NavBar from './components/NavBar/NavBar';
import Disco from './components/Disco/Disco';
import DiscogsContainer from './components/DiscogsContainer/DiscogsContainer';


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <DiscogsContainer />
      <Disco />
    </div>
  );
} 

export default App;
