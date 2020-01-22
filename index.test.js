
var expect = require('chai').expect;

const gallery_api = require('./index');

describe("topics", function(){
    it("should return 4 topics", function(){
        expect(gallery_api.topics().length).to.equal(4);
    });
});

describe("repositories", function(){
    let topics = gallery_api.topics()
    topics.forEach((topic, index) => {
        it("should return repo for topic "+topic, function(done){
            gallery_api.fetch(topic, (repos) => {
                expect(repos.length).to.be.above(0);
                done();
            });
        });
    });
});
