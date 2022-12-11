
# Prerequisites
* having mongoDB installed and listening on the default port (27017)

# HOW TO USE

* open a console
* load the appended db.json file into the collection userdb.flowers by
running `mongoimport --jsonArray --db userdb --collection flowers --file db.json`
* cd into p1 folder
* run  `npm i` to install node modules
* run `npx nodemon app.js` to start the express server
* open another console
* cd into p2 folder
* run `npm i` to install node modules
* run `npm start` 
