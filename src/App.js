/*jshint esversion: 6 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Signup from './views/Signup';
import Todo from './views/Todo';

import Header from './layout/Header';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/Signup' element={ <Signup />} /> 
          <Route path='/Todo' element={ <Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
