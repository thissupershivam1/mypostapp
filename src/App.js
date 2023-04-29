

import './App.css';
import NavBars from './components/NavBars';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';



function App() {
  return (
   
     <Router>

<div >
     <NavBars/>
     <Routes>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      <Route exact path='/' element={<Home/>}></Route>

      
     </Routes>
      
     
    </div>
     </Router>
      
  );
}

export default App;
