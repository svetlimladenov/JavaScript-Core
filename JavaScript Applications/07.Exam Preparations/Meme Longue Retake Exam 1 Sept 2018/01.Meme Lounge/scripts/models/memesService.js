let memesService = (() => {
    function loadAllMemes() {
        // Request teams from db
        return requester.get('appdata', 'memes', 'kinvey');
    }

    function loadTeamDetails(memeId) {
        return requester.get('appdata', 'memes/' + memeId, 'kinvey');
    }

    function edit(memeId, name, description) {
        let memeData = {
            name: name,
            comment: description,
            author: sessionStorage.getItem('username')
        };

        return requester.update('appdata', 'memes/' + memeId, 'kinvey', memeData);
    }

    function createMeme(title, description, imageUrl, creator) {
        let memeData = {
            title: title,
            description: description,
            imageUrl : imageUrl,
            creator : creator,
        };

        return requester.post('appdata', 'memes', 'kinvey', memeData);
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
        loadMemes: loadAllMemes,
        loadTeamDetails,
        edit,
        createMeme,
        joinTeam,
        leaveTeam
    }
})();