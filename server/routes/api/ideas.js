const IdeasSchema = require('../../models/Ideas');

module.exports = (app) => {

  app.get('/api/ideas', (req, res, next) => {

    if (req.query.status) {
      IdeasSchema.find({status: req.query.status})
        .exec()
        .then((idea) => res.json(idea))
        .catch((err) => next(err));
    } else {
      IdeasSchema.find()
        .exec()
        .then((idea) => res.json(idea))
        .catch((err) => next(err));
    }
  });

  app.get('/api/user/:userId/ideas', (req, res, next) => {

    let userIdReceived = req.params.userId;
    let query = IdeasSchema.where({userId: userIdReceived});

    IdeasSchema.find(query)
      .exec()
      .then((ideas) => res.json(ideas))
      .catch((err) => next(err));
  });

  app.post(`/api/user/:userId/ideas`, function (req, res, next) {
    const ideaModel = new IdeasSchema(req.body.idea);
    ideaModel.userId = req.params.userId;

    console.log(`Request : ${JSON.stringify(req.body.idea)}`)
    console.log(ideaModel);
    ideaModel.save()
      .then(item => {
        res.json(item);
        console.log(`After save : ${item}`)
      }).catch((err) => next(err));
  });
};
