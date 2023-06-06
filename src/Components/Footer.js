import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='about'>
       
        <p><h3>About Us</h3></p>
        <p>
          Epic Adventures provides an online ticket booking system
          that simplifies the customer needs. Customers can book bus tickets
          and pay online, saving a lot of time. We have transformed bus travel in the country by bringing ease and convenience to millions of Kenyans who travel using buses.
        </p>
      

     
       <p> <h3>Our Offices</h3></p>
        <p>
          Located along Prism Towers, 6th Floor, Prism Towers, Third Ngong Avenue, Upperhill, Nairobi, Kenya.
        </p>
        
       <p><h3>Contact Us</h3></p>
        <p>
          Telephone: +254723000456
        </p>
        <p>
          Email: info@epictransit.com
        </p>
       
     
      </div>

      <p className="copyright">
        © 2023 Epic Transit. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;