function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);


    $(document).ready(function(){
        $('#submit').attr('disabled',true);
        $('.custom-select').keyup(function(){
            if($(this).val().length !== 0)
                $('#submit').attr('disabled', false);
            else
                $('#submit').attr('disabled',true);
        })
    });
    const inventory = $('.display').eq(0);
    console.log(inventory);
    document.getElementById('submit').addEventListener('click', () =>{
        let product = document.getElementsByClassName('custom-select')[0].value;
        let price = +document.getElementById('price').value;
        let quantity = +document.getElementById('quantity').value;

        let capacity = +document.getElementById('capacity').value;
        let totalPrice = +document.getElementById('sum').value;
        if (capacity + quantity > 150){
            quantity = 150 - capacity;
            capacity = 'full';
            document.getElementById('capacity').value = capacity;
            document.getElementById('capacity').className = 'fullCapacity';
            let textToAppend = `Product: ${product} Price: ${price} Quantity: ${quantity}\n`;
            let $newProduct = $('<li></li>').text(textToAppend);
            inventory.append($newProduct);

            totalPrice += price;
            document.getElementsByClassName('sum').value = totalPrice;

            document.getElementsByClassName('custom-select')[0].value = "";
            document.getElementById('price').value = "";
            document.getElementById('quantity').value = "";

            document.getElementsByClassName('custom-select')[0].setAttribute('disabled','true');
            document.getElementById('price').setAttribute('disabled','true');
            document.getElementById('quantity').setAttribute('disabled','true');
            $('#submit').attr('disabled',true);
            return;
        }
        capacity += quantity;
        document.getElementById('capacity').value = capacity;
        let textToAppend = `Product: ${product} Price: ${price} Quantity: ${quantity}\n`;
        let $newProduct = $('<li></li>').text(textToAppend);
        inventory.append($newProduct);

        totalPrice += price;
        document.getElementById('sum').value = totalPrice;

        document.getElementsByClassName('custom-select')[0].value = "";
        document.getElementById('price').value = "";
        document.getElementById('quantity').value = "";
        $('#submit').attr('disabled',true);
    })

}
