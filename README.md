[![nodejs](https://github.com/4d-for-ios/gallery_api/workflows/build-test/badge.svg)](https://github.com/4d-for-ios/gallery_api/actions?workflow=build-test)
[![nodejs](https://github.com/4d-for-ios/gallery_api/workflows/publish-gpr-npm/badge.svg)](https://github.com/4d-for-ios/gallery_api/actions?workflow=publish-gpr-npm)
![release](https://img.shields.io/github/v/release/4d-for-ios/gallery_api)

# gallery_api
api to get gallery information

## Usage

```js
var topic = "4d-for-ios-form-list"
gallery_api.repositories(topic)
            .then(function(responses) {
                var repositories = responses.items
                // do something with repositories
            }, function(error) {
                console.log(error);
            });
```