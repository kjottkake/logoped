// Initialize and add the map
function initMap() {
  // The location of Bybrua
  const logoped = { lat: 60.801622, lng: 10.595405 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: logoped,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: logoped,
    map: map,
  });
}

