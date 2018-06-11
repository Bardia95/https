var https = require('https');

function getAndPrintHTMLChunks () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  // GET a given URL
  https.get(requestOptions, function (response) {
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

getAndPrintHTMLChunks();