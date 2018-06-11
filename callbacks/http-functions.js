module.exports = function getHTML (options, callback) {
  var https = require('https');
  var customOptions = {
    host: options.host,
    path: options.path
  };
  var allData;
  https.get(options, function (response) {
  // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    // Console.log each chunk of data as it is received, concat with \n
    response.on('data', function (data) {
      allData += data;
    });
    response.on('end', function() {
      callback();
    });
  });
};