class IdeaService {

    getIdea(userId){

        return fetch('http://localhost:8082/api/idea/' + userId, {
            method: 'GET',

        });     
    }
}

export default IdeaService;