function solve() {
    const loginOrOutBtn = document.querySelector('#loginBtn');
    if (loginOrOutBtn.textContent === 'Login'){
        $('#create-offers').css('display','none');
    }else{
        $('#create-offers').css('display','block');
    }

    loginOrOutBtn.addEventListener('click',(e) => {
        e.preventDefault();
        $('#notification').text('');
        let buttonText = loginOrOutBtn.textContent;
        if (buttonText === 'Login'){
            let usernameInput = $('#username');
            let username = usernameInput.val();
            if (username.length < 4 || username.length > 10 || !username){
                $('#notification').text('The username length should be between 4 and 10 characters.');
                return;
            }
            usernameInput.val(`Hello, ${username}!`);
            usernameInput.addClass('border-0 bg-light');
            usernameInput.attr('disabled','disabled');
            loginOrOutBtn.textContent = 'Logout';
            $('#create-offers').css('display','block');
        }else{
            let usernameInput = $('#username');
            usernameInput.val('');
            usernameInput.removeClass('border-0 bg-light');
            usernameInput.removeAttr("disabled");
            loginOrOutBtn.textContent = 'Login';

            $('#create-offers').css('display','none');
        }
    });

    document.getElementById('create-offer-Btn').addEventListener('click',(e) => {
        e.preventDefault();
        let offerName = $('#offerName').val();
        let company = $('#company').val();
        let description = $('#description').val();
        $('#offerName').val('');
        $('#company').val('');
        $('#description').val('');
        if(!offerName || !company || !description){
            return;
        }

        let newOffer = `<div class="col-3">
                <div class="card text-white bg-dark mb-3 pb-3" style="max-width: 18rem;">
                    <div class="card-header">${offerName}</div>
                    <div class="card-body">
                        <h5 class="card-title">${company}</h5>
                        <p class="card-text">${description}</p>
                    </div>
                </div>
            </div>`;
        let offer = $(newOffer);
        $('#offers-container').append(offer);
    });
}

solve();