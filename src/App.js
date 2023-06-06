import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import EpicTransitForm from './components/Train'
import Footer from './components/footer';
import './App.css'
import Bus from './components/Bus';
import HomePage from './components/HomePage';

const App = () => {
  return (
      <>
        <Navbar />
        <HomePage />
        <Routes>  
          <Route path='/' element={<Bus />}/>
          <Route path="/booking" element={< EpicTransitForm />} />
        </Routes>
        <Footer />
      </>
  );    
};

export default App;
