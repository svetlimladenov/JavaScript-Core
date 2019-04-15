let songsService = (() => {
    function loadAllSongs() {
        // Request teams from db
        return requester.get('appdata', 'songs', 'kinvey');
    }

    function loadSongDetails(songId) {
        return requester.get('appdata', 'songs/' + songId, 'kinvey');
    }

    function edit(teamId, name, description) {
        let teamData = {
            name: name,
            comment: description,
            author: sessionStorage.getItem('username')
        };

        return requester.update('appdata', 'teams/' + teamId, 'kinvey', teamData);
    }

    async function likeSong(songId) {
        let song = await loadSongDetails(songId);
        song.likes++;
        $(`#${songId}`).text(`Likes: ${song.likes}`);

        return requester.update('appdata', 'songs/' + songId, 'kinvey', song);
    }

    async function listenSong(songId){
        let song = await loadSongDetails(songId);
        song.listened++;
        $(`#${songId}`).text(`Likes: ${song.likes}; Listened ${song.listened} times`);
        return requester.update('appdata', 'songs/' + songId, 'kinvey', song);
    }

    function createSong(title, artist, imageURL) {
        let teamData = {
            title,
            artist,
            imageURL,
            listened: 0,
            likes: 0
        };

        return requester.post('appdata', 'songs', 'kinvey', teamData);
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
        loadAllSongs,
        loadSongDetails,
        edit,
        createSong,
        joinTeam,
        leaveTeam,
        likeSong,
        listenSong,
    }
})()