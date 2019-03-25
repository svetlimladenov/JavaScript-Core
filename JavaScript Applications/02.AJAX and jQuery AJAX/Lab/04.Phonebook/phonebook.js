function loadPhones() {
    const phonebookUl = $('#phonebook');
    phonebookUl.empty();
    document.getElementById('btnLoad').addEventListener('click',() =>{
        $.ajax({
            url : 'https://phonebook-78601.firebaseio.com/phonebook/.json',
            method : 'GET',
            success : (data) => {
                for (let register in data){
                    let newRegisterLi = $(`<li>${data[register].person}: ${data[register].phone}</li>`);
                    phonebookUl.append(newRegisterLi);
                }
            }
        })
    });
}

function addNewContact() {
    document.getElementById('btnCreate').addEventListener('click', () => {
        let person = $('#person').val();
        let phone = $('#phone').val();
        $.ajax({
            url : 'https://phonebook-78601.firebaseio.com/phonebook/.json',
            method : 'POST',
            data : JSON.stringify({
                "person" : person,
                "phone" : phone,
            }),
            success : () => {
                $('#phonebook').empty();
                $('#btnLoad').click()
            },
        })
    })
}
addNewContact();
loadPhones();