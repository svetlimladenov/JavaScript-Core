let moviesService = (() => {
    function loadMovies() {
        // Request movies from db
        return requester.getWithQuery('appdata', 'movies', 'kinvey','?query={}&sort={"tickets":-1}');
    }

    function loadMovieDetails(movieId) {
        return requester.get('appdata', 'movies/' + movieId, 'kinvey');
    }

    function loadMyMovies(){
        let userId = sessionStorage.getItem('userId');
        let url = `query={"_acl.creator":"${userId}"}`;
        return requester.getWithQuery('appdata', 'movies', 'kinvey',url);
    }

    function edit(teamId, name, description) {
        let teamData = {
            name: name,
            comment: description,
            author: sessionStorage.getItem('username')
        };

        return requester.update('appdata', 'teams/' + teamId, 'kinvey', teamData);
    }

    function createMovie(title, description, imageURL, genres, tickets) {
        let movieData = {
            title,
            description,
            imageURL,
            genres,
            tickets : Number(tickets)
        };
        
        return requester.post('appdata', 'movies', 'kinvey',movieData);
    }


    function joinTeam(teamId) {
        let userData = {
            username: sessionStorage.getItem('username'),
            teamId: teamId
        };

        return requester.update('user', sessionStorage.getItem('userId'), 'kinvey', userData);
    }

    function leaveTeam() {
        let userData = {
            username: sessionStorage.getItem('username'),
            teamId: ''
        };

       return requester.update('user', sessionStorage.getItem('userId'), userData, 'kinvey');
    }


    return {
        loadMovies,
        loadMovieDetails,
        loadMyMovies,
        edit,
        createMovie,
        joinTeam,
        leaveTeam
    }
})()