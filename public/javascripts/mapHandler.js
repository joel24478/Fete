function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: { lat: 44.540, lng: -78.546 },
        zoom: 8
    });
}

function getPost() {
    var node = document.getElementById("template").cloneNode(true);
    node.id = "post"; // Don't forget :)
    // modify node contents with DOM manipulation
    document.getElementById("post").appendChild(node);
}

function placePost() {

}