function acceptance() {
    let shippingCompany = document.getElementsByName('shippingCompany')[0].value;
    let productName = document.getElementsByName('productName')[0].value;
    let productQuantity = document.getElementsByName('productQuantity')[0].value;
    let productScrape = document.getElementsByName('productScrape')[0].value;

    //TODO: Just in case better check
    if (shippingCompany === "" || productName === "" || isNaN(productQuantity) || isNaN(productScrape)){
        return;
    }
    productQuantity -= productScrape;
    if (productQuantity <= 0){
        return;
    }
    let $warehourse = $('#warehouse');
    let $divWrapper = $('<div></div>');
    let $p = $('<p></p>').text(`[${shippingCompany}] ${productName} - ${productQuantity} pieces`);
    let $btn = $('<button type="button"></button>').text('Out of stock');
    $divWrapper.append($p);
    $divWrapper.append($btn);
    $warehourse.append($divWrapper);

    document.getElementsByName('shippingCompany')[0].value = "";
    document.getElementsByName('productName')[0].value = "";
    document.getElementsByName('productQuantity')[0].value = "";
    document.getElementsByName('productScrape')[0].value = "";

    Array.from(document.querySelectorAll('#warehouse button')).forEach(x => {
        x.addEventListener('click', () => {
            $(x.parentNode).remove();
        })
    })
}