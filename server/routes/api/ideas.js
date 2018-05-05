const IdeasSchema = require('../../models/Ideas');

module.exports = (app) => {

    app.get('/api/allIdeas', (req, res, next) => {
        IdeasSchema.find()
          .exec()
          .then((idea) => res.json(idea))
          .catch((err) => next(err));
    });

    app.get('/api/idea/:userId', (req, res, next) => {
        
        let userIdReceived = req.params.userId;
        let query = IdeasSchema.where({ userId : userIdReceived });

        IdeasSchema.findOne(query)
          .exec()
          .then((idea) => res.json(idea))
          .catch((err) => next(err));
    });

    app.post('/api/idea', function (req, res, next) {
        const ideaModel = new IdeasSchema(req.body);
    
        ideaModel.save()
          .then(item => {
            res.send(ideaModel);
            })
          .catch((err) => next(err));
    });
};