var baseUrlApiWeather = 'http://api.worldweatheronline.com/free/v2/weather.ashx';
var request = require('request');

var weather = function (options, callbackFunction) {
    var requestParams = {
        key: options.key,
        format: 'json',
        num_of_days: options.num_of_days | 1,
        q: options.q,
        date: options.date
    };

    request({ url: baseUrlApiWeather, qs: requestParams }, callbackFunction);
};

module.exports = weather;
