import React from 'react'
import './App.css';
import HotelForm from './pages/HotelForm/hotelForm';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Auth/login';
import Register from './pages/Auth/register';

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
            </Routes>
        </BrowserRouter>

      {/* <HotelForm /> */}
    </div>
  );
}

export default App;
