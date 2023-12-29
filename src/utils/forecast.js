const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=eedfbd44f64f4af5bddfe45b0d397a2f&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.weather_descriptions[0] + ' And '   + body.current.temperature + ' degree out there. and it feels like ' + body.current.feelslike + '. There is a ' + body.current.precip + " % chance of raining.")
        }
    })
}

module.exports = forecast