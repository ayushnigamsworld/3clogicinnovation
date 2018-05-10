const MemberSchema = require('../../models/UserModel');
const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = '1042050654775-1moave7qaqr8tvtpialrqh7ntgggpd43.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

module.exports = (app) => {

    // get on basis of userId
    app.get('/api/user/:userId', (req, res, next) => {

        let userFound = getMemberByUserId(req.params.userId);
        res.json(userFound);
    });

    // save a user
    app.post('/api/user', function (req, res, next) {

        const userModel = new MemberSchema(req.body);
        getMemberById( userModel, res, function() {
            
            verify(userModel['authorization']['accessToken'], function (){
                
                userModel.save()
                    .then(() => res.json(userModel))
                    .catch((err) => next(err));
            });

        });
    });
};

function getMemberById(userModel, res, callBack) {

    let query = MemberSchema.where(
        {
            userId: userModel['userId']
        }
    );
    res.json(userModel);
    
    MemberSchema.findOne(query)
        .exec()
        .then((user) => { 
            
            console.log("User get from _id "+ user);
            if(user == null) {
                callBack();
            }
        })
        .catch((err) => { return null });
}

async function verify(token, callBack) {

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    const domain = payload['hd'];
    if (userid !== null && domain == "3clogic.com") {
        callBack();
    }
}