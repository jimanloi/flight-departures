import data from './data.js';
import sortFlightsByDate from './utils/sort.js';

const now = new Date('2023-08-05 13:45:00');
console.log(now);

//DOM

const rows = document.getElementById('rows');

//Functions

const createRow = (flight) => {
    const row = document.createElement('tr');
    row.className = 'flight';
    row.innerHTML = `
    <td>${flight.name}</td>
    <td>${flight.plane}</td>
    <td>${flight.departureDate}</td>
    <td>${flight.origin}</td>
    <td>${flight.arrivalDate}</td>
    <td>${flight.destination}</td>
    <td>${flight.stops}</td>
  `;
    return row;
};

//Handler
const handleLoad = () => {
    const sortedFlights = sortFlightsByDate(data.flights);
    sortedFlights.forEach((flight) => {
        const row = createRow(flight);
        rows.appendChild(row);
    });
};

//Events

window.addEventListener('load', handleLoad);
