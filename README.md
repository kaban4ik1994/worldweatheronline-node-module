#worldweatheronline-node-module

##Getting started

#Instal
    npm install worldweatheronline-node-module
#Example
This module gets next input data: options, which consists a key to geotargeting Api, q(the place for which you want to see the weather) in others formats(US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name) and callback-function. Further there is a request to the api and the output goes object weather.

    var geotargeting = require('google-geotargeting-node-module');
    geotargeting({
        latlng: req.query.latitude + ',' + req.query.longitude,
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.send(body);
        }
        else {
            res.status(400).send('Error');
        }
    });
