export default function (unit, address) {
    const {street, houseNumber, district, postalCode} = address;
    if (unit) {
    const addString = `${unit}-${houseNumber} ${street} ${district} ${postalCode}`;
    } 
    const addString = `${houseNumber} ${street} ${district} ${postalCode}`

    return addString;
}