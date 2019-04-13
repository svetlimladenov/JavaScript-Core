$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');
        
        this.get('#/', function(){
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/home/home.hbs');
            });
        });

        this.get('#/register', function(){
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function(){
                this.partial('./templates/register/registerPage.hbs');
            });
        });

        this.post('#/register', function(data){
            let username = data.params.username;
            let password = data.params.password;
            
            auth.register(username,password)
                .then((response) => {
                    auth.saveSession(response);
                    data.redirect('#/');
                });
        });

    });

    app.run("#/");
});