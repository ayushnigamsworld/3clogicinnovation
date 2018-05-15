class UserService {

  saveUser(creationData, callBack) {

    let profile = creationData.getBasicProfile();

    if (!profile.getEmail().toLowerCase().includes('@3clogic.com')) {
      callBack({status: 403});
      return;
    }
    let authToken = creationData.getAuthResponse().id_token;

    let userModel = {
      userId: profile.getId(),
      name: profile.getName(),
      email: profile.getEmail(),
      image: profile.getImageUrl(),
      usernameAlias: "",
      category: "",
      role: 'ROLE_MEMBER',
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

    }).then(function (response) {

      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        callBack({status: response.status});
      }

      response.json().then(function (data) {
        callBack({status: response.status, user: data});
      });

    }).catch(err => err);
  };

  fetchCurrentUser(userId) {
    return new Promise((resolve, reject) => {
      fetch('../api/user/' + userId, {
        method: 'GET',
      }).then(function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          reject(); return;
        }
        response.json().then(function (data) {
          resolve(data);
        });
      }).catch(err => reject(err));
    });
  };
}

export default new UserService();
