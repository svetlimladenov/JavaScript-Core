$(() => {
    const app = Sammy('#root', function () {
        this.use('Handlebars', 'hbs');

        this.route('get', '#/', function () {
            this.imgLink = 'https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png';
            this.imgAlt = 'ruby';
            this.partial('login-form.hbs');
        });

        this.get('#/about', function () {
            this.swap('<h2>About Page</h2>');
        });

        this.get('#/chat', function(){
            this.swap('<h1>Chat</h1>');
        });

        this.get('#/products/:productId', function (context) {
            this.name = context.params.productId;
            this.price = 99;
            
            this.loadPartials({
                product : 'product.hbs'
            }).then(function(context){
                this.partial('productsPage.hbs');
            });
        });


        this.post('#/form', function (context) {
            console.log(context.params.pass);
        });

        this.notFound = function () {
            console.log('handled');
        };
    });


    app.run('#/');
});