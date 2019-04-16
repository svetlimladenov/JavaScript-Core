function solution() {

    let showcase = $('#christmasGiftShop');

    let typeElement = $('#toyType');
    let priceElement = $('#toyPrice');
    let descriptionElement = $('#toyDescription');

    if (typeElement.val() !== '' && !isNaN(+priceElement.val()) && descriptionElement.val()) {

        let div = $('<div>');
        div.addClass('gift');

        let img = $('<img>');
        img.attr('src', 'gift.png');

        let h2 = $('<h2>');
        h2.text(typeElement.val());

        let p = $('<p>');
        p.text(descriptionElement.val());

        let button = $('<button>');
        button.text(`Buy it for $${priceElement.val()}`);
        button.on('click', ()=> div.remove());


        div.append(img).append(h2).append(p).append(button);
        showcase.append(div);
    }

    typeElement.val('');
    priceElement.val('');
    descriptionElement.val('')
}