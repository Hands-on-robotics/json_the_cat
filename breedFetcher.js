const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const catApiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(catApiUrl, (error, response, body) => {

    if (error) {
      return callback(error);

    } else if (response.statusCode === 200) {
      try {
        const data = JSON.parse(body);
        if (data && data[0] && data[0].description) {
          return callback(error, data[0].description);
        } else {
          return callback("404: No Cat Found");
        }
      } catch (parseError) {
        console.error("Error parsing API response:", parseError);
      }

    } else {
      return callback(error);
    }
  });
};

module.exports = { fetchBreedDescription };
