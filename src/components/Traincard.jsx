

const TrainCard = ({ train }) => {
  return (
    <div className="center-content">
      <div className="bus-card">
        <h3>Details</h3>
        <p>Train Number: {train.train_number}</p>
        <p>Departure City: {train.departure_city}</p>
        <p>Destination City: {train.destination_city}</p>
        <p>Available seats: {train.available_seats}</p>
        <p>Departure: {train.departure.split('').slice(0, 10).join('')}</p>
        <p>Departure Time: {train.departure.split('').slice(11, 16).join('')}</p>
      </div>
    </div>
  );
};

export default TrainCard;