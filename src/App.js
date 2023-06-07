import React, {useState, useEffect}  from 'react';
import { Routes, Route,useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';
import EpicTransitForm from './components/Train'
import Footer from './components/footer';
import './App.css'
import Bus from './components/Bus';
import HomePage from './components/HomePage';
import CustomerDetails from './components/CustomersDetails';
import SearchResults from './components/SearchResults';

const App = () => {
  const[data, setData] =  useState([]) 
   const [searchResults, setSearchResults] = useState([]);
   const location = useLocation();
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
          <Route path="/booking" element={< EpicTransitForm data={data} />} />
          <Route path="/customer-details" element={<CustomerDetails />} />
           <Route path="/search-results" element={<SearchResults data={data}/>} />
        </Routes>
        <Footer />
      </>
  );    
};

export default App;