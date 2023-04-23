import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './path/Home';
import Reviews from './path/reviews';

function App() {
  return (
    <>
    <Routes>
      <Route path= '/' index element = {<Home/>} />
      <Route path='/reviews' element={<Reviews/>}/>
    </Routes>
    </>
  );
}

export default App;
