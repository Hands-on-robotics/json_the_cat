const request = require('request');
const breed = process.argv[2];

const fetchData = function (breed) {
  const catApiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(catApiUrl, (error, response, body) => {
    if (error) {
      console.error("A CAT-astrophy! Looks like we can't find a cat by that breed. Here's the error: ", error);
    } else if (response.statusCode === 200) {
      try {
        const data = JSON.parse(body);
        if (data && data[0] && data[0].description) {
          console.log(data[0].description);
        } else {
          console.log("404 Error: Looks like the cat's got our tongue.");
        }
      } catch (parseError) {
        console.error("Error parsing API response:", parseError);
      }
    } else {
      console.error(`API returned a status code of ${response.statusCode}: Something went wrong.`);
    }
  });
};

fetchData(breed);


// const request = require('request');
// const breed = process.argv[2];

// const fetchData = function(breed) {
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
//     if (err) {
//       console.log("A CAT-astrophy! Looks like we can't find a cat by that breed. So heres's the error: ", err);
//     } else {
//       const data = JSON.parse(body);
//       if (data && data[0].description) {
//         console.log(data[0].description);
//       } else {
//         console.log("404 Error: Looks like cat's got our tongue.");
//       }
      
//     }
//   });
// };

// fetchData(breed);
