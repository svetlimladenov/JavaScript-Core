$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/', async function () {
            this.isLogged = !!sessionStorage.getItem('authtoken');
            this.userId = sessionStorage.getItem('userId');
            if (!this.isLogged) {
                this.loadPartials({
                    nav: './templates/common/nav.hbs',
                    footer: './templates/common/footer.hbs'
                }).then(function () {
                    this.partial('./templates/home/home.hbs');
                });
            } else {

                const allMemes = await memesService.loadMemes();
                for (const meme in allMemes) {
                    if (allMemes.hasOwnProperty(meme)) {
                        const allMemeCreators = await requester.get("user", "", "kinvey");
                        const currentMemeCreator = allMemeCreators.find(x => x.username === allMemes[meme].creator);
                        allMemes[meme].creatorId = currentMemeCreator._id;
                    }
                }
                this.memes = allMemes;

                this.loadPartials({
                    nav: './templates/common/nav.hbs',
                    footer: './templates/common/footer.hbs',
                    meme : './templates/meme/single-meme-big.hbs'
                }).then(function () {
                    this.partial('./templates/meme/meme-feed.hbs');
                });
            }

        });

        this.get('#/register', function () {
            this.loadPartials({
                nav: './templates/common/nav.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/register/register.hbs');
            });
        });

        this.post('#/register', function (data) {
            let that = this;
            const username = data.params.username;
            const password = data.params.password;
            const confirmPassoword = data.params.repeatPass;
            const email = data.params.email;
            const avatarUrl = data.params.avatarUrl;
            auth.register(username, password, confirmPassoword, email, avatarUrl)
                .then((response) => {
                    auth.saveSession(response);
                    auth.showInfo('Congrats !');
                    that.redirect('#/');
                });
        });

        this.get('#/login', function () {
            this.loadPartials({
                nav: './templates/common/nav.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/login/login.hbs');
            });
        });

        this.post('#/login', function (data) {
            let username = data.params.username;
            let password = data.params.password;
            let that = this;
            auth.login(username, password)
                .then((response) => {
                    auth.saveSession(response);
                    that.redirect('#/');
                }).catch(function () {
                    auth.showError('Wrong password or username!');
                });
        });

        this.get('#/logout', async function () {
            let result = await auth.logout();
            sessionStorage.clear();
            this.redirect('#/');
        });


        this.get('#/user/:userId', async function (context) {
            this.isLogged = !!sessionStorage.getItem('authtoken');
            this.userId = sessionStorage.getItem('userId');
            const allMemes = await memesService.loadMemes();
            const userIdParams = context.params.userId.substr(1);
            const user = await requester.get("user", userIdParams, "kinvey");

            const currentUserMemes = allMemes.filter(m => m.creator === user.username);

            this.memes = currentUserMemes;
            this.avatarUrl = user.avatarUrl;
            this.email = user.email;
            this.isMyProfile = this.userId === userIdParams;
            this.loadPartials({
                nav: './templates/common/nav.hbs',
                footer: './templates/common/footer.hbs',
                meme : './templates/meme/user-meme-small.hbs'
            }).then(function () {
                this.partial('./templates/user/user-profile.hbs');
            });
        });

        this.get('#/create-meme', function(){
            this.isLogged = !!sessionStorage.getItem('authtoken');
            this.userId = sessionStorage.getItem('userId');
            this.loadPartials({
                nav: './templates/common/nav.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/meme/create-meme.hbs');
            });
        });

        this.post('#/create-meme', function(data){
            let title = data.params.title;
            let description = data.params.description;
            let imageUrl = data.params.imageUrl;
            let creator = sessionStorage.getItem('username');
            memesService.createMeme(title,description,imageUrl,creator)
                .then(res => {
                    console.log(res);                  
                });
        });

    });

    app.run('#/');
});