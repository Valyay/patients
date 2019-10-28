const retiredRoutes = (app, fs) => {

    // variables
    const dataPath = './src/server/data/quittingList.json';

    // READ
    app.get('/retired', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = retiredRoutes;