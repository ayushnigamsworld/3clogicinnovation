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

      console.log("response of submit "+ res.status);
      if(res.ok){
        
        res.json().then(function (data) {
          console.log(`Succesfully send : ${JSON.stringify(data)}`);
          NotificationManager.success("Remember, Implementation is all we'll see..", 'Idea submission successful');
          callback(data);
        });

      } else if(res.status == 400) {

        NotificationManager.error("Free stuff comes at a cost.But you can archive the one you don't like", 'Only 2 ideas max allowed..');
      }

    }).catch(err => {
      console.log("error of limit 2 ",err);
      // console.log(`Error while saving idea: ${JSON.stringify(ideaObject)}`)
      NotificationManager.error("Now we know the importance of QA", 'We messed up something.. Try again later..');
      callback(err);
    });
  }

  getApprovedIdeas(userId= '123456', callback) {
    fetch(`../api/user/${userId}/ideas/?status=shortlist`, {
      method: 'GET'
    }).then(function (response) {
      response.json().then(function (data) {
        callback(data);
      });
    });
  }

  setArchiveIdea(userId, ideaId){

    fetch(`../api/user/${userId}/ideas/${ideaId}?status=archive`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      if(res.ok) {
        res.json().then(function (data) {

          console.log(`Succesfully send : ${JSON.stringify(data)}`);
          NotificationManager.success("Remember, You can submit two ideas at last..", 'Idea is now archived ..');
        });
      }
    }).catch(err => {
      
      NotificationManager.error("Now we know the importance of QA", 'We messed up something.. Try again later..');
    });
  }

  shortlistIdea(userId, ideaId){

    fetch(`../api/user/${userId}/ideas/${ideaId}?status=shortlist`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      if(res.ok) {
        res.json().then(function (data) {

          console.log(`Succesfully send : ${JSON.stringify(data)}`);
          NotificationManager.success("Thanks, for your time..", 'Idea is shortlisted ..');
        });
      }
    }).catch(err => {
      
      NotificationManager.error("Now we know the importance of QA", 'We messed up something.. Try again later..');
    });
  }
}

export default new IdeaService();