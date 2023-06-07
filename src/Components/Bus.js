// 
import React, { useState } from 'react';

const BusForm = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
  
    const handleFromChange = (e) => {
      setFrom(e.target.value);
    };
  
    const handleToChange = (e) => {
      setTo(e.target.value);
    };
  
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      // Perform search or other actions here
      console.log('Search clicked!');
      console.log('From:', from);
      console.log('To:', to);
      console.log('Date:', date);
    };
  
    return (
     <>
        <div className='header'>
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/0f/12/6e/ragati-conservancy-mt.jpg?w=1200&h=-1&s=1" alt="" />
          <div className="text-overlay">
         <h2>Discover the beauty of Kenya and make great memories with us</h2>
  </div>
        </div>
       
        <div>
          <form>
            <p><h3>Book affordable buses and trains</h3></p>
            <div>
              <label>
                From:
                <input type="text" value={from} onChange={handleFromChange} />
              </label>
            </div>
            <div>
              <label>
                To:
                <input type="text" value={to} onChange={handleToChange} />
              </label>
            </div>
            <div>
              <label>
                Date:
                <input type="date" value={date} onChange={handleDateChange} />
              </label>
            </div>
            <div>
              <button type="submit" onClick={handleSearch}>
                Search
              </button>
            </div>
          </form>
        </div>
      
       <h2>TOP DESTINATIONS</h2>
          <div className='imageContainer'>
            <img src="https://lh3.googleusercontent.com/muS2fOaml2K5AYU9mBtpIvb3PiIqB6E3wMR_onRU_PGUD71yD6EakBVSh9rhQ5niVoBpfe7BMcsnwIceidv7p8aKxWGxKoAO5QRFZtvS8HY=s1200" alt="Nairobi" />
        
         
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/43/d8/75/standard-operation.jpg?w=1200&h=900&s=1" alt="Kisumu" />
          
          
            <img src="https://www.wiomsa.org/wp-content/uploads/2019/03/Screenshot-2019-03-11-at-16.17.42.png" alt="Mombasa" />
          
        </div>
        
    </>
    );
};

export default BusForm;