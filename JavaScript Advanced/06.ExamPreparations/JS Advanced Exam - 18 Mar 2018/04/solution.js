class PaymentManager {
    constructor(title) {
        this.title = title;
    }

    render(id) {
        let divWrapper = $(`#${id}`);
        let table = $(`<table>
    <caption>${this.title} Payment Manager</caption>
    <thead>
        <tr>
            <th class="name">Name</th>
            <th class="category">Category</th>
            <th class="price">Price</th>
            <th>Actions</th>
        </tr>
   </thead>
    <tbody class="payments">
       
    </tbody>
    <tfoot class="input-data">
        <tr>
            <td><input name="name" type="text"></td>
            <td><input name="category" type="text"></td>
            <td><input name="price" type="number"></td>
            <td><button>Add</button></td></tr>
    </tfoot>
</table>	
`);
        divWrapper.append(table);
        let buttons = document.querySelectorAll(`#${id} table button`);
        let addBtn = $(buttons).last();
        addBtn.click(function () {
            let name = document.querySelector(`#${id} table input[name=name]`).value;
            let category = document.querySelector(`#${id} table input[name=category]`).value;
            let price = document.querySelector(`#${id} table input[name=price]`).value;
            if (name === '' || category === '' || price === ''){
                return;
            }
            price = Number(price);
            let $tr = $('<tr></tr>');
            let $tdName = $('<td></td>').text(name);
            let $tdCategory = $('<td></td>').text(category);
            let $tdPrice = $('<td></td>').text(price);
            let $btnTd = $('<td></td>');
            let $deleteBtn = $('<button></button>').text('Delete');
            $btnTd.append($deleteBtn);
            $tr.append($tdName).append($tdCategory).append($tdPrice).append($btnTd);

            let $payments = $(`#${id} table tbody.payments`);
            $payments.append($tr);

            $deleteBtn.on('click', () =>{
                $tr.remove();
            });

            document.querySelector(`#${id} table input[name=name]`).value = "";
            document.querySelector(`#${id} table input[name=category]`).value = "";
            document.querySelector(`#${id} table input[name=price]`).value = "";
        });
    }
}