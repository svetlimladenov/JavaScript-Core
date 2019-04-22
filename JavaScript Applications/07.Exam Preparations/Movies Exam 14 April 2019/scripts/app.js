$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        Handlebars.registerHelper('displayUsername', function (block) {
            return sessionStorage.getItem('username');
        });


        this.get('#/', function () {
            this.isLogged = !!sessionStorage.getItem('authtoken');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/home/home.hbs');
            });
        });

        this.get('#/register', function () {
            this.isLogged = !!sessionStorage.getItem('authtoken');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/register/register.hbs');
            });
        });

        this.post('#/register', function (data) {
            let username = data.params.username;
            let password = data.params.password;
            let repeatPassword = data.params.repeatPassword;
            if (username.length < 3) {
                this.redirect('#/register');
                notify.showError('Invalid username');
                return;
            }
            if (password !== repeatPassword) {
                this.redirect('#/register');
                notify.showError('Passwords must match!');
                return;
            }
            auth.register(username, password, repeatPassword)
                .then((res) => {
                    auth.saveSession(res);
                    notify.showInfo('User registration successful.');
                    data.redirect('#/');
                });
        });

        this.get('#/login', function () {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/login/login.hbs');
            });
        });

        this.post('#/login', function (data) {
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

        });


        this.get('#/logout', async function () {
            let result = await auth.logout();
            notify.showInfo('Logout successful.');
            sessionStorage.clear();
            this.redirect('#/');
        });

        this.get('#/movies/create', function () {
            this.isLogged = !!sessionStorage.getItem('authtoken');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/movies/add-movie.hbs');
            });
        });

        this.post('#/movies/create', function (data) {
            this.isLogged = !!sessionStorage.getItem('authtoken');
            let title = data.params.title;
            let imageUrl = data.params.imageUrl;
            let description = data.params.description;
            let genres = Array.from(data.params.genres.split(' '));
            let tickets = parseInt(data.params.tickets);

            if (title.length < 6 || description.length < 10 || isNaN(tickets)) {
                notify.showError('Error: Invalid credentials. Please retry your request with correct credentials.');
                data.redirect('#/movies/create');
                return;
            }
            
            if(!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')){
                notify.showError('Error: Invalid credentials. Please retry your request with correct credentials.');
                data.redirect('#/movies/create');
                return;
            }
            
            moviesService.createMovie(title,description,imageUrl,genres,tickets)
                .then((res) => {
                    console.log(res);
                    notify.showInfo('Movie created successfully.');
                    data.redirect('#/cinema');
                }).catch(() => {
                    notify.showError('Oops something went wrong!');
                });
        });

        this.get('#/cinema',async function(){
            this.isLogged = !!sessionStorage.getItem('authtoken');
            this.movies = await moviesService.loadMovies();
            this.title = 'All Movies';
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                movieBox : './templates/movies/movieBox.hbs',
            }).then(function () {
                this.partial('./templates/movies/cinema.hbs');
            });
        });

        this.get('#/movies/my', async function(){
            this.isLogged = !!sessionStorage.getItem('authtoken');
            this.movies = await moviesService.loadMyMovies();
            this.title = 'My Movies';
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                movieBox : './templates/movies/my-movieBox.hbs',
            }).then(function () {
                this.partial('./templates/movies/cinema.hbs');
            });
        });

        this.get('#/movies/delete/:movieId',async function(data){
            let id = data.params.movieId.substr(1);
            this.id = id;
            let movieData = await moviesService.loadMovieDetails(id);
            this.title = movieData.title;
            this.imageURL = movieData.imageURL;
            this.description = movieData.description;
            this.genres = movieData.genres.join(',');
            this.tickets = movieData.tickets;
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/movies/delete-movie.hbs');
            });
        });

        this.route('delete','#/movies/delete', function(data){
            let id = data.params.id;
            moviesService.deleteMovie(id)
                .then(res => {
                    this.redirect('#/cinema');
                    notify.showInfo('Deleted film');
                })
                .catch(err => console.log(err))
            console.log(id);
        })
    });

    app.run('#/');
});