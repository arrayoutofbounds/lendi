# Photo Retrival

This web application retrieves data from an api and displays it.

![alt text](https://github.com/arrayoutofbounds/lendi/blob/master/screenshots/1.png?raw=true "Screenshot")

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

Tests were written using jest and enzyme. Snapshote and unit tests are written to ensure coverage.

`yarn test` or `npm test`

##### Issues Encountered

Some 3rd party libraries are using an older versions of react,react-dom,react-test-renderer etc. This made snapshot and component testing more challenging! 

Another challenge was testing components that use redux. Enzyme and Jest had some intricacies with configurations and acesss that took a while to navigate. 

### Deployment

https://lendi.herokuapp.com/

Thank you!

- Anmol Desai
