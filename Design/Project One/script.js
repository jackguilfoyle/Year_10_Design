fetch('https://api.wheretheiss.at/v1/satellites/25544')
  .then((response) => {
    return response.json()
  })
  .then((data) => {

    let latitude2 = data.latitude
    let longitude = data.longitude 
    let velocity = data.velocity
    let altitude = data.altitude
    let time = data.timestamp

    //console.log(data)

    //document.getElementById("la").innerHTML = 'Latitude: ' + latitude;
    document.getElementById("lo").innerHTML = 'Longitude: ' + longitude;
    document.getElementById("v").innerHTML = 'Velocity: ' + velocity + ' Km/h';
    document.getElementById("al").innerHTML = 'Altitude: ' + altitude + ' Km';

    var d = new Date(time * 1000);
      document.getElementById("t").innerHTML = 'Time: ' + d;

    var mymap = L.map('mapid').setView([latitude2, longitude], 5);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 10,
    minZoom: 1,
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
    }).addTo(mymap);


	var marker = L.marker([latitude2, longitude]).addTo(mymap);
		marker.bindPopup("<b>ISS Location</b>").openPopup();
})

function myFunction(){
  	location.reload()
};

function laFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("Latitude");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    la.style.display = "block";
  } else {
    la.style.display = "none";
  }
}

function loFunction() {
  // Get the checkbox
  var checkBox2 = document.getElementById("Longitude");

  // If the checkbox is checked, display the output text
  if (checkBox2.checked == true){
    lo.style.display = "block";
  } else {
    lo.style.display = "none";
  }
}

function alFunction() {
  // Get the checkbox
  var checkBox3 = document.getElementById("Altitude");

  // If the checkbox is checked, display the output text
  if (checkBox3.checked == true){
    al.style.display = "block";
  } else {
    al.style.display = "none";
  }
}

function vFunction() {
  // Get the checkbox
  var checkBox4 = document.getElementById("Velocity");

  // If the checkbox is checked, display the output text
  if (checkBox4.checked == true){
    v.style.display = "block";
  } else {
    v.style.display = "none";
  }
}

function tFunction() {
  // Get the checkbox
  var checkBox5 = document.getElementById("Time");

  // If the checkbox is checked, display the output text
  if (checkBox5.checked == true){
    t.style.display = "block";
  } else {
    t.style.display = "none";
  }
}

var info = function () {
    var tmp = null;
    $.ajax({
        'async': false,
        'type': "Get",
        'global': false,
        'dataType': 'html',
        'url': "https://api.wheretheiss.at/v1/satellites/25544",
        'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
        'success': function (data) {
            tmp = data;
        }
    });
    return tmp;
}();

let latitude = info.latitude
console.log(info)



