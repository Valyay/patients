const presentRoutes = (app, fs) => {

    // variables
    const dataPath = './src/server/data/presentList.json';

    // READ
    app.get('/present', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = presentRoutes;