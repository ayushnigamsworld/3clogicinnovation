
class UserService {

    saveUser(creationData, callBack) {

        let profile = creationData.getBasicProfile();
        let authToken = creationData.getAuthResponse().id_token;
        let userId = profile.getId();

        let userModel = {
            userId: profile.getId(),
            name: profile.getName(),
            email: profile.getEmail(),
            usernameAlias: "",
            category: "",
            authorization: {
                accessToken: authToken,
                refreshToken: ""
            }
        };

        fetch('../api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userModel),

        }).then(res => {
            callBack(res.body);

        }).catch(err => err);
    };

    fetchCurrentUser(userId) {

        fetch('../api/userDetails/' + userId, {
            method: 'GET',

        }).then(function (response) {

            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }

            response.json().then(function (data) {
                return data;
            });
        }).catch(err => err);
    };
}

export default UserService;