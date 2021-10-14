/*
Charles Walker
dogbreeds.js
This file contains the api routes that call the Dog CEO API
*/
const express = require('express');
const router = express.Router()
var cors = require('cors');
const fetch = require('node-fetch');
router.use(cors());

//This GET method will call the getBreeds function to get a list of breeds, and getImages function to attatch an image to each breed
router.get('/', async (req, res) => {
  let breeds = await getBreeds();
  let images = await getImages(breeds);
  for (var i = 0; i < breeds.length; i++) {
    breeds[i].push(images[i]['message']);
  }
  res.send(breeds);
})


/*
getImages takes a list of breed names as a parameter, and uses this to call the Dog CEO API that returns a random image
The api is called for every breed name in the list, and returns the entire response as a promise
*/
async function getImages(breeds) {
  const promises = breeds.map((breed) =>
  fetch(`https://dog.ceo/api/breed/${breed[0]}/images/random`).then((response) => response.json())
  );
  const images = await Promise.all(promises);
  return images;
}

/*
getBreeds calls the Dog CEO API and returns a list of all dog breeds
*/
async function getBreeds() {
  var breeds = []
  const promises = fetch('https://dog.ceo/api/breeds/list/all').then((response) => response.json())
  const body = await Promise.resolve(promises);
  breedsDict = body["message"];

  for(var i in breedsDict) {
    if (breedsDict[i].length > 0) {
      for (var j in breedsDict[i]) {
        breedName = i + "/" + breedsDict[i][j];
        breeds.push([breedName]);
      }
    } else {
      breeds.push([i]);
    }
  }
  return breeds;
}

module.exports = router
