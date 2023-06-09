import React, {useState, useEffect}  from 'react';
import { Routes, Route,useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';
import EpicTransitForm from './components/Train'
import Footer from './components/footer';
import CustomerReviews from './components/CustomersReview'
import './App.css'
import Bus from './components/Bus';
import HomePage from './components/HomePage';
import CustomerDetails from './components/CustomersDetails';
import SearchResults from './components/SearchResults';
import BusSearchResults from './components/BusSearchResult';
import PaymentConfirmation from './components/ConfirmPayment'
import TicketConfirmation from './components/Confirmation'


const App = () => {
   const [busData, setBusData] = useState([]);
  const [trainData, setTrainData] = useState([]);
  const [customer,setCustomer] = useState([])
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  console.log(busData);
  console.log(trainData);

  // fetching data
  useEffect(() => {
    Promise.all([
      fetch("http://localhost:9292/buses").then((r) => r.json()),
      fetch("http://localhost:9292/trains").then((r) => r.json()),
      fetch("http://localhost:9292/customers").then((r) => r.json())
    ]).then(([busData, trainData,customer]) => {
      setBusData(busData);
      setTrainData(trainData);
      setCustomer(customer);
    });
  }, []);
  function handleAddCustomer(newCustomer) {
    setCustomer([...customer, newCustomer]);
  }

  return (
      <>
        <Navbar />
        <HomePage />
        <Routes>  
          <Route path='/' element={<Bus busData={busData}/>}/>
          <Route path="/booking" element={< EpicTransitForm data={trainData} />} />
          <Route path="/customer-details" element={<CustomerDetails busData={busData} trainData={trainData} onAddCustomer={handleAddCustomer}/>} />
          <Route path="/search-results" element={<SearchResults data={trainData}/>} />
          <Route path="/bus-search-results" element={<BusSearchResults busData={busData}/>} />
          <Route path='/CustomerReviews' element={< CustomerReviews />}/>
          <Route path='/payment-confirmation' element={<PaymentConfirmation />}/>
          <Route path='/TicketConfirmation' element={<TicketConfirmation/>}/>
        </Routes>
        <Footer />
      </>
  );    
};

export default App;