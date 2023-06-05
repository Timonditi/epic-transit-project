import React, { useState } from 'react';

const EpicTransitForm = () => {
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
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG1CKvNnIgWD5Gxu48fTM_5zJ97_n-VF_y7g&usqp=CAU" alt="" />
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
      <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVAO5-TZXcHl_Sqm0mDA2h9riRc0Ao6a7GXqRRIvX7Kg-Q0GSN" alt="" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjtRmNe_J4R3SnYiPF3tQkm-bsbC2qhwyQ7vsxL3G8tTb-k1z" alt="" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTbXftOGLqUZYPYO-ZBUW6VIyz0sNXVXk5jA&usqp=CAU" alt="" />
      </div>
    </div>
  );
};

export default EpicTransitForm;
