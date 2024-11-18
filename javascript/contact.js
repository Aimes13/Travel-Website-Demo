function initMap() {
    var yourLocation = {lat: -17.9256, lng: 25.8326};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: yourLocation
    });

    // Marker for main office
    var officeMarker = new google.maps.Marker({
        position: yourLocation,
        map: map,
        title: 'Visit Victoria Falls Office'
    });

    // Markers for major attractions
    var attractions = [
        {location: {lat: -17.9339, lng: 25.8342}, title: 'Victoria Falls'},
        {location: {lat: -17.9783, lng: 25.7102}, title: 'Zambezi National Park'},
        {location: {lat: -17.9284, lng: 25.8572}, title: 'Victoria Falls Bridge'},
        {location: {lat: -17.9308, lng: 25.8423}, title: 'Victoria Falls Hotel'},
        {location: {lat: -17.9279, lng: 25.8423}, title: 'Kingdom Hotel'},
        {location: {lat: -17.9983, lng: 25.8095}, title: 'Stanley & Livingstone Boutique Hotel'},
        {location: {lat: -17.9186, lng: 25.8188}, title: 'Victoria Falls Safari Lodge'},
        {location: {lat: -17.9262, lng: 25.8416}, title: 'Ilala Lodge'}
    ];

    attractions.forEach(function(attraction) {
        new google.maps.Marker({
            position: attraction.location,
            map: map,
            title: attraction.title
        });
    });
}

// Initialize the map
window.initMap = initMap;

// Display popup message
function confirmForm() {
    const form = document.getElementById("contactForm");

    if (form.checkValidity()) {
        alert("Thank you for your form submission! We aim to respond to all inquiries within 24 hours.");
        return true;
    } else {
        form.reportValidity();
        return false;
    }
}
