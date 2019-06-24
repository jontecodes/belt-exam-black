var restaurants = require('../controllers/restaurants');

module.exports = function(app){
    app.get('/restaurant', (req, res) => restaurants.index(req, res));
    app.get('/reviews/:id', (req, res) => restaurants.getReviews(req, res));
    app.get('/restaurant/:id', (req, res) => restaurants.show(req, res));
    app.post('/create', (req, res) => restaurants.create(req, res));
    app.post('/create-review/:id', (req,res) => restaurants.createReiview(req, res));
    app.put('/update/restaurant/:id', (req, res) => restaurants.update(req, res));
    app.delete('/destroy/restaurant/:id', (req, res) => restaurants.destroy(req, res));
}