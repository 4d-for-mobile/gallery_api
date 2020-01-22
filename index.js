const https = require('https');

exports.topics = function() {
    return ["4d-for-ios-form-list", "4d-for-ios-form-detail","4d-for-ios-formatter", "4d-for-ios-form-login"];
}

exports.fetch = function(topic, complete) {
    https.get("https://raw.githubusercontent.com/4d-for-ios/gallery/master/"+topic+".txt", (resp) => {
        let data = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          complete(data.split("\n"))
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
        complete([])
      });
}