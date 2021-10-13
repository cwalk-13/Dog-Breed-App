const express = require('express');
const router = express.Router()
var request = require('request');
var cors = require('cors');
router.use(cors());


router.get('/', async (req, res) => {
  request('https://dog.ceo/api/breeds/list/all', function (error, response, body) {

    if (!error && response.statusCode == 200) {
      const breedsJson = JSON.parse(body);
      breedsDict = breedsJson["message"];
      breeds = [];

      for(var i in breedsDict) {
        if (breedsDict[i].length > 0) {
          for (var j in breedsDict[i]) {
            breedName = i + "-" + breedsDict[i][j];
            breeds.push(breedName);
          }
        }
        else {
          breeds.push(i);
        }
      }
      // console.log(breeds)
      res.send(breeds)
    }
  })
})

router.get('/:breed', async (req, res) => {
  request(`https://dog.ceo/api/breed/${req.params.breed}/images/random`, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const dogJson = JSON.parse(body);
      // dog = dogJson["message"];
      // console.log(dogJson)
      res.send(dogJson)

    }
  })

})



module.exports = router
