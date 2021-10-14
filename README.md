# Dog-Breed-App
#### This web app allows a user to view a list of dog breeds and images pulle from the Dog CEO API (https://dog.ceo/dog-api/documentation/). This project uses the Stencil starter app which is an app comprised of custom Stencil components. Node.js and Express were used for backend development.

## Installation Steps:
* Clone the repository
* CD into the "dogbreed-app" directory and run this command to install dependencies:
```bash
npm install
```
* The same may need to be done in the "backend" directory
* You may have to close and reopen the environment to register the changes
* While in the "dogbreed-app" directory, run the command:
```bash
npm run dev
```
* This will build and run the client and server, and a window should be opened to http://localhost:3333/

## User Flow:
* The first page displays a button and a featured dog  (name and image)
 * This is the app-root component which is the page that renders all other components used. When the page is first loaded, the Dog CEO API is called to fetch a random dog to be featured at the top of the page.   
* Click on the "All Dog Breeds" button
  * This is the breeds-button component that calls the GET request in my API (located in backend/routes/dogbreeds.js) which will call the third party Dog CEO API to retrieve the list of dog names using 'https://dog.ceo/api/breeds/list/all'. Using this array of names, the endpoint 'https://dog.ceo/api/breed/${breedName}/images/random' is called to retrieve a random image for that dog breed, then these image urls are merged with the dog breed array and passed to the app-root component.
  * A list of accordion components are displayed
* Click on a dog breed to view an image
  * The accordion-display component displays the dog breed name and image, and renders a share-button and next-image button.
* Click on "Next Image"
  * This button will call the Dog CEO API directly to retrieve a new random image.
* Click "Share"
  * This button uses the Facebook share url to share the image on the user's Facebook.

## Future Optimizations and Additions:
* The user can add a dog breed to a favorites list, and view this list seperately
  * This could be done by saving the dogbreed names and images using cookies, prompting the user to allow cookies.
* The list of dogbreeds does not change often, so fetching the list of dogs everytime the button is pressed is not ideal. The dog breed names could be saved to and retrieved from database, and the API could be called to check for changes.
