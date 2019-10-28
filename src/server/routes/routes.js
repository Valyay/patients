// load up our shiny new route for users
const presentRoutes = require('./present');
const retiredRoutes = require('./retired');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });


    // run our user route module here to complete the wire up
    presentRoutes(app, fs);
    retiredRoutes(app, fs);

};

module.exports = appRouter;

