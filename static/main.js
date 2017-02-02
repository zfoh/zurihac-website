var smoothScroll = require('./smooth-scroll.js');
smoothScroll.init({ selector: 'a[href^="#"]' });

if (typeof mapboxgl !== 'undefined') {
    setTimeout(function() {
        var center = [8.8172754, 47.2233188];
        mapboxgl.accessToken = 'pk.eyJ1Ijoid2VyZWhhbXN0ZXIiLCJhIjoiY2l4eGZpb3NhMDA0czMyczNsaHpqbmF6MSJ9.fIWaeaD-QDiQY7HkB7w9OA';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            zoom: 9,
            center: center
        });
        map.scrollZoom.disable();

        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(' + require('../static/crosshair.svg') + ')';

        new mapboxgl.Marker(el, {offset: [-16, -16]})
            .setLngLat(center)
            .addTo(map);
    }, 500);
}

var navBarContainer = document.getElementById('nav-bar-container');
var navBar = document.getElementById('nav-bar');

if (navBarContainer !== null && navBar !== null) {
    window.addEventListener('scroll', function() {
        var bcr = navBarContainer.getBoundingClientRect();
        if (bcr.top < 0) {
          navBar.classList.add('fixed');
        } else {
          navBar.classList.remove('fixed');
        }
    });
}
