var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'http://mysafeinfo.com/api/data?list=worldurbanpopulation&format=json',
        'dataType': 'json',
        'success': function (data) {
          json = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          // alert('Danger Danger Danger')
          // debugger
          // return $("#dinosaurs").text(jqXHR.statusText);
          return $("#urban_population").text('Sorry!  There was an error requesting your data.')
        }
    });
    return json
})();

for(var i = 0; i < json.length; i++) {
  // $('#dinosaurs').append('<li>' + json[i].nm + '</li>');
  $('#urban_population').append("<li class='urban_population' id='" + json[i].cd + "'>" + json[i].cd + "</li>");
}
