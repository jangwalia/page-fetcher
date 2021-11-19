const arg = process.argv;
const url = arg[2];
const destinationFile = arg[3];
const request = require('request');
const fs = require('fs');
//get request package

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(destinationFile, body, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});

