const MemberSchema = require('../../models/UserModel');

module.exports = (app) => {

    // get all
    app.get('/api/userDetails', (req, res, next) => {
        MemberSchema.find()
          .exec()
          .then((user) => res.json(user))
          .catch((err) => next(err));
    });

    // get on basis of userId
    app.get('/api/userDetails/:userId', (req, res, next) => {
        
        let requestUserId = req.params.userId;
        let query = MemberSchema.where(
            {
                userId : requestUserId
            }
        );

        MemberSchema.findOne(query)
          .exec()
          .then((user) => res.json(user))
          .catch((err) => next(err));
    });

    app.get('/api/userDetails/exists/:userId', (req, res, next) => {

        let requestUserId = req.params.userId;
        let query = MemberSchema.where(
            {
                userId : requestUserId
            }
        );
        MemberSchema.count(query, function(err, c){
            if(c > 0){
                res.json(true)
            }
            else{
                res.json(false);
            }
        });
    });


    // save a user
    app.post('/api/userDetails', function (req, res, next) {
        const userModel = new MemberSchema(req.body);
    
        userModel.save()
          .then(() => res.json(userModel))
          .catch((err) => next(err));
    });
};