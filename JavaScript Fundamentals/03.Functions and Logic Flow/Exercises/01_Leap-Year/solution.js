(function () {
    function solve() {
        document.querySelector('#exercise button').addEventListener('click', function () {
            let year = Number(document.querySelector('input').value);
            document.querySelector('#year div').textContent = year;
            let msgHolder = document.querySelector("#year h2");

            function CheckIsLeapYaer(year) {
                if (year % 400 === 0) {
                    return true;
                } else if (year % 100 === 0) {
                    return false;
                }
                if (year % 4 === 0)
                    return true;
                return false;
            }

            if (CheckIsLeapYaer(year)) {
                msgHolder.textContent = "Leap Year";
            } else {
                msgHolder.textContent = "Not Leap Year";
            }
        });
        document.querySelector('input').value = "";
    }
    return function () {
        solve();
    }
})();