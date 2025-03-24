import sortFlightsByDate from './sort.js';

describe('sortByDepartureDate', () => {
    it('sorts flights by earliest date first', () => {
        const flights = [
            { id: 1, departureDate: '2023-08-05 13:45:00' },
            { id: 2, departureDate: '2023-08-20 09:00:00' },
            { id: 3, departureDate: '2023-08-05 10:45:00' }
        ];

        const expected = [
            { id: 3, departureDate: '2023-08-05 10:45:00' },
            { id: 1, departureDate: '2023-08-05 13:45:00' },
            { id: 2, departureDate: '2023-08-20 09:00:00' }
        ];

        const result = sortFlightsByDate(flights);
        expect(result).toEqual(expected);
    });
});
