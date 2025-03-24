/**
 * Sort flights according to their departure time. The earliest on the top.
 *
 * @param {array} - array
 * @returns {array} - sorted array
 */

const sortAscending = (arr = [], key = '') => {
    const copy = [...arr];
    if (key === 'departureDate' || key === 'arrivalDate') {
        return copy.sort(
            (a, b) => new Date(a[key]).getTime() - new Date(b[key]).getTime()
        );
    }
    if (key === 'stops') {
        return copy.sort((a, b) => a[key] - b[key]);
    }

    if (
        key === 'name' ||
        key === 'plane' ||
        key === 'destination' ||
        key === 'origin'
    ) {
        return copy.sort((a, b) => a[key].localeCompare(b[key]));
    }

    if (key === '') {
        return 'Please provide a key to sort the data';
    }
};

export default sortAscending;
