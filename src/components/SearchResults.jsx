import { useLocation, useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';

const SearchResults = ({ data }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const from = queryParams.get('from');
  const to = queryParams.get('to');
  const navigate = useNavigate()

  // Set up the Fuse instance with the appropriate options
  const fuse = new Fuse(data, {
    keys: ['departure_city', 'destination_city'],
    includeScore: true,
  });

  // Perform the fuzzy search based on the 'from' and 'to' values
  const fuzzyResults = fuse.search(`${from} ${to}`).map((result) => result.item);

  const handleClick = (e) => {
      e.preventDefault();
    navigate(`/customer-details`);
    };

  return (
    <div>
      <h2>Search Results</h2>
      {fuzzyResults.map((result) => (
        <div key={result.id} className='search-result-card'>
  {/* Render the search result data */}
  <p>
    <span className="left-content">Bus Number: {result.bus_number}</span>
    </p>
    <p>
    <span className="left-content" style={{fontSize:"larger"}}>
      <strong> {result.departure_city} to {result.destination_city}</strong>
    </span>
    <span className='right-content'>Departure Time: {result.departure.split('').slice(11,16).join('')} </span>
  </p>
  <p>
    <span className="left-content" >Departure: {result.departure.split('').slice(0,10).join('')}</span>
    <span className="right-content">Arrival: {result.arrival.split('').slice(0,10).join('')}</span>
  </p>
  <p>
    <span className="left-content">Available Seats: {result.available_seats}</span>
    <span id="fare"   className="right-content">Fare: {result.fare}</span>
  </p>
  <button onClick={handleClick}>Book Now</button>
</div>
      ))}
    </div>
  );
};

export default SearchResults;
