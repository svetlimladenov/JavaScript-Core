function solve() {
        function getPrefix(number) {
            if (number.toString().length === 1) {
                number = '0' + number;
            }
            return number;
        }
        function getWeightSum(egn) {
            let sum = 0;
            let egnSoFar = egn;
            let weightPosition = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            for (let index = 0; index < weightPosition.length; index++) {
                sum += (+egnSoFar[index] * +weightPosition[index]);
            }
            return sum;
        }

        function getRemainder(sum) {
            let remainder = sum % 11;

            if (((remainder) % 10) === 0) {
                remainder = 0;
            }
            return remainder;
        }

        document.querySelector('button').addEventListener('click', function () {
            let year = document.querySelector('#year').value;
            let yearNumber = year[year.length - 2] + year[year.length - 1];

            let allMonths = document.getElementById('month');
            let monthsNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            let selectedMonth = allMonths.options[allMonths.selectedIndex].value;

            let monthNumber = monthsNames.indexOf(selectedMonth) + 1;
            monthNumber = getPrefix(monthNumber);
            console.log(monthNumber);

            let date = document.getElementById('date').value;
            date = getPrefix(date);
            let regionInput = document.getElementById('region').value;
            let region = regionInput[0] + regionInput[1];

            let gender = document.querySelector('input[name="gender"]:checked').value;
            let genderNum = gender === 'Male' ? 2 : 1;

            let egn = '' + yearNumber + monthNumber + date + region + genderNum;

            let sum = getWeightSum(egn);
            let remainder = getRemainder(sum);

            egn = egn + remainder;
            console.log(egn);
            let result = document.getElementById('egn');
            result.textContent = "Your EGN is: " + egn.toString();


            year.value = "";
            for(let i = 0; i < allMonths.length; i++){
                allMonths[i].selected = false;
            }
            date.value = "";
            regionInput.value = "";
            let genders = document.getElementsByName('gender');
            for(let i=0;i<genders.length;i++)
                genders[i].checked = false;
        })
    }
