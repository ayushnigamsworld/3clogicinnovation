class IdeaService {

    getIdea(userId){

        return fetch('http://localhost:8082/api/idea/' + userId, {
            method: 'GET',

        })
        // .then(
        //     function (response) {

        //         if (response.status !== 200) {
        //             console.log('Looks like there was a problem. Status Code: ' + response.status);
        //             return;
        //         }

        //         response.json().then(function (data) {
        //             return data;
        //         });
        //     }
        // ).catch(err => err)
        ;     
    }
}

export default IdeaService;