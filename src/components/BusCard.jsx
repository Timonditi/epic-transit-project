

const BusCard = ({ bus }) => {
  return (
    <div className="center-content">
      <div className="bus-card">
        <h3>Details</h3>
        <p>Bus Number: {bus.bus_number}</p>
        <p>Departure City: {bus.departure_city}</p>
        <p>Destination City: {bus.destination_city}</p>
        <p>Available seats: {bus.available_seats}</p>
        <p>Departure: {bus.departure.split('').slice(0, 10).join('')}</p>
        <p>Departure Time: {bus.departure.split('').slice(11, 16).join('')}</p>
      </div>
    </div>
  );
};

export default BusCard;