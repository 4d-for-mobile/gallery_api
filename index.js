"use strict";

const https = require("https");

const topics = [
  "4d-for-ios-form-list",
  "4d-for-ios-form-detail",
  "4d-for-ios-formatter",
  "4d-for-ios-form-login"
];
const baseURL =
  "https://raw.githubusercontent.com/4d-for-ios/gallery/master/Specs/";

// Return list of available topics
exports.topics = function() {
  return topics;
};

// Fetch repositories information for one topic
exports.repositories = function(topic) {
  return new Promise((resolve, reject) => {
    var url = baseURL + topic + "/index.json";
    //console.log(url)
    https
      .get(url, (response) => {
        var data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", () => {
          //console.log(data);
          //console.log(response.statusCode );
          if (response.statusCode > 200 || response.statusCode < 299) {
            try {
              var json = JSON.parse(data);
              //console.log(json);
              resolve(json);
            } catch (e) {
              //console.log(e);
              reject(e);
            }
          } else {
            reject(response);
          }
        });
      })
      .on("error", err => {
        reject(err);
      });
  });
};

// Fetch repositories information for one topic
exports.repository = function(topic, project) {
  return new Promise((resolve, reject) => {
    let url = baseURL + topic + "/" + project + "/info.json";
    //console.log(url);
    https
      .get(url, response => {
        let data = "";
        response.on("data", chunk => {
          data += chunk;
        });
        response.on("end", () => {
          //console.log(data);
          //console.log(response.statusCode );
          if (response.statusCode > 200 || response.statusCode < 299) {
            try {
              let json = JSON.parse(data);
              //console.log(json);
              resolve(json);
            } catch (e) {
              //console.log(e);
              reject(e);
            }
          } else {
            reject(response);
          }
        });
      })
      .on("error", err => {
        reject(err);
      });
  });
};
