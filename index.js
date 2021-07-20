"use strict";

const fetch = require('node-fetch');

const topics = [
    "form-list",
    "form-detail",
    "form-login",
    "formatter",
    "input-control"
];

const baseURL = "https://4d-go-mobile.github.io/gallery/Specs/";
// const baseURL = "https://raw.githubusercontent.com/4d-go-mobile/gallery/master/Specs/";

exports.baseURL = baseURL

// Return list of available topics
exports.topics = function() {
    return topics;
};

// Fetch repositories information for one topic
exports.repositories = function(topic) {
    return fetch(this.baseURL + topic + "/index.json")
        .then(res => res.json())
};

// Fetch repositories information for one topic
exports.repository = function(topic, project) {
    return fetch(this.baseURL + topic + "/" + project + "/info.json")
        .then(res => res.json())
};
