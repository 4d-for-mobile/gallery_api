
const chai = require('chai');
var expect = chai.expect;
chai.use(require('chai-url'));

const gallery_api = require('./index');

describe("baseURL", function(){
    it("should return a base url", function(){
        expect(gallery_api.baseURL).to.be.not.empty;
        expect(gallery_api.baseURL).to.have.protocol('https');
    });
});

describe("topics", function(){
    it("should return 5 topics", function(){
        expect(gallery_api.topics().length).to.equal(5);
    });
});

describe("repositories", function(){
    let topics = gallery_api.topics()
    topics.forEach((topic, index) => {
        it("should return repos for topic "+topic, function(done){
            gallery_api.repositories(topic)
            .then(function(repos) {
                expect(repos.items.length).to.be.above(0);
                done();
            }, function(error) {
                console.log(error);
            });
        });
    });
});

describe("repository", function(){
    let topic = "form-detail"
    it("should return repo for topic "+topic, function(done){
        gallery_api.repository(topic, "4d-for-ios/form-detail-Cards")
        .then(function(repo) {
            expect(repo.name).to.be.not.empty;
            done();
        }, function(error) {
            console.log(error);
        });
    });
});
