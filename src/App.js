
import Calculator from './components/Calculator';
import './App.css';
import './components/Calculator.css';
import { fontFamily } from '@mui/system';
import { useEffect } from 'react';

function App() {
useEffect(() => {
 const load = setTimeout(() => {
    return <Calculator/>
  }, 1000)
})

  return (
    <div className="App">
     <h1 className='header'>Calculator</h1>
     <Calculator/>
    </div>
  );
}

export default App;
