
class UserService {

    saveUser(creationData) {

        let profile = creationData.getBasicProfile();
        let authToken = creationData.getAuthResponse().id_token;
        let userId = profile.getId();

        fetch('http://localhost:8082/api/userDetails/exists/' + userId, {
            method: 'GET',

        }).then(
            function (response) {

                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }

                response.json().then(function (data) {

                    if (!data) {

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

                        fetch('http://localhost:8082/api/userDetails', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(userModel),

                        }).then(res => {
                            console.log("Succesfully saved the user");

                        }).catch(err => err);
                    }
                });
            }
        ).catch(err => err);
    }

    fetchCurrentUser(userId) {

        fetch('http://localhost:8082/api/userDetails/' + userId, {
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
    }
}

export default UserService;