var https = require('https');

function getHTML (options, callback) {
  var customOptions = {
    host: options.host,
    path: options.path
  };

  https.get(options, function (response) {
  // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    // Console.log each chunk of data as it is received, concat with \n
    response.on('data', function (data) {
      console.log(data, '\n');
    });
    response.on('end', function() {
      callback();
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);