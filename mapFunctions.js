
//simple get request script
function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function setUpMap(){

    var map = createMap();

    showCameras("https://data.cityofchicago.org/resource/4i42-qv3h.json",'images/marker-blue.png',map);
    showCameras("https://data.cityofchicago.org/resource/thvf-6diy.json",'images/marker-red.png',map);
}

function showCameras(link, image,map){
    //retrieves the data from the database
    arrayOfLocations = JSON.parse(httpGet(link));

    //go through
    for(i = 0; i<arrayOfLocations.length; i++){

        //creates a new latitude object for the marker
        myLatlng = new google.maps.LatLng(arrayOfLocations[i]["latitude"],arrayOfLocations[i]["longitude"]);

        //creates the marker object with the passed image and created longitude and latitude
        marker = new google.maps.Marker({
            position: myLatlng,
            icon: image
        });

        //adds the marker to the map
        marker.setMap(map);
    }
}

function createMap(){
    //configures options
    var mapOptions = {
        center: { lat: 41.9, lng: -87.5},
        zoom: 10
    };

    //creates a new map object, adds it to the document, and returns it
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    return map;
}

function scrollDown(){

}