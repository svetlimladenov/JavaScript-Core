class Warehouse {
    get capacity() {
        return this._capacity;
    }

    set capacity(givenSpace) {

        if (typeof givenSpace === 'number' && givenSpace > 0) {
            return this._capacity = givenSpace;
        } else {
            throw `Invalid given warehouse space`;
        }
    }

    constructor(capacity) {
        this.capacity = capacity;
        this.availableProducts = {'Food': {}, 'Drink': {}};
    }

    addProduct(type, product, quantity) {

        let addedQuantity = ((this.capacity - this.occupiedCapacity()) - quantity);
        let output;

        if (addedQuantity >= 0) {

            if (this.availableProducts[type].hasOwnProperty(product) === false) {
                this.availableProducts[type][product] = 0;
            }

            this.availableProducts[type][product] += quantity;
            output = this.availableProducts[type];

        } else {
            throw `There is not enough space or the warehouse is already full`;
        }

        return output;
    }

    orderProducts(type) {

        let output;
        let sortedKeys = Object.keys(this.availableProducts[type])
            .sort((a, b) => this.availableProducts[type][b] - this.availableProducts[type][a]);

        let newObj = {};

        for (let product of sortedKeys) {

            if (newObj.hasOwnProperty(product) === false) {
                newObj[product] = 0;
            }

            newObj[product] += this.availableProducts[type][product];
        }

        this.availableProducts[type] = newObj;
        output = this.availableProducts[type];

        return output;
    }

    occupiedCapacity() {

        let output = 0;
        let productsCount = Object.keys(this.availableProducts['Food']).length +
            Object.keys(this.availableProducts['Drink']).length;

        if (productsCount > 0) {

            let quantityInStock = 0;

            for (let type of Object.keys(this.availableProducts)) {

                for (let product of Object.keys(this.availableProducts[type])) {

                    quantityInStock += this.availableProducts[type][product];
                }
            }

            output = quantityInStock;
        }

        return output;
    }

    revision() {

        let output = "";

        if (this.occupiedCapacity() > 0) {

            for (let type of Object.keys(this.availableProducts)) {
                output += `Product type - [${type}]\n`;
                for (let product of Object.keys(this.availableProducts[type])) {
                    output += `- ${product} ${this.availableProducts[type][product]}\n`;
                }
            }
        } else {
            output = 'The warehouse is empty';
        }

        return output.trim();
    }

    scrapeAProduct(product, quantity) {

        let type = Object.keys(this.availableProducts).find(t => Object.keys(this.availableProducts[t]).includes(product));
        let output;

        if (type !== undefined) {

            if (quantity <= this.availableProducts[type][product]) {
                this.availableProducts[type][product] -= quantity;
            } else {
                this.availableProducts[type][product] = 0;
            }

            output = this.availableProducts[type];

        } else {
            throw `${product} do not exists`;
        }

        return output;
    }
}

let a = new Warehouse(5);


const assert = require('chai').assert;

describe("Inizialize", function () {
    it('should initialize right', function () {
        let warehouse = new Warehouse(10);
        let capacity = warehouse._capacity;
        assert.equal(capacity, 10);
    });

    it('should throw with 0 or negative', function () {
        let initialize = () => new Warehouse(0);
        assert.throws(initialize, `Invalid given warehouse space`);
    });
});

describe("addProduct", function () {
    it('should add products', function () {
        let warehouse = new Warehouse(10);
        warehouse.addProduct('Food', 'test', 3);
        assert.deepEqual(warehouse.availableProducts.Food, {'test': 3});
    });

    it('add invalid products should throw', function () {
        let warehouse = new Warehouse(10);
        let addProducts = () => warehouse.addProduct('asd', 'test', -1);
        assert.throws(addProducts);
    });

    it('should throw if no capacity', function () {
        let warehouse = new Warehouse(5);
        let addProducts = () => warehouse.addProduct('Food', 'test', 10);
        assert.throws(addProducts, 'There is not enough space or the warehouse is already full');
    });
});

describe("orderProducts", function () {
    it('should order fine', function () {
        let warehouse = new Warehouse(20);
        warehouse.addProduct('Food','first',10);
        warehouse.addProduct('Food','second',7);
        warehouse.addProduct('Food','last',3);
        let expected = {
            'first' : 10,
            'last' : 3,
            'second' : 7,
        };
        assert.deepEqual(warehouse.orderProducts('Food'),expected);
    });
});

describe("occupiedCapacity", function () {
    it('should order fine', function () {
        let warehouse = new Warehouse(20);
        warehouse.addProduct('Food','first',10);
        warehouse.addProduct('Food','second',7);

        assert.equal(warehouse.occupiedCapacity(),17);
    });
});

describe("revision", function () {
    it('should work fine', function () {
        let warehouse = new Warehouse(20);
        warehouse.addProduct('Food','first',10);
        warehouse.addProduct('Food','second',7);
        warehouse.addProduct('Drink','cola',2);
        let expected =  'Product type - [Food]\n'
            + '- first 10\n'
            + '- second 7\n'
            + 'Product type - [Drink]\n'
            + '- cola 2';
        assert.equal(warehouse.revision(),expected);
    });

    it('should work fine if empty', function () {
        let warehouse = new Warehouse(20);
        let expected = 'The warehouse is empty';
        assert.equal(warehouse.revision(),expected);
    });
});

describe("scrapeAProduct", function () {
    it('should scrape fine', function () {
        let warehouse = new Warehouse(20);
        warehouse.addProduct('Food','first',10);
        warehouse.addProduct('Food','second',7);

        let output = warehouse.scrapeAProduct('first',5);
        let expected = {
            "first": 5,
            "second": 7
        };
        assert.deepEqual(output,expected);
    });

    it('should scrape fine with larger number', function () {
        let warehouse = new Warehouse(20);
        warehouse.addProduct('Food','first',10);
        warehouse.addProduct('Food','second',7);

        let output = warehouse.scrapeAProduct('first',15);
        let expected = {
            "first": 0,
            "second": 7
        };
        assert.deepEqual(output,expected);
    });

    it('should throw if invalid product', function () {
        let warehouse = new Warehouse(20);
        warehouse.addProduct('Food','first',10);
        warehouse.addProduct('Food','second',7);

        let scrape = () => warehouse.scrapeAProduct('test',15);
        assert.throws(scrape,'test do not exists');
    });
});
