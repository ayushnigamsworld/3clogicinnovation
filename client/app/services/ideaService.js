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

    submitIdea(ideaObject) {

        fetch('../api/idea', {
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
}

export default IdeaService;