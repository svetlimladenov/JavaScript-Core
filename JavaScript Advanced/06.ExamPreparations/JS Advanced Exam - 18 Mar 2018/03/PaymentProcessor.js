class PaymentProcessor {
    constructor(options){
        this.payments = [];
        this.types = ["service", "product", "other"];
        this.precision = 2;
        if (options !== undefined){
            if (options.hasOwnProperty('types')){
                this.types = options['types'];
            }
            if (options.hasOwnProperty('precision')){
                this.precision = options['precision'];
            }
        }
    }

    registerPayment(id, name, type, value){
        if (id === ''){
            throw new Error('(invalid id)')
        }
        if (name === ''){
            throw new Error('(invalid name)')
        }
        if (!this.types.includes(type)) {
            throw new Error('(invalid type)');
        }
        if (typeof value !== 'number') {
            throw new Error('(invalid value)');
        }

        let paymentIndex = this.payments.findIndex(x => x.id === id);
        if (paymentIndex >= 0) {
            throw new Error('(invalid id)');
        }

        let payment = {
            id,
            name,
            type,
            value
        };
        this.payments.push(payment);
        return this;
    }

    deletePayment(id){
        let paymentIndex = this.payments.findIndex(x => x.id === id);
        if (paymentIndex < 0) {
            throw new Error('(ID not found)');
        }
        this.payments.splice(paymentIndex,1);
        return this;
    }

    get(id){
        let payment = this.payments.find(x => x.id === id);
        if (payment === undefined) {
            throw new Error('(ID not found)');
        }
        let result = '';
        result += `Details about payment ID: ${id}\n`;
        result += `- Name: ${payment.name}\n`;
        result += `- Type: ${payment.type}\n`;
        result += `- Value: ${payment.value.toFixed(this.precision)}\n`;
        return result;
    }

    setOptions(options){
        if (options !== undefined){
            if (options.hasOwnProperty('types')){
                this.types = options['types'];
            }
            if (options.hasOwnProperty('precision')){
                this.precision = options['precision'];
            }
        }
        return this;
    }

    toString(){
        let paymentsCount = this.payments.length;
        let balance = this.payments.reduce((a,b) => {
            return a + b.value;
        },0);
        let result = '';
        result += 'Summary:\n';
        result += `- Payments: ${paymentsCount}\n`;
        result += `- Balance: ${balance.toFixed(this.precision)}\n`;
        return result;
    }
}

const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
generalPayments.registerPayment('01A323', 'asdf', 'product', 15);

console.log(generalPayments.toString());


// generalPayments.setOptions({types: ['product', 'material']});
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
// console.log(generalPayments.get('E028'));
// generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);
//
//
// generalPayments.deletePayment('E028');
// console.log(generalPayments.payments);
//
// // Initialize processor with custom types
// const servicePyaments = new PaymentProcessor({types: ['service']});
// servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
// servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
// console.log(servicePyaments.toString());
//
// // Initialize processor with custom precision
// const transactionLog = new PaymentProcessor({precision: 5});
// transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
// console.log(transactionLog.toString());
