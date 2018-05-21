const IdeasSchema = require('../../models/Ideas');
const MemberSchema = require('../../models/UserModel');

module.exports = (app) => {

  //get all ideas
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

  //get ideas of a user
  app.get('/api/user/:userId/ideas', (req, res, next) => {

    let userIdReceived = req.params.userId;

    let query = IdeasSchema.where(
      {
        userId: userIdReceived,
        status: { $in: ['new', 'shortlist'] }
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

  // create a new idea
  app.post(`/api/user/:userId/ideas`, function (req, res, next) {

    const ideaModel = new IdeasSchema(req.body.idea);

    IdeasSchema.count(
      {
        userId: req.params.userId,
        status: { $in: ['new', 'shortlist'] }

      }, function (err, count) {

        console.log("count is "+ count);

        if (count < 20) {

          ideaModel.userId = req.params.userId;
          ideaModel.createdAt = new Date();
          ideaModel.status = "new";

          console.log(`Request : ${JSON.stringify(req.body.idea)}`)
          console.log(ideaModel);

          ideaModel.save()
            .then(item => {
              res.json(item);
              console.log(`After save : ${item}`)
            }).catch((err) => next(err));
        } 
        else {
          res.status(400).send('Max 2 ideas allowed.')
        }
      });
  });

  //shortlist
  app.put(`/api/user/:userId/ideas/:ideaId`, function (req, res, next) {

    let userId = req.params.userId;
    let ideaStatus = req.query.status;
    if( ideaStatus == "shortlist" ) {

      // Check here if user is admin or not... not working

      let query = MemberSchema.where(
        {
            userId: userId
        }
      );
      MemberSchema.findOne(query)
        .exec()
        .then((user) => { 
            
            console.log("User get  "+ user);
        })
      .catch((err) => { return null });
    }

    console.log("idea status received " + ideaStatus);

    IdeasSchema.findById(req.params.ideaId, function (err, existingIdea) {

      console.log("existing idea " + existingIdea);

      if (err) {
        res.send(err);
        return;
      }

      existingIdea.status = "" + ideaStatus + "";
      console.log("after converting "+ existingIdea.status);

      existingIdea.save(function (err) {
        if (err)
          res.send(err);

        res.json({ message: 'Idea !' });
      });
    });
  });
};
