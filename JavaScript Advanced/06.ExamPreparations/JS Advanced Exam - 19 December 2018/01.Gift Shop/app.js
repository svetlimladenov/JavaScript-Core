function solution() {
    let toyType = $('#toyType').val();
    let toyPrice = Number($('#toyPrice').val());
    let toyDescription = $('#toyDescription').val();
    if (toyType !== '' && !isNaN(toyPrice) && toyDescription){
        let giftsHolder = $('#christmasGiftShop');
        let newGiftWrapper = $('<div class="gift"></div>');
        let img = $('<img src="gift.png">');
        let h2 = $('<h2></h2>').text(toyType);
        let descriptions = $('<p></p>').text(toyDescription);
        let buyBtn = $('<button></button>').text(`Buy it for $${toyPrice}`);
        buyBtn.on('click', () => newGiftWrapper.remove());
        newGiftWrapper.append(img).append(h2).append(descriptions).append(buyBtn);
        giftsHolder.append(newGiftWrapper);
        $('#toyType').val('');
        $('#toyPrice').val('');
        $('#toyDescription').val('');
    }
}