class Kitchen{
    constructor(budget){
        this.budget = budget;
        this.menu = {mealsNumber : 0};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products){
        products.forEach(product => {
            let produtsParts = product.split(' ');
            let productName = produtsParts[0];
            let productQuantity = Number(produtsParts[1]);
            let productPrice = Number(produtsParts[2]);
            if (productPrice > this.budget){
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
                return;
            }
            if (!this.productsInStock.hasOwnProperty(productName)){
                this.productsInStock[productName] = {
                    quantity : productQuantity
                }
            }else{
                this.productsInStock[productName].quantity += productQuantity;
            }

            this.budget -= productPrice;
            this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
        });
        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price){
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                neededProducts : neededProducts,
                price : price
            };
            this.menu.mealsNumber++;
            this.actionsHistory.push(`Great idea! Now with the ${meal} we have ${this.menu.mealsNumber} meals in the menu, other ideas?`)
        }else{
            this.actionsHistory.push(` The ${meal} is already in our menu, try something different`);
        }
        return this.actionsHistory.join('\n');
    };
}

let kitchen = new Kitchen (1000);
//console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
