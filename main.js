function main() {
    const map = L.map('map').setView([52.4849, 13.3686], 11);

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        maxZoom: 18, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
    }).addTo(map);

    fetch("./request-scooters.json")
        .then(response => response.json())
        .then(data => {
            data.data.scooters.forEach(scooter => {
                const position = [scooter.location.lat, scooter.location.lng];
                L.marker(position).addTo(map);
            })
        })
}

document.addEventListener('DOMContentLoaded', main);