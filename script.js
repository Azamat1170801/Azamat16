function big(element) {
    element.style.fontSize = "30px";
}

function small(element) {
    element.style.fontSize = "24px";
}

function initMap() {
    var option = {
      center: { lat: 52.27525942572552, lng: 76.98893020156922}, 
      zoom: 18,
    }
    var map = new google.maps.Map(document.getElementById("map"), option);
    var icon = {
        url: "https://pngshare.com/wp-content/uploads/2020/06/google-location-icon-location_black.png",
        scaledSize: new google.maps.Size(30, 30), // scaled size
        
    };
  
    var marker = new google.maps.Marker({
        position: { lat: 52.27476356249494, lng: 76.98872448097173},
        map: map,
        icon: icon,
    });
  
    var marker1 = new google.maps.Marker({ 
        position: { lat: 52.2758342073186, lng: 76.98940751492697},
        map: map,
        icon: icon,
    })
  
    var marker2 = new google.maps.Marker({ 
        position: {lat: 52.27531651087495, lng: 76.98975862349636},
        map: map,
        icon: icon,
    })
  
  /*  const flightPlanCoordinates = [
      { lat: 52.27476356249494, lng: 76.98872448097173},
      { lat: 52.2758342073186, lng: 76.98940751492697},
      { lat: 52.27531651087495, lng: 76.98975862349636},
      { lat: 52.27476356249494, lng: 76.98872448097173},
    ]; */
    const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
    flightPath.setMap(map);
  }