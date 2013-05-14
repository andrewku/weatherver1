

var updateWeather = function(woeid) {
  
  var query = 'select * from weather.forecast where woeid=' + woeid;
  var url = 'http://query.yahooapis.com/v1/public/yql?format=json&q=' + query;
  
  $.getJSON(
    url,
    {},
    function(data, status){ 
      console.log('data', data);
      console.log('status', status);

      var item = data['query']['results']['channel']['item'];
      var title = item['title'];
      var location = item['lat']+','+item['long'];
      var date = item['pubDate'];
      var temp = item['condition']['temp'];
      var text = item['condition']['text'];

      $('#weather_data #place').text(title);
      $('#weather_data #date').text(location);
      $('#weather_data #temp').text(temp+'℉');
      $('#weather_data #phen').text(text);
      $('#weather_data #corod').text(date);

      
    }
  );
};

$('#clickOn').on('click', 'div.btn.btLink', function(e) {
  console.log(e.target.id);
  var woeid = e.target.id;
  updateWeather(woeid);
});
