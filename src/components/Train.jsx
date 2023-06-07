import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const EpicTransitForm = ({data}) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

  
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

  const queryParams = `?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;

    navigate(`/search-results${queryParams}`);
    console.log(queryParams)
};
  
  return (
    <>
      <div className='head'> 
        <img src="https://www.brookings.edu/wp-content/uploads/2017/06/train_kenya001.jpg" alt="" />
        </div>
        
        <div className="newtext-overlay">
         <h2>Book your ticket and travel with us in style</h2>
  </div>
     

      <div className='form'>
      <form>
        <p>Book affordable buses and train</p>
        <label>
          From:
          <input type="text" value={from} onChange={handleFromChange} />
        </label>
        <br />
        <label>
          To:
          <input type="text" value={to} onChange={handleToChange} />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={handleDateChange} />
        </label>
        <br />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
      </div>
      <div className='imagecont'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVAO5-TZXcHl_Sqm0mDA2h9riRc0Ao6a7GXqRRIvX7Kg-Q0GSN" alt="" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjtRmNe_J4R3SnYiPF3tQkm-bsbC2qhwyQ7vsxL3G8tTb-k1z" alt="" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTbXftOGLqUZYPYO-ZBUW6VIyz0sNXVXk5jA&usqp=CAU" alt="" />
      </div>
    
    </>
  );
};

export default EpicTransitForm;