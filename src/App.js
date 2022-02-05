import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Choose from './Components/Choose';
import Battle from './Components/Battle';
import Rules from './Components/Rules';
function App() {
  return (
    <div className="App">
     <Header/>
     <Choose/>
     <Battle/>
     <Rules/>
    </div>
  );
}

export default App;
