var https = require('https');

function getAndPrintHTMLChunks(options) {
  var customOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  // GET a given URL
  https.get(options, function (response) {
  // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    // Console.log each chunk of data as it is received, concat with \n
    response.on('data', function (data) {
      console.log(data, '\n');
    });
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

getAndPrintHTMLChunks(requestOptions);