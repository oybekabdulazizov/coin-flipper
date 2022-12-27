import './App.css';
import Coin from './Coin';
import imgSrc from './images/transparent.png';

function App() {
  return (
    <div className="App">
      <Coin src={imgSrc} alt='empty-img' />
    </div>
  );
}

export default App;
