const map = L.map('map', {
    center: [40.747471, -73.904553],
    zoom: 14,
});


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);



const marker = L.marker([40.743570, -73.899380])
marker.addTo(map).bindPopup('<p1><b>This is You</b></p1>').openPopup()



async function getLocation() {
    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return [pos.coords.latitude, pos.coords.longitude];
}
window.onload = async function() {
    const coords = await getLocation();
    console.log(coords);
};

document.getElementById("search").addEventListener("click", async(event) => {
    event.preventDefault();
    let Locations = document.getElementById("locations").value;
    console.log(Locations)
})

// function geoFindMe() {

//   const status = document.querySelector('#status');
//   const mapLink = document.querySelector('#map-link');

//   mapLink.href = '';
//   mapLink.textContent = '';

//   function success(position) {
//     const latitude  = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     status.textContent = '';
//     mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
//     mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
//   }

//   function error() {
//     status.textContent = 'Unable to retrieve your location';
//   }

//   if(!navigator.geolocation) {
//     status.textContent = 'Geolocation is not supported by your browser';
//   } else {
//     status.textContent = 'Locating…';
//     navigator.geolocation.getCurrentPosition(success, error);
//   }

// }

// document.querySelector('#find-me').addEventListener('click', geoFindMe);