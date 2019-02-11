function solve() {
    let buttons = document.querySelectorAll('button');
    let generateButton = buttons[0];
    generateButton.addEventListener('click', addNewFurniture);
    let buyBtn = buttons[1];
    let boughtItems = {
        'Items' : [],
        'Price' : 0.0,
        'DecFactor' : 0.0,
    };
    let result = document.querySelectorAll('textarea')[1];
    console.log(result);
    buyBtn.addEventListener('click', () =>{
        let inputs = Array.from(document.querySelectorAll('input'));
        let checkedValue = [];
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checked === true)
            {
                checkedValue.push(inputs[i]);
            }
        }
        checkedValue.forEach(x => {
            let parts = x.value.split(' ');
            boughtItems.Items.push(parts[0]);
            boughtItems.Price += parseFloat(parts[1]);
            boughtItems.DecFactor += parseFloat(parts[2]);
        });
        result.textContent += `Bought furniture: ${boughtItems.Items.join(', ')}\n`;
        result.textContent += `Total price: ${boughtItems.Price.toFixed(2)}\n`;
        let avgDecFactor = boughtItems.DecFactor / boughtItems.Items.length;
        result.textContent += `Average decoration factor: ${avgDecFactor.toFixed(2)}`;
    });
    function addNewFurniture() {
            let input = document.getElementsByTagName('textarea')[0].value;
            let objects = JSON.parse(input);
            let div = document.getElementById('furniture-list');
            objects.forEach(obj => {
                let innerDiv = document.createElement('div');
                innerDiv.classList.add('furniture');

                let name = document.createElement('p');
                name.textContent = 'Name: ' + obj['name'];

                let img = document.createElement('img');
                img.src = obj['img'];

                let price = document.createElement('p');
                price.textContent = 'Price: ' + obj['price'];

                let df = document.createElement('p');
                df.textContent = 'Decoration factor: ' + obj['decFactor'];

                let checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = `${obj['name']} ${obj['price']} ${obj['decFactor']}`;
                innerDiv.appendChild(name);
                innerDiv.appendChild(img);
                innerDiv.appendChild(price);
                innerDiv.appendChild(df);
                innerDiv.appendChild(checkbox);
                div.appendChild(innerDiv);
            })

        }
}