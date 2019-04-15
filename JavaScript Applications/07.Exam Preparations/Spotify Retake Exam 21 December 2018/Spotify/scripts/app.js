$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        Handlebars.registerHelper('displayUsername', function (block) {
            return sessionStorage.getItem('username');
        });


        this.get('#/', handler.getHome);

        this.get('#/register',handler.getRegister);
        this.post('#/register', handler.postRegister);

        this.get('#/login', handler.getLogin);
        this.post('#/login', handler.postLogin);

        this.get('#/logout', handler.logout);

        this.get('#/songs/all', handler.getAllSongs);

        this.get('#/songs/my', handler.getMySongs);

        this.get('#/songs/create', handler.getCreate);
        this.post('#/songs/create', handler.postCreate);

        this.get('#/like/:songId', handler.likeSong);

        this.get('#/listen/:songId', handler.listenSong);
    });

    app.run("#/");


});