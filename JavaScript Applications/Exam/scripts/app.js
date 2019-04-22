$(() => {
    const app = Sammy('#rooter', function () {
        this.use('Handlebars', 'hbs');

        Handlebars.registerHelper('displayUsername', function (block) {
            let firstName = sessionStorage.getItem('firstName');
            let lastName = sessionStorage.getItem('lastName');
            let fullname = firstName + ' ' + lastName;
            return fullname;
        });

        Handlebars.registerHelper('select', function( value, options ){
            var $el = $('<select />').html( options.fn(this) );
            $el.find('[value="' + value + '"]').attr({'selected':'selected'});
            return $el.html();
        });

        this.get('#/',async function () {
            const isLogged = !!sessionStorage.getItem('authtoken');
            this.isLogged = !!sessionStorage.getItem('authtoken');
            if (!isLogged) {
                this.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                }).then(function () {
                    this.partial('./templates/home/home-loggedOut.hbs');
                });
            }else{
                this.recipes = await recipesService.loadRecipes();
                this.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    recipe: './templates/recipes/recipes-partial.hbs',
                }).then(function () {
                    this.partial('./templates/home/home-loggedIn.hbs');
                });
            }

        });
        this.get('#/signUp', function () {
            this.isLogged = !!sessionStorage.getItem('authtoken');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/signUp/signUp.hbs');
            });
        });
        this.post('#/signUp', function (data) {
            let username = data.params.username;
            let password = data.params.password;
            let firstName = data.params.firstName;
            let lastName = data.params.lastName;
            let repeatPassword = data.params.repeatPassword;
            if (firstName.length < 2 || lastName.length < 2) {
                this.redirect('#/signUp');
                notify.showError('Invalid names!');
                return;
            }
            if (username.length < 3) {
                this.redirect('#/signUp');
                notify.showError('Invalid username');
                return;
            }
            if (password !== repeatPassword) {
                this.redirect('#/signUp');
                notify.showError('Passwords must match!');
                return;
            }
            auth.register(username, password, firstName, lastName) // add first name and last name
                .then((res) => {
                    auth.saveSession(res);
                    data.redirect('#/');
                    notify.showInfo('User registration successful.');

                }).catch(() => {
                    notify.showError('Error: Invalid credentials. Please retry your request with correct credentials.');
                });;
        });

        this.get('#/signIn', function () {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/signIn/signIn.hbs');
            });
        });

        this.post('#/signIn', function (data) {
            let username = data.params.username;
            let password = data.params.password;
            auth.login(username, password)
                .then((response) => {
                    auth.saveSession(response);
                    data.redirect('#/');
                    notify.showInfo('Login successful.');
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

        this.get('#/shareRecipe', function(){
            this.isLogged = !!sessionStorage.getItem('authtoken');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/recipes/share.hbs');
            });
        });

        this.post('#/shareRecipe', function(data){
            let meal = data.params.meal;
            let ingredients = data.params.ingredients;
            let prepMethod = data.params.prepMethod;
            let description = data.params.description;
            let foodImageURL = data.params.foodImageURL;
            let category = data.params.category;
            recipesService.createRecipe(meal,ingredients,prepMethod,description,foodImageURL,category)
                .then(res => {
                    notify.showInfo('Recipe shared successfully!');
                    data.redirect('#/');
                }).catch(() => {
                    console.log('Something went wrong!');
                })
        });

        this.get('#/view/:recipeId',async function(data){
            let recipeId = data.params.recipeId.substr(1);
            let recipe = await recipesService.loadRecipeDetails(recipeId);
            this.meal = recipe.meal;
            let ingr =  Array.from(recipe.ingredients);
            this.id = recipe._id;
            this.ingredients = ingr.splice(', ');
            this.prepMethod = recipe.prepMethod;
            this.description = recipe.description;
            this.foodImageURL = recipe.foodImageURL;
            this.category = recipe.category;   
            this.likesCounter = recipe.likesCounter;      
            this.isLogged = !!sessionStorage.getItem('authtoken');

            const userId = sessionStorage.getItem('userId');           
            this.isCreator = recipe._acl.creator === userId;
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/recipes/recipe-details.hbs');
            });
        });

        this.get('#/edit/:recipeId',async function(data){
            let recipeId = data.params.recipeId.substr(1);
            let recipe = await recipesService.loadRecipeDetails(recipeId);
            this.meal = recipe.meal;
            let ingr =  Array.from(recipe.ingredients);
            this.id = recipe._id;
            this.ingredients = ingr.join(', ');
            this.prepMethod = recipe.prepMethod;
            this.description = recipe.description;
            this.foodImageURL = recipe.foodImageURL;
            this.category = recipe.category;    
            this.isLogged = !!sessionStorage.getItem('authtoken');
            this.categoryValue = recipe.category;
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/recipes/recipe-edit.hbs');
            });
        });

        this.put('#/edit/:recipeId', function(data){            
            let meal = data.params.meal;
            let ingredients = data.params.ingredients;
            let prepMethod = data.params.prepMethod;
            let description = data.params.description;
            let foodImageURL = data.params.foodImageURL;
            let category = data.params.category;


            let recipeId = data.params.recipeId.substr(1);
            

            recipesService.loadRecipeDetails(recipeId).then(res => {
                let likesCounter = res.likesCounter;
                recipesService.edit(meal,ingredients,prepMethod,description,foodImageURL,category,likesCounter,recipeId)
                .then(res => {
                    notify.showInfo('Recipe edited successfully!');
                    data.redirect('#/');
                }).catch(() => {
                    console.log('Something went wrong!');
                })
            }); 
        });

        this.get('#/archive/:recipeId', function(data){
            let recipeId = data.params.recipeId.substr(1);
            recipesService.deleteRecipe(recipeId)
                .then(res => {
                    notify.showInfo('Recipe deleted successfully!')
                    data.redirect('#/');
                }).catch(() => {
                    console.log('Something went wrong!');
                })
        });

        this.get('#/like/:recipeId', function(data){
            let recipeId = data.params.recipeId.substr(1);
            recipesService.likeRecipe(recipeId)
                .then(x => {
                    notify.showInfo('You liked that recipe.');
                    data.redirect('#/');
                }).catch(x => console.log('Something went wrong!'));
        })
    });

    app.run('#/');
});