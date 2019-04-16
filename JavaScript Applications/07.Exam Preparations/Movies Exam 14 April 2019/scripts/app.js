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

        this.get('#/movie/create', function () {
            this.isLogged = !!sessionStorage.getItem('authtoken');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/movies/add-movie.hbs');
            });
        });

        this.post('#/movie/create', function (data) {
            this.isLogged = !!sessionStorage.getItem('authtoken');
            let title = data.params.title;
            let imageUrl = data.params.imageUrl;
            let description = data.params.description;
            let genres = Array.from(data.params.genres.split(' '));
            let tickets = Number(data.params.tickets);

            if (title.length < 6 || description.length < 10 || isNaN(tickets)) {
                notify.showError('Error: Invalid credentials. Please retry your request with correct credentials.');
                data.redirect('#/movie/create');
                return;
            }
            
            if(!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')){
                notify.showError('Error: Invalid credentials. Please retry your request with correct credentials.');
                data.redirect('#/movie/create');
                return;
            }
            
            moviesService.createMovie(title,description,imageUrl,genres,tickets)
                .then((res) => {
                    console.log(res);
                    notify.showInfo('Movie created successfully.');
                    data.redirect('#/');
                }).catch(() => {
                    notify.showError('Oops something went wrong!');
                });
        });

        
    });

    app.run('#/');
});