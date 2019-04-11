$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', function () {
            //TODO: add context;
            this.loggedIn = !!sessionStorage.getItem('authtoken');
            this.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/home/home.hbs');
            });
        });

        this.get('#/about', function () {
            this.loggedIn = !!sessionStorage.getItem('authtoken');
            this.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs'
            }).then(function () {
                this.partial('templates/about/about.hbs');
            });
        });

        this.get('#/login', function () {
            this.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                loginForm: 'templates/login/loginForm.hbs'
            }).then(function () {
                this.partial('templates/login/loginPage.hbs');
            });
        });

        this.post('#/login', function (data) {
            let username = data.params.username;
            let password = data.params.password;
            let that = this;
            auth.login(username, password)
                .then((response) => {
                    auth.saveSession(response);
                    auth.showInfo('Successfull login!');
                    that.redirect('#/home');
                }).catch(function () {
                    auth.showError('Wrong password or username!');
                });
        });

        this.get('#/register', function () {
            this.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                registerForm: 'templates/register/registerForm.hbs'
            }).then(function () {
                this.partial('templates/register/registerPage.hbs');
            });
        });

        this.post('#/register', function (data) {
            let that = this;
            let username = data.params.username;
            let password = data.params.password;
            let repeatPassword = data.params.repeatPassword;

            auth.register(username, password, repeatPassword)
                .then((response) => {
                    auth.saveSession(response);
                    auth.showInfo('Congrats!');
                    that.redirect('#/home');
                });
        });

        this.get('#/logout', async function () {
            let result = await auth.logout();
            sessionStorage.clear();
            this.redirect('#/home');
        });

        this.get('#/catalog', async function () {
            this.loggedIn = !!sessionStorage.getItem('authtoken');
            if (!this.loggedIn) {
                this.redirect('#/home');
                return;
            }
            this.username = sessionStorage.getItem('username');
            this.hasNoTeam = sessionStorage.getItem('teamId') === 'undefined';
            this.teams = await teamsService.loadTeams();
            this.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                team: 'templates/catalog/team.hbs'
            }).then(function () {
                this.partial('templates/catalog/teamCatalog.hbs');
            });
        });

        this.get('#/catalog/:teamId', async function (context) {
            this.loggedIn = !!sessionStorage.getItem('authtoken');
            if (!this.loggedIn) {
                this.redirect('#/home');
                return;
            }
            this.username = sessionStorage.getItem('username');

            let teamId = context.params.teamId;
            let team = await teamsService.loadTeamDetails(teamId.slice(1, teamId.length));
            console.log(team);
            const users = await requester.get("user", "", "kinvey");
            this.name = team.name;
            this.members = Array.from(users).filter((u) => u.teamId === team._id);
            this.comment = team.comment;
            this.teamId = team._id;

            const userId = sessionStorage.getItem('userId');
            const user = await requester.get('user', userId, 'kinvey');

            this.isAuthor = team._acl.creator === userId;
            this.isOnTeam = team._id === user.teamId;
            console.log(user);
            this.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                teamControls: 'templates/catalog/teamControls.hbs',
                teamMember: 'templates/catalog/teamMember.hbs'
            }).then(function () {
                this.partial('templates/catalog/details.hbs');
            });
        });

        this.get('#/create', function () {
            this.loggedIn = !!sessionStorage.getItem('authtoken');
            if (!this.loggedIn) {
                this.redirect('#/home');
                return;
            }
            this.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                createForm: 'templates/create/createForm.hbs',
            }).then(function () {
                this.partial('templates/create/createPage.hbs');
            });
        });

        this.post('#/create', function (data) {
            let that = this;
            const teamName = data.params.name;
            const teamComment = data.params.comment;
            teamsService.createTeam(teamName, teamComment)
                .then(function (data) {
                    auth.showInfo('Congrats on your new team');
                    let teamId = data._id;
                    sessionStorage.setItem('teamId', teamId);
                    that.redirect('#/catalog/:' + teamId);
                });
        });

        this.get('#/join/:teamId', function (context) {
            let that = this;
            let teamId = context.params.teamId.substr(1);
            teamsService.joinTeam(teamId)
                .then(() => {
                    auth.showInfo(`Sucessfully joined team with id : ${teamId}`);
                    that.redirect('#/catalog/:' + teamId);
                }).catch(() => {
                    auth.showError('Opps! Something went wrong');
                });
        });

        this.get('#/leave', function (context) {
            teamsService.leaveTeam()
                .then(() => {
                    auth.showInfo('You have successfully left this team');
                    this.redirect('#/home');
                });
        });

        this.get('#/edit/:teamId', async function (context) {
            this.loggedIn = !!sessionStorage.getItem('authtoken');
            let teamId = context.params.teamId.substr(1);
            const team = await teamsService.loadTeamDetails(teamId);
            const userId = sessionStorage.getItem('userId');
            if (!this.loggedIn || team._acl.creator !== userId) {
                this.redirect('#/home');
                return;
            }

            this.username = sessionStorage.getItem('username');
            this.teamId = teamId;
            this.name = team.name;
            this.comment = team.comment;
            this.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                editForm: 'templates/edit/editForm.hbs',
            }).then(function () {
                this.partial('templates/edit/editPage.hbs');
            });

        });

        this.post('#/edit/:teamId', async function (context) {
            this.loggedIn = !!sessionStorage.getItem('authtoken');
            let teamId = context.params.teamId.substr(1);
            const team = await teamsService.loadTeamDetails(teamId);
            const userId = sessionStorage.getItem('userId');
            if (!this.loggedIn || team._acl.creator !== userId) {
                this.redirect('#/home');
                return;
            }
            let that = this;

            let name = context.params.name;
            let comment = context.params.comment;
            teamsService.edit(teamId, name, comment)
                .then(() => {
                    auth.showInfo('Successfully updated team information.');
                    that.redirect('#/catalog/:' + teamId);
                });
        });
    });

    app.run('#/');
});