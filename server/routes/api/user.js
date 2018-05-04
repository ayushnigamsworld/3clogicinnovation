const MemberSchema = require('../../models/UserModel');

module.exports = (app) => {

    app.get('/api/userDetails', (req, res, next) => {
        MemberSchema.find()
          .exec()
          .then((user) => res.json(user))
          .catch((err) => next(err));
    });

    app.post('/api/userDetails', function (req, res, next) {
        const userModel = new MemberSchema();
    
        userModel.save()
          .then(() => res.json(counter))
          .catch((err) => next(err));
    });
};