import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import EpicTransitForm from './components/Train'
import Footer from './components/footer';

const App = () => {
  return (
      <>
        <Navbar />
        <Routes>  
          <Route path="/booking" element={< EpicTransitForm />} />
        </Routes>
        <Footer />
      </>
  );    
};

export default App;
