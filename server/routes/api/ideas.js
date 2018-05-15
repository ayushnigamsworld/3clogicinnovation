const IdeasSchema = require('../../models/Ideas');

module.exports = (app) => {

  app.get('/api/ideas', (req, res, next) => {

    console.log(`Query params :  ${JSON.stringify(req.query)}`)
    if (req.query.status) {

      IdeasSchema.find({ status: req.query.status }, null, {
        sort: {
          createdAt: -1 //Sort by Date Added DESC
        }
      }, (err, approvedIdeas) => {
        console.log(`Approved Ideas : ${JSON.stringify(approvedIdeas)}`);
        res.json(approvedIdeas);
      });

    } else {

      IdeasSchema.find({}, null, {
        sort: {
          createdAt: -1 //Sort by Date Added DESC
        }
      })
        .exec()
        .then((idea) => res.json(idea))
        .catch((err) => next(err));
    }
  });

  app.get('/api/user/:userId/ideas', (req, res, next) => {

    let userIdReceived = req.params.userId;
    let query = IdeasSchema.where(
      { 
        userId: userIdReceived,
        isArchived : false
      });

    IdeasSchema.find(query, null, {
      sort: {
        createdAt: -1 //Sort by Date Added DESC
      }
    })
      .exec()
      .then((ideas) => res.json(ideas))
      .catch((err) => next(err));
  });

  app.post(`/api/user/:userId/ideas`, function (req, res, next) {
    
    const ideaModel = new IdeasSchema(req.body.idea);
    ideaModel.userId = req.params.userId;
    ideaModel.createdAt = new Date();
    ideaModel.isArchived = false;

    console.log(`Request : ${JSON.stringify(req.body.idea)}`)
    console.log(ideaModel);
    
    ideaModel.save()
      .then(item => {
        res.json(item);
        console.log(`After save : ${item}`)
      }).catch((err) => next(err));
  });

  app.put(`/api/ideas/:ideaId`, function (req, res, next) {

    IdeasSchema.findById(req.params.ideaId, function (err, existingIdea) {

      if (err) {
        res.send(err);
        return;
      }

      existingIdea.isArchived = true;
      existingIdea.save(function (err) {
        if (err)
          res.send(err);

        res.json({ message: 'Archived Idea updated!' });
      });
    });
  });
};
