# Photo Retrival

This web application retrieves data from an api and displays it.

![alt text](https://github.com/arrayoutofbounds/lendi/blob/master/screenshots/1.png?raw=true "Web")

![alt text](https://github.com/arrayoutofbounds/lendi/blob/master/screenshots/3.png?raw=true "Mobile")

##### FUN FACT
Click the lendi tag on the navbar and see what happens! :)

### Technologies used:
* React
* Redux 
* Jest
* Enzyme

To ensure that the application loaded efficiently, client side lazy loading was used. To ensure responsiveness, bootsrap and react-bootstrap were used.

Install dependencies:

`yarn install` or `npm install`

Run:

`npm start`

### Testing

Tests were written using jest and enzyme. Snapshote and unit tests are written to ensure coverage. Other plugins were also used to ensure optimim output.

`yarn test` or `npm test`

![alt text](https://github.com/arrayoutofbounds/lendi/blob/master/screenshots/4.png?raw=true "Coverage")

##### Issues Encountered

Some 3rd party libraries are using an older versions of react,react-dom,react-test-renderer etc. This made snapshot testing  the app component quite challenging! 

Another challenge encountered was the testing of components that use redux. Enzyme and Jest had many configuration and setup blindspots which took a while to navigate. 

### Deployment

https://lendi.herokuapp.com/

Thank you!

- Anmol Desai
