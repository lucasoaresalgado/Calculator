import './App.css';
import Calculator from './components/Calculator';
import './components/Calculator.css';
import { fontFamily } from '@mui/system';

function App() {
  return (
    <div className="App">
     <h1 className='header'>Calculator</h1>
     <Calculator/>
    </div>
  );
}

export default App;
