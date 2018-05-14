class IdeaService {

    getIdea(userId){

        return fetch('../api/idea/' + userId, {
            method: 'GET'
        });     
    }

    getAllIdeas(callBack) {

        fetch('../api/allIdeas', {
            method: 'GET'

        }).then(function(response) {
            
            response.json().then(function (data) {
                callBack(data);
            });
        });
    }

  getMyIdeas(loggedInUser, callBack) {

    fetch(`../api/user/${loggedInUser.userId}/ideas`, {
      method: 'GET'
    }).then(function(response) {

      response.json().then(function (data) {
        callBack(data);
      });
    });
  }

    submitIdea(userId, ideaObject) {

        fetch(`../api/user/${userId}/ideas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: cookies.get('userId'),
                idea: {
                    title: ideaObject.titleIdeaValue,
                    description: ideaObject.detailIdeaValue
                }
            }),
        }).then(res => {
            console.log("Succesfully send");
        }).catch(err => err);

    }

  getApprovedIdeas(callback) {
    fetch('../api/ideas?status=approved', {
      method: 'GET'
    }).then(function(response) {

      response.json().then(function (data) {
        callBack(data);
      });
    });
  }
}

export default new IdeaService();
