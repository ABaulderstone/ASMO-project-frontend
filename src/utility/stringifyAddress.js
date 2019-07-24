export default function (unit, address) {
    const {street, houseNumber, district, postalCode} = address;
    let addString;
    if (unit) {
     addString = `${unit}-${houseNumber} ${street} ${district} ${postalCode}`;
    } 
     addString = `${houseNumber} ${street} ${district} ${postalCode}`

    return addString;
}