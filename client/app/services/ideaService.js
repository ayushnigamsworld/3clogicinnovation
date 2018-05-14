import {NotificationManager} from "react-notifications";

class IdeaService {

  getIdea(userId) {

    return fetch('../api/idea/' + userId, {
      method: 'GET'
    });
  }

  getAllIdeas(callBack) {

    fetch('../api/ideas', {
      method: 'GET'

    }).then(function (response) {

      response.json().then(function (data) {
        callBack(data);
      });
    });
  }

  getMyIdeas(userId, callBack) {

    fetch(`../api/user/${userId}/ideas`, {
      method: 'GET'
    }).then(function (response) {
      response.json().then(function (data) {
        callBack(data);
      });
    });
  }

  submitIdea(userId, ideaObject, callback) {

    fetch(`../api/user/${userId}/ideas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idea: {
          title: ideaObject.title,
          description: ideaObject.detail
        }
      }),
    }).then(res => {
      if(res.ok){
        res.json().then(function (data) {
          console.log(`Succesfully send : ${JSON.stringify(data)}`);
          NotificationManager.success("Remember, Implementation is all we'll see..", 'Idea submission successful');
          callback(data);
        });
      }


    }).catch(err => {
      // console.log(`Error while saving idea: ${JSON.stringify(ideaObject)}`)
      NotificationManager.error("Now we know the importance of QA", 'We messed up something.. Try again later..');
      callback(err);
    });
  }

  getApprovedIdeas(callback) {
    fetch('../api/ideas?status=APPROVED', {
      method: 'GET'
    }).then(function (response) {
      response.json().then(function (data) {
        callback(data);
      });
    });
  }
}

export default new IdeaService();
