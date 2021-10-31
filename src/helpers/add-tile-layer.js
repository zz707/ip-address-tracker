import L from 'leaflet';

export function addTileLayer(map) {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXZvcmN1Y3VtYmVyIiwiYSI6ImNrdmR3bDRqajQ2cTEyb2xwa3FxZ2NtNGkifQ.e1t5mOTZ9oHC_dyiwgGHGg', {
    attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Your Name Here</a>.',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);
}