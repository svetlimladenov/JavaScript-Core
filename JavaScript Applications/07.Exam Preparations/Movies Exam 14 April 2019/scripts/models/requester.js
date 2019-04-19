let requester = (() => {
    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_Syh62Ofq4";
    const kinveyAppSecret = "0d784395ffd54a88936656de24a9493d";

    // Creates the authentication header
    function makeAuth(type) {
        return type === 'basic' ?
            'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret) :
            'Kinvey ' + sessionStorage.getItem('authtoken');
    }

    // Creates request object to kinvey
    function makeRequest(method, module, endpoint, auth, query = '') {
        if (query !== '') {
            return req = {
                method,
                contentType : 'application/json',
                url: kinveyBaseUrl + module + '/' + kinveyAppKey + '/' + endpoint + '?' + query,
                headers: {
                    'Authorization': makeAuth(auth)
                },
                
            };
        }else{
            return req = {
                method,
                contentType : 'application/json',
                url: kinveyBaseUrl + module + '/' + kinveyAppKey + '/' + endpoint,
                headers: {
                    'Authorization': makeAuth(auth)
                }
                
            };
        }
    }

    // Function to return GET promise
    function get(module, endpoint, auth) {
        return $.ajax(makeRequest('GET', module, endpoint, auth));
    }

    function getWithQuery(module, endpoint, auth, query) {
        return $.ajax(makeRequest('GET', module, endpoint, auth, query));
    }

    // Function to return POST promise
    function post(module, endpoint, auth, data) {
        let req = makeRequest('POST', module, endpoint, auth);
        req.data = JSON.stringify(data);
        return $.ajax(req);
    }

    // Function to return PUT promise
    function update(module, endpoint, auth, data) {
        let req = makeRequest('PUT', module, endpoint, auth);
        req.data = data;
        return $.ajax(req);
    }

    // Function to return DELETE promise
    function remove(module, endpoint, auth) {
        return $.ajax(makeRequest('DELETE', module, endpoint, auth));
    }

    return {
        get,
        getWithQuery,
        post,
        update,
        remove
    }
})()