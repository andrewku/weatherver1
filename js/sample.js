var city = ['南投','台中','台北','台南','台東','嘉義','基隆','宜蘭','屏東','彰化','新北市','新竹','桃園','花蓮','苗栗','雲林','高雄',];
var scity = {};
scity['南投']=['南投市',];
scity['台中']=['西屯','石岡','清水','新社','大甲',];
scity['台北']=['內湖','新店',];
scity['台南']=['安平','佳里','麻豆','新化','玉井',];
scity['台東']=['台東市','關山',];
scity['嘉義']=['布袋',];
scity['基隆']=['七堵',];
scity['宜蘭']=['宜蘭市','蘇澳','南澳',];
scity['屏東']=['屏東市','東港','枋山',];
scity['彰化']=['彰化市','二林','鹿港',];
scity['新北市']=['淡水','鶯歌','金山','三芝','萬里','雙溪',];
scity['新竹']=['東區',];
scity['桃園']=['大園','中壢','觀音','龍潭','桃園機場',];
scity['花蓮']=['花蓮市',];
scity['苗栗']=['三灣',];
scity['雲林']=['斗南','虎尾',];
scity['高雄']=['左營','岡山','高雄機場',];

var cityToWoeid = {};
cityToWoeid['七堵'] = 2306188;
cityToWoeid['三灣'] = 2306229;
cityToWoeid['三芝'] = 2306228;
cityToWoeid['中壢'] = 2306184;
cityToWoeid['二林'] = 2306195;
cityToWoeid['佳里'] = 2306193;
cityToWoeid['內湖'] = 2306179;
cityToWoeid['南投市'] = 2306204;
cityToWoeid['南澳'] = 2306243;
cityToWoeid['台東市'] = 2306190;
cityToWoeid['大園'] = 2306209;
cityToWoeid['大甲'] = 2306210;
cityToWoeid['安平'] = 2306182;
cityToWoeid['宜蘭市'] = 2306198;
cityToWoeid['屏東市'] = 2306189;
cityToWoeid['岡山'] = 2306199;
cityToWoeid['左營'] = 2306180;
cityToWoeid['布袋'] = 2306206;
cityToWoeid['彰化市'] = 2306183;
cityToWoeid['斗南'] = 2306212;
cityToWoeid['新化'] = 2306217;
cityToWoeid['新店'] = 2306186;
cityToWoeid['新社'] = 2306218;
cityToWoeid['東區'] = 2306185;
cityToWoeid['東港'] = 2306213;
cityToWoeid['枋山'] = 2306224;
cityToWoeid['桃園機場'] = 2306254;
cityToWoeid['淡水'] = 2306211;
cityToWoeid['清水'] = 2306194;
cityToWoeid['玉井'] = 2306232;
cityToWoeid['石岡'] = 2306207;
cityToWoeid['花蓮市'] = 2306187;
cityToWoeid['萬里'] = 2306231;
cityToWoeid['蘇澳'] = 2306208;
cityToWoeid['虎尾'] = 2306250;
cityToWoeid['西屯'] = 2306181;
cityToWoeid['觀音'] = 2306200;
cityToWoeid['金山'] = 2306223;
cityToWoeid['關山'] = 2306227;
cityToWoeid['雙溪'] = 2306251;
cityToWoeid['高雄機場'] = 2306255;
cityToWoeid['鶯歌'] = 2306214;
cityToWoeid['鹿港'] = 2306201;
cityToWoeid['麻豆'] = 2306203;
cityToWoeid['龍潭'] = 2306202;

var cityInit = function() {
  var tmpCity = [];
  for (var k in cityToWoeid) {
    tmpCity.push('<div class="btn btn-link" id="'+cityToWoeid[k]+'">'+k+'</div>');
  }
  $('#method1').append(tmpCity);

  tmpCity = [];
  for (var i in city) {
    tmpCity.push('<option>'+city[i]+'</option>');  
  }
  $('#citybox1').append(tmpCity);
  $('#citybox1').trigger('change');
}

$('#citybox1').change( function(e) {

  var selectedCity = $(this).find(':selected').text();
  var newOption = [];
  var first = scity[selectedCity][0];
  var woeid = cityToWoeid[first]; 

  for(var i in scity[selectedCity]) {
    newOption.push('<option>'+scity[selectedCity][i]+'</option>');
  }

  $('#citybox2').children().remove();
  $('#citybox2').append(newOption);
  
});


$('#citybox2').change( function(e) {
  var selectedCity = $(this).find(':selected').text();
  var woeid = cityToWoeid[selectedCity];

});

  

