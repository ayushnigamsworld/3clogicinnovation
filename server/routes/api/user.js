const MemberSchema = require('../../models/UserModel');

module.exports = (app) => {

    app.get('/api/userDetails', (req, res, next) => {
        MemberSchema.find()
          .exec()
          .then((user) => res.json(user))
          .catch((err) => next(err));
    });

    app.get('/api/userDetails/:email', (req, res, next) => {
        
        let requestEmail = req.params.email;
        let query = MemberSchema.where(
            {
                email : requestEmail
            }
        );

        MemberSchema.findOne(query)
          .exec()
          .then((user) => res.json(user))
          .catch((err) => next(err));
    });

    app.post('/api/userDetails', function (req, res, next) {
        const userModel = new MemberSchema(req.body);
    
        userModel.save()
          .then(() => res.json(userModel))
          .catch((err) => next(err));
    });
};