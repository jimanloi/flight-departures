/**
 * Sort flights according to their departure time. The earliest on the top.
 *
 * @param {array} - array
 * @returns {array} - sorted array
 */

const sortFlightsByDate = (arr = []) => {
    return [...arr].sort(
        (a, b) => new Date(a.departureDate) - new Date(b.departureDate)
    );
};

export default sortFlightsByDate;
