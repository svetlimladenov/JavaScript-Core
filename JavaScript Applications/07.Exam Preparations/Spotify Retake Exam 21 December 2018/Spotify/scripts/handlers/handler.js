window.handler = window.handler || {};

handler.getHome = function () {
    this.isLogged = !!sessionStorage.getItem('authtoken');
    this.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
    }).then(function () {
        this.partial('./templates/home/home.hbs');
    });
};

handler.getRegister = function () {
    this.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
    }).then(function () {
        this.partial('./templates/register/registerPage.hbs');
    });
};

handler.postRegister = function (data) {
    let username = data.params.username;
    let password = data.params.password;

    auth.register(username, password)
        .then((response) => {
            auth.saveSession(response);
            data.redirect('#/');
            notify.showInfo('User registration successful.');
        }).catch(() => {
            notify.showError('Error: Invalid credentials. Please retry your request with correct credentials.');
        });
};

handler.getLogin = function () {
    this.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/login/loginPage.hbs');
    });
};

handler.postLogin = function (data) {
    let username = data.params.username;
    let password = data.params.password;
    auth.login(username, password)
        .then((response) => {
            auth.saveSession(response);
            notify.showInfo('Login successful.');
            data.redirect('#/');
        }).catch(() => {
            notify.showError('Error: Invalid credentials. Please retry your request with correct credentials.');
        });
};


handler.logout = async function () {
    let result = await auth.logout();
    notify.showInfo('Logout successful.');
    sessionStorage.clear();
    this.redirect('#/');
};

handler.getAllSongs = async function () {
    this.isLogged = !!sessionStorage.getItem('authtoken');
    const userId = sessionStorage.getItem('userId');
    let allSongs = await songsService.loadAllSongs();
    let currentUserSongs = allSongs.filter(song => song._acl.creator === userId);
    let otherUsersSongs = allSongs.filter(song => song._acl.creator !== userId);
    otherUsersSongs = otherUsersSongs.sort((a, b) => b.likes - a.likes);
    currentUserSongs = currentUserSongs.sort((a, b) => b.likes - a.likes | b.listened - a.listened);
    let orderedSongs = otherUsersSongs.concat(currentUserSongs);
    for (const song of orderedSongs) {
        if (song._acl.creator === userId) {
            song.isCurrentUserCreator = true;
        } else {
            song.isCurrentUserCreator = false;
        }
    }
    this.songs = orderedSongs;
    this.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        song: './templates/songs/song-partial.hbs',
    }).then(function () {
        this.partial('./templates/songs/all-songs.hbs');
    });
}

handler.getMySongs = async function () {
    this.isLogged = !!sessionStorage.getItem('authtoken');
    const userId = sessionStorage.getItem('userId');
    let allSongs = await songsService.loadAllSongs();
    let currentUserSongs = allSongs.filter(song => song._acl.creator === userId);
    for (const song of currentUserSongs) {
        song.isCurrentUserCreator = true;
    }
    this.songs = currentUserSongs;
    this.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        song: './templates/songs/song-partial.hbs',
    }).then(function () {
        this.partial('./templates/songs/all-songs.hbs');
    });
};

handler.likeSong = function (data) {
    let songId = data.params.songId.substr(1);
    songsService.likeSong(songId)
        .then((res) => {
            notify.showInfo('Liked!');
            data.redirect('#/songs/all');
        }).catch(() => {
            notify.showError('Ops! Something went wrong.');
        });
};

handler.listenSong = async function (data) {
    let songId = data.params.songId.substr(1);
    const song = await songsService.loadSongDetails(songId);
    songsService.listenSong(songId)
        .then((res) => {   
            data.redirect('#/songs/all');
            notify.showInfo(`You just listened ${song.title}`);
        }).catch(() => {
            notify.showError('Ops! Something went wrong.');
        });
};

handler.getCreate = function () {
    this.isLogged = !!sessionStorage.getItem('authtoken');
    this.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
    }).then(function () {
        this.partial('./templates/songs/create-song.hbs');
    });
};

handler.postCreate = function (data) {
    this.isLogged = !!sessionStorage.getItem('authtoken');
    if (!this.isLogged) {
        this.redirect('#/login');
    }
    let title = data.params.title;
    let artist = data.params.artist;
    let imageURL = data.params.imageURL;
    if (title.length < 6 || artist.length < 3 || !imageURL.startsWith('http://') || !imageURL.startsWith('https://')) {
        notify.showError('Try again.');
    }
    songsService.createSong(title, artist, imageURL)
        .then((res) => {
            notify.showInfo('Song created successfully.');
            data.redirect('#/songs/my');
        });
};