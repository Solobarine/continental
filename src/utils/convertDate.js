function convertDate(timestamp) {
    const isoDate = new Date(timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return isoDate.toLocaleDateString(undefined, options);
}
export default convertDate