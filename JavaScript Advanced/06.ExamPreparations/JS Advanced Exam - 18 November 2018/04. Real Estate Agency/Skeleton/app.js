function realEstateAgency () {
    let offers = [];
    let agenciProfit = 0;
    registerOffer();

    function registerOffer(){
        document.getElementsByName('regOffer')[0].addEventListener('click',reg);
        function reg() {
            let apartmentRent = +document.getElementsByName('apartmentRent')[0].value;
            let apartmentType = document.getElementsByName('apartmentType')[0].value;
            let agencyCommission = +document.getElementsByName('agencyCommission')[0].value;
            if (isNaN(apartmentRent) || apartmentType === '' || agencyCommission === '' || isNaN(agencyCommission) || apartmentRent <= 0 || agencyCommission < 0 || agencyCommission > 100 || apartmentType === "" || apartmentType.indexOf(':') > 0){
                printMessage('Your offer registration went wrong, try again.');
                clearRegInput();
            }else {
                printMessage('Your offer was created successfully.');
                clearRegInput();
                offers.push({
                    rent : apartmentRent,
                    type : apartmentType,
                    commission : agencyCommission,
                    rentWithCommision : apartmentRent + ((agencyCommission / 100) * apartmentRent),
                });
                let divHolder = $('<div class="apartment"></div>');
                let rent = $('<p></p>').text('Rent: ' + apartmentRent);
                let type = $('<p></p>').text('Type: ' + apartmentType);
                let commision = $('<p></p>').text('Commission: ' + agencyCommission);
                divHolder.append(rent).append(type).append(commision);
                $('#building').append(divHolder);
            }
        }

        function clearRegInput() {
            document.getElementsByName('apartmentRent')[0].value = "";
            document.getElementsByName('agencyCommission')[0].value = "";
            document.getElementsByName('apartmentType')[0].value = "";
        }
    }
    function printMessage(message) {
        document.getElementById('message').textContent = message;
    }
    findOffer();
    function findOffer() {
        document.getElementsByName('findOffer')[0].addEventListener('click', search);
        
        function search() {
            let familyBudget = document.getElementsByName('familyBudget')[0].value;
            let familyApartmentType = document.getElementsByName('familyApartmentType')[0].value;
            let familyName = document.getElementsByName('familyName')[0].value;
            
            if (familyBudget <= 0 || familyApartmentType === '' || familyName === ''){
                clearSearchInput();
                return;
            }
            else{
                let foundOffer = false;
                for (let i = 0; i < offers.length; i++) {
                    let offer = offers[i];
                    if (offer.type === familyApartmentType && offer.rentWithCommision <= familyBudget){
                        foundOffer = true;
                        let offerCommision = ((offer.commission / 100) * offer.rent) * 2;
                        agenciProfit += offerCommision;
                        $('#roof h1').text(`Agency profit: ${agenciProfit} lv.`);
                        let currentApartment = $(document.getElementsByClassName('apartment')[i]);
                        currentApartment.empty();
                        currentApartment.css('border','2px solid red');
                        let familyNameHeader = $('<p></p>').text(familyName);
                        let liveHere = $('<p></p>').text('live here now');
                        let btnMoveOut = $('<button></button>').text('MoveOut');
                        btnMoveOut.on('click',() => {
                            currentApartment.remove();
                            printMessage(`They had found cockroaches in ${familyName}\'s apartment`);
                        });
                        currentApartment.append(familyNameHeader).append(liveHere).append(btnMoveOut);
                        break;
                    }
                }
                if (!foundOffer){
                    printMessage('We were unable to find you a home, so sorry :(');
                }
            }
            clearSearchInput();
        }
        function clearSearchInput() {
            document.getElementsByName('familyBudget')[0].value = "";
            document.getElementsByName('familyApartmentType')[0].value = "";
            document.getElementsByName('familyName')[0].value = "";
        }
    }
}

