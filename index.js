const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];


// Calling the function that was requested
fetchBreedDescription(breedName, (err, description) => {

  if (!breedName) {
    console.log("Cat got your tongue? We sure could use the name of a cat breed");
  } else if (err) {
    console.log("Looks like the cat's out of the bag! We have an error: ", err);
  } else {
    console.log(description);
  }
});

