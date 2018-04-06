//Dependent on DetectRTC.min.js, jquery-3.3.1.min.js
$(document).ready(function() {
    if (hasWebGL && hasWebRTC) {
        $('#readyIcon').removeClass();
        $('#readyIcon').addClass('glyphicon glyphicon-ok')
        $('#readyIcon').addClass('ready');
        $('#readyMessage').text('Your browser meets the minimum requirements.');
        console.log('ready');
    } else {
        console.log('notready')
    }
    initMap();
});

//https://stackoverflow.com/questions/11871077/proper-way-to-detect-webgl-support
function hasWebGL() {
    try {
        var canvas = document.createElement('canvas');
        return !! window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch (e) {
        return false;
    }
}

function hasWebRTC() {
    return DetectRTC.isWebRTCSupported;
}

function cropImages() {
    $('.instaImg > img').each(function () {
        var $image = $(this);
        $(this).on('load', function () {
            if ($image.height() > $image.width()) {
                $image.addClass('portrait');
            } else {
                $image.addClass('landscape');
            }
        });
    });
}

/*********************************************
*
*    GOOGLE MAPS
*
*********************************************/
var map;
var prevWindow = false;
function initMap() {
    var mapStyles = [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]

    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 57.6896773, lng: 11.9550479},
      zoom: 12,
      styles: mapStyles
    });

    var iconBase = '/data/markers/';
    var anggardsSite = new GBGSite('Änggårdsbergen',
        'https://www.google.co.uk/maps/place/Naturreservatet+%C3%84ngg%C3%A5rdsbergen/@57.6684956,11.9548295,17z/data=!3m1!4b1!4m9!1m3!11m2!2s1m2lbg1o5ZN7tHieLBEMnhk9rFyQ!3e3!3m4!1s0x464ff2fda945b6b3:0xc5e534bb788924a3!8m2!3d57.6684956!4d11.9570182',
        'Göteborg Botaniska Trädgården',);
    var anggards = new MarkerWithLabel({
      position: {lat: 57.6684956, lng: 11.9548295},
      icon: iconBase + 'angards.png',
      labelContent: 'Änggårdsbergen',
      labelClass: 'mapLabel',
      labelAnchor: new google.maps.Point(28, 0),
      map: map
    });
    var angardsWindow = new google.maps.InfoWindow({
        content: anggardsSite.contentString(),
        maxWidth: 300
    });
    anggards.addListener('click', function () {
        if (prevWindow) {
            prevWindow.close();
        }
        prevWindow = angardsWindow;

        angardsWindow.open(map, anggards);
    });

    var lillaSite = new GBGSite('Lilla Bommen',
        'https://www.google.co.uk/maps/place/G%C3%B6taleden,+411+90+G%C3%B6teborg/@57.710859,11.9648498,17z/data=!3m1!4b1!4m9!1m3!11m2!2s1m2lbg1o5ZN7tHieLBEMnhk9rFyQ!3e3!3m4!1s0x464ff3616445da05:0xb780bf4a5a9cb928!8m2!3d57.710859!4d11.9670385',
        'Lilla Bommen')
    var lilla = new MarkerWithLabel({
      position: {lat: 57.710859, lng: 11.9648498},
      icon: iconBase + 'lilla.png',
      labelContent: 'Lilla Bommen',
      labelClass: 'mapLabel',
      labelAnchor: new google.maps.Point(28, 0),
      map: map
    });
    var lillaWindow = new google.maps.InfoWindow({
        content: lillaSite.contentString(),
        maxWidth: 300
    });
    lilla.addListener('click', function () {
        if (prevWindow) {
            prevWindow.close();
        }
        prevWindow = lillaWindow;

        lillaWindow.open(map, lilla);
    })

    var linneSite = new GBGSite('Linnéstaden',
        'https://www.google.co.uk/maps/place/G%C3%B6teborg+Linn%C3%A9platsen/@57.6899871,11.9500631,17z/data=!3m1!4b1!4m9!1m3!11m2!2s1m2lbg1o5ZN7tHieLBEMnhk9rFyQ!3e3!3m4!1s0x464ff315a615efab:0xfe928be37765ce32!8m2!3d57.6899871!4d11.9522518',
        'Linnéplatsen');
    var linne = new MarkerWithLabel({
      position: {lat: 57.6899871, lng: 11.9500631},
      icon: iconBase + 'linne.png',
      labelContent: 'Linnéstaden',
      labelClass: 'mapLabel',
      labelAnchor: new google.maps.Point(28, 0),
      map: map
    });
    var linneWindow = new google.maps.InfoWindow({
        content: linneSite.contentString(),
        maxWidth: 300
    });
    linne.addListener('click', function () {
        if (prevWindow) {
            prevWindow.close();
        }
        prevWindow = linneWindow;

        linneWindow.open(map, linne);
    })

    var mastSite = new GBGSite('Masthugget',
        'https://www.google.co.uk/maps/place/MASTHUGGSTERRASSEN+5,+413+18+G%C3%B6teborg/@57.6980054,11.9408686,17z/data=!3m1!4b1!4m9!1m3!11m2!2s1m2lbg1o5ZN7tHieLBEMnhk9rFyQ!3e3!3m4!1s0x464ff346c8eaae55:0x123314bbdbeb6e5e!8m2!3d57.6980054!4d11.9430573',
        'Masthugget')
    var mast = new MarkerWithLabel({
      position: {lat: 57.6980054, lng: 11.9408686},
      icon: iconBase + 'mast.png',
      labelContent: 'Masthugget',
      labelClass: 'mapLabel',
      labelAnchor: new google.maps.Point(28, 0),
      map: map
    });
    var mastWindow = new google.maps.InfoWindow({
        content: mastSite.contentString(),
        maxWidth: 300
    });
    mast.addListener('click', function () {
        if (prevWindow) {
            prevWindow.close();
        }
        prevWindow = mastWindow;

        mastWindow.open(map, mast);
    })

}

class GBGSite {
    constructor(title, gMaps, nearestStop) {
        this.title = title;
        this.gMaps = gMaps;
        this.nearestStop = nearestStop;
    }

    contentString() {
        let contentString = '<div class="iw-container">' +
                                '<div class="iw-header"><h4>' + this.title + '</h4><a href="' + this.gMaps + '" target="_blank" rel="noopener">Get Directions &#8599;&#xFE0E;</a></div>' +
                                '<div class="iw-content"><p><span class="marker-label">Nearest Stop</span><br>' + this.nearestStop + '</p>' +
                                '<p><span class="marker-label">Marker Location</span><br>See walking directions below map</p></div>' +
                            '</div>';
        return contentString;
    }
}

