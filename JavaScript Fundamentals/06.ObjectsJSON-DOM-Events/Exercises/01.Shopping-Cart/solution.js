function solve() {
    Object.filter = (obj, predicate) =>
        Object.assign(...Object.keys(obj)
            .filter( key => predicate(obj[key]) )
            .map( key => ({ [key]: obj[key] }) ) );

    let buttons = Array.from(document.querySelectorAll('button'));
    let prices = {
        'Milk' : 1.09,
        'Bread' : 0.80,
        'Tomatoes' : 0.99,
    };
    let productsList = {
        'Milk' : 0,
        'Bread' : 0,
        'Tomatoes' : 0,
    };
    let totalPrice = 0;
    let resultArea = document.querySelector('textarea');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let parent = button.parentNode;
            if (parent.classList.length !== 0){
                let product = parent.children[1].textContent;
                productsList[product] ++;
                totalPrice += prices[product];
                resultArea.value += `Added ${product} for ${prices[product].toFixed(2)} to the cart.\n`
            } else{
                let boughtItems = Object.filter(productsList, productsList => productsList !== 0);
                resultArea.value += `You bought ${Object.keys(boughtItems).join(', ')} for ${totalPrice.toFixed(2)}.\n`;
            }
        })
    })
}