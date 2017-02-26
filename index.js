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
var template = urban_population.innerHTML;
target.innerHTML = _.template(template,{json:json});


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
