const MemberSchema = require('../../models/UserModel');
const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = '1042050654775-1moave7qaqr8tvtpialrqh7ntgggpd43.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

module.exports = (app) => {

    // get on basis of userId
    app.get('/api/user/:userId', (req, res, next) => {
        findOneById(req.params.userId, (result) => res.json(result));
    });

    // save a user
    app.post('/api/user', function (req, res, next) {
        const profile = req.body;
        console.log(`profile: ${profile}`)
        MemberSchema.findOne({email: profile.email}, (user) => {
          if(!user){
            MemberSchema.create(profile, (err, user) => {
              if(!err) {
                res.json(user);
                return;
              }
              console.log(err)
              res.error(err);
            })
          }else {
            res.json(user);
          }
        });
    });
};

function getMemberById(userId, res) {

    let query = MemberSchema.where(
        {
            userId: userId
        }
    );
    // res.json(userModel);
    
    MemberSchema.findOne(query)
        .exec()
        .then((user) => { 
            
            console.log("User get from _id "+ user);
            if(user == null) {
                callBack();
            }

            callBack(user);
        })
        .catch((err) => { return null });
}

function findOneById(userId, callback) {
  MemberSchema.findOne({userId}, (err, result) => {
    console.log('Inside findone : '+result);
    callback(result);
  });
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
