const express = require('express');
const router = express.Router()
var request = require('request');
var cors = require('cors');
const fetch = require('node-fetch');
router.use(cors());


router.get('/', async (req, res) => {

  let breeds = await getBreeds();
  let images = await getImages(breeds);
  for (var i = 0; i < breeds.length; i++) {
    breeds[i].push(images[i]['message']);
  }
  res.send(breeds);

})

router.get('/:breed', async (req, res) => {
  request(`https://dog.ceo/api/breed/${req.params.breed}/images/random`, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const dogJson = JSON.parse(body);
      dog = dogJson["message"];
      // console.log(dogJson)
      res.send(dogJson)

    }
  })

})


async function getImages(breeds) {

  const promises = breeds.map((breed) =>
  fetch(`https://dog.ceo/api/breed/${breed[0]}/images/random`).then((response) => response.json())
  );

  const images = await Promise.all(promises);
  return images;
}

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
    }
    else {
      breeds.push([i]);
    }
  }
  return breeds;
}

module.exports = router
