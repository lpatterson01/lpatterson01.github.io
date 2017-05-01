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

var myStore = new Commerce('pk_1231221dc8901fda4a524164d348e69ca2dd2ebe8a0c8', true);

myStore.Checkout.generateToken('commerce-js-basic', { 'type' : 'permalink' }, function(resp){
  //Render Checkout
  var token_id = resp.id; //e.g. chkt_959gvxcZ6lnJ7
  //...
  },
  function(error){
  //Error handler
  }
);
