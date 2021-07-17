const map = document.getElementById('mapid');
const peruCoordinates = { latitude: -9.189957,longitude: -75.015152 };
const mymap = L.map(map).setView([peruCoordinates.latitude, peruCoordinates.longitude], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Create PopUp
// L.marker([-12.046374, -77.042793]).addTo(mymap)
//     .bindPopup('Lima ps xd')
//     .openPopup();

/**
 * Create Object Popup
 */
const popup = L.popup();
function onMapClick(e){
    popup
        .setLatLng(e.latlng)
        .setContent("Tu hiciste click acá "+e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
