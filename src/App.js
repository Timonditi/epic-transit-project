import React, {useState, useEffect}  from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import EpicTransitForm from './components/Train'
import Footer from './components/footer';
import CustomerReviews from './components/CustomersReview'
import './App.css'
import Bus from './components/Bus';
import HomePage from './components/HomePage';

const App = () => {
  const[data, setData] =  useState([]) 
  console.log(data);

// fetching data
useEffect(() => {
  fetch("http://localhost:9292/buses")
  .then((r) => r.json())
  .then ((data) => setData(data))
}, [])

  return (
      <>
        <Navbar />
        <HomePage />
        <Routes>  
          <Route path='/' element={<Bus />}/>
          <Route path="/booking" element={< EpicTransitForm />} />
          <Route path='/CustomerReviews' element={< CustomerReviews />}/>
        </Routes>
        <Footer />
      </>
  );    
};

export default App;