function acceptance() {
    const warehouse = $('#warehouse');
    let companyName = document.getElementsByName('shippingCompany')[0].value;
    let productName = document.getElementsByName('productName')[0].value;
    let productQuantity = +document.getElementsByName('productQuantity')[0].value;
    let productScrape = +document.getElementsByName('productScrape')[0].value;

    if(!companyName || !productName || isNaN(productQuantity) || isNaN(productScrape) || !productQuantity || !productScrape){
        return;
    }

    productQuantity = productQuantity - productScrape;
    if (productQuantity <= 0){
        return;
    }

    document.getElementsByName('shippingCompany')[0].value = "";
    document.getElementsByName('productName')[0].value = "";
    document.getElementsByName('productQuantity')[0].value = "";
    document.getElementsByName('productScrape')[0].value = "";

    let div = $('<div></div>');
    let p = $(`<p>[${companyName}] ${productName} - ${productQuantity} pieces</p>`);
    let btn = $('<button type="button">Out of stock</button>');
    div.append(p).append(btn);
    warehouse.append(div);
    btn.on('click',() => {
        div.remove();
    })
}

