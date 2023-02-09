import logo from './logo.svg';
import './App.css';
import MaterialDashboard from './materials/MaterialDashboard';
import { RoundedButton } from './components/RoundedButton';

function App() {


  function alert() {
    window.alert("hello");
  }

  return (
    <div className="App">
      <div className='main-panel'>
        <MaterialDashboard></MaterialDashboard>
      </div>
    </div>
  );
}

export default App;
