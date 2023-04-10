import React from 'react';

import './App.css';
import Home from './layouts/Home';
import { Login } from './layouts/Login';
import Error from './layouts/Error';
import Signup from './layouts/Signup';
  //@ts-ignore
import { BrowserRouter ,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
