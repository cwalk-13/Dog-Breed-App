const express = require('express');
const router = express.Router()
var request = require('request');
var cors = require('cors');
var async = require('async');
const fetch = require('node-fetch');
router.use(cors());


router.get('/', async (req, res) => {
  // request('https://dog.ceo/api/breeds/list/all', function (error, response, body) {

  //   if (!error && response.statusCode == 200) {
  //     const breedsJson = JSON.parse(body);
  //     breedsDict = breedsJson["message"];
  //     // breeds = [];

  //     // for(var i in breedsDict) {
  //     //   if (breedsDict[i].length > 0) {
  //     //     for (var j in breedsDict[i]) {
  //     //       breedName = i + "/" + breedsDict[i][j];
  //     //       var image =   async.parallel(getImage(breedName), function (err, resp) {
  //     //         if(err) {
  //     //           console.log(err);
  //     //           return;
  //     //         };
  //     //         return resp;
  //     //       });
  //     //       console.log(image);
  //     //       breeds.push([breedName, image]);
  //     //     }
  //     //   }
  //     //   else {
  //     //     var image =   async.parallel(getImage(i), function (err, resp) {
  //     //       if(err) {
  //     //         console.log(err);
  //     //         return;
  //     //       };
  //     //       console.log(resp)
  //     //       return resp;
  //     //     });
  //     //     breeds.push([i, image]);
  //     //   }
  //     // }
  //     // res.send(breeds)


  //     for(var i in breedsDict) {
  //       if (breedsDict[i].length > 0) {
  //         for (var j in breedsDict[i]) {
  //           breedName = i + "/" + breedsDict[i][j];
  //           breeds.push([breedName]);
  //         }
  //       }
  //       else {
  //         breeds.push([i]);
  //       }
  //     }

  //     images = getImages(breeds);
  //     console.log(images);
  //     // for (var i = 0; i < breeds.length; i++) {
  //     //   breeds[i].push(images[i]);
  //     // }
  //     // console.log(breeds);
  //     res.send(breeds);
  //   }
  // })
  let breeds = await getBreeds();
  console.log(breeds);
  let images = await getImages(breeds);
  for (var i = 0; i < breeds.length; i++) {
    breeds[i].push(images[i]['message']);
  }
  console.log(breeds);
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

// function getImage(breedURL) {
//   request(`https://dog.ceo/api/breed/${breedURL}/images/random`, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       const dogJson = JSON.parse(body);
//       dog = dogJson["message"];
//       // console.log(dogJson)
//       response.send(dog);
//       // return dog;

//     }
//   })
// }

async function getImages(breeds) {

  const promises = breeds.map((breed) =>
  fetch(`https://dog.ceo/api/breed/${breed[0]}/images/random`).then((response) => response.json())
  );

  const images = await Promise.all(promises);
  // console.log(images);
  return images;
}

async function getBreeds() {
  var breeds = []
  const promises = fetch('https://dog.ceo/api/breeds/list/all').then((response) => response.json())

  // const breedsJson = JSON.parse(body);
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
  // console.log(breeds);
  return breeds;
}

module.exports = router
