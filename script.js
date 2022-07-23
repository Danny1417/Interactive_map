const map = L.map('map', {
    center: [48.868672, 2.342130],
    zoom: 15,
});


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


const marker = L.marker([48.87007, 2.346453])
marker.addTo(map).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()