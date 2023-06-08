
const BusCard = ({ bus }) => {
  return (
    <div className="bus-card" style={{ display: 'flex'}}>
      <h3 style={{ marginRight: '20px',textAlign:'inherit' }}>Details</h3>
      <p style={{ marginRight: '20px' }}>Bus Number: {bus.bus_number}</p>
      <p style={{ marginRight: '20px' }}>Departure City: {bus.departure_city}</p>
      <p style={{ marginRight: '20px' }}>Destination City: {bus.destination_city}</p>
      <p style={{ marginRight: '20px' }}>Available seats: {bus.available_seats}</p>
      <p style={{ marginRight: '20px' }}>Departure: {bus.departure.split('').slice(0,10).join('')}</p>
      <p style={{ marginRight: '20px' }}>Departure Time: {bus.departure.split('').slice(11,16).join('')}</p>

      {/* Add other relevant information */}
    </div>
  );
};

export default BusCard