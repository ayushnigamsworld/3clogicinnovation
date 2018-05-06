import {NotificationContainer, NotificationManager} from 'react-notifications';
class UserService {

    saveUser(creationData, currentObj) {

        let profile = creationData.getBasicProfile();
        let authToken = creationData.getAuthResponse().id_token;
        let userId = profile.getId();
        let successFulLogin = false;

        fetch('../api/userDetails/exists/' + userId, {
            method: 'GET',

        }).then(
            function (response) {

                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    NotificationManager.error('Now we realize the importance of QA..', 'Oh shit, something wrong');
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

                        fetch('../api/userDetails/exists/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(userModel),

                        }).then(res => {
                            console.log("Succesfully saved the user");
                            currentObj.props.history.push('/welcome');

                        }).catch(err => err);
                    }else {
                        currentObj.props.history.push('/welcome');
                    }
                });
            }
        ).catch(err => err);
        return successFulLogin;
    }

    fetchCurrentUser(userId) {

        fetch('../api/userDetails/exists/' + userId, {
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