const MemberSchema = require('../../models/UserModel');
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '1042050654775-1moave7qaqr8tvtpialrqh7ntgggpd43.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

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

    // save a user
    app.post('/api/userDetails', function (req, res, next) {
        
        const userModel = new MemberSchema(req.body);        
        verify(userModel['authorization']['accessToken'], function(){
            
            userModel.save()
                .then(() => res.json(userModel))
                .catch((err) => next(err));
        });
    });

    async function verify(token, callBack) {
        
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        const domain = payload['hd'];
        if(userid !== null && domain == "3clogic.com") {
            callBack();
        }
    }
};