var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  var reverseString = html.split("").reverse().join("");
  console.log(reverseString);

}

getHTML(requestOptions, printReverse);