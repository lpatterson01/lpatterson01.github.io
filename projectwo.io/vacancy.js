var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'https://data.baltimorecity.gov/resource/rw5h-nvv4.json',
        'dataType': 'json',
        'success': function (data) {
          json = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          // alert('Danger Danger Danger')
          // debugger
          // return $("#dinosaurs").text(jqXHR.statusText);
          return $("#vacancy").text('Sorry!  There was an error requesting your data.')
        }
    });
    return json
})();
// var template = vacancy.innerHTML;
// target.innerHTML = _.template(template,{json:json});

var mymap = L.map('mapid').setView([39.290, -76.603], 12.0);


L.tileLayer('https://api.mapbox.com/styles/v1/lpatterson01/cj0xv8cne00m12rpnjgn37k3c/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHBhdHRlcnNvbjAxIiwiYSI6ImNqMHh1dDJzbTAwcncyd210dnViN2YxM2wifQ.MrNek_KCqtbya9Od0y5Ekw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'lpatterson01.6x06zbp6',
    accessToken: 'pk.eyJ1IjoibHBhdHRlcnNvbjAxIiwiYSI6ImNqMHh1dDJzbTAwcncyd210dnViN2YxM2wifQ.MrNek_KCqtbya9Od0y5Ekw'
}).addTo(mymap);

// var circle
// var xCoord
// var yCoord
//
// for(var i = 0; i < json.length;i++) {
//   longitude = json[i].location.coordinates[0]
//   latitude = json[i].location.coordinates[1]
//   circle = L.circle([latitude, longitude], {
//       color: 'red',
//       fillColor: '#f03',
//       fillOpacity: 0.5,
//       radius: 200
//   }).addTo(mymap);
// }

// for(vari=0;i<json.length;i++) {
//   var circle = L.circle([json.location.coordinates[0], json.location.coordinates[1]], {
//       color: 'red',
//       fillColor: '#f03',
//       fillOpacity: 0.5,
//       radius: 500
//   }).addTo(mymap);
// }


// for(var i = 0; i < json.length; i++) {
//   // $('#dinosaurs').append('<li>' + json[i].nm + '</li>');
//   $('#urban_population').append("<li class='urban_population' id='" + json[i].rnk + "'>" + json[i].rnk + "</li>");
//   $('#urban_population').append("<li class='urban_population' id='" + json[i].cn + "'>" + json[i].cn + "</li>");
//   $('#urban_population').append("<li class='urban_population' id='" + json[i].cd + "'>" + json[i].cd + "</li>");
//   $('#urban_population').append("<li class='urban_population' id='" + json[i].yr + "'>" + json[i].yr + "</li>");
//   $('#urban_population').append("<li class='urban_population' id='" + json[i].pop + "'>" + json[i].pop + "</li>");
//   $('#urban_population').append("<li class='urban_population' id='" + json[i].pct + "'>" + json[i].pct + "</li>");
//   $('#urban_population').append("<li class='urban_population' id='" + json[i].fr + "'>" + json[i].fr + "</li>");
// }
