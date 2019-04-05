function attachEvents() {
    const weatherSymbols = {
        'Sunny' : '&#x2600',
        'Partly sunny' : '&#x26C5',
        'Overcast' : '&#x2601',
        'Rain' : '&#x2614',
        'Degrees' : `&#176`,
    };
    document.getElementById('submit').addEventListener('click',async () => {
        const url = 'https://judgetests.firebaseio.com/locations.json';
        const data = await fetch(url).then(res => res.json());
        const locationInput = $('#location').val();

        const location = data.find(x => x.name === locationInput);
        if (location === undefined){
            console.error('Invalid location');
            return;
        }
        const code = location.code;
        const todaysForecastUrl = `https://judgetests.firebaseio.com/forecast/today/${code}.json`;
        const todaysData = await $.get(todaysForecastUrl);

        const upcomingForecastUrl = `https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`;
        const upcomingForecast = await $.get(upcomingForecastUrl);

        $('#forecast').css('display', 'block');
        
        function appendCurrentConditions() {
            const $currentForecastDiv = $('#current');
            const conditionSymbol = weatherSymbols[todaysData.forecast.condition];
            $currentForecastDiv.append($('<span class="condition symbol"></span>').html(conditionSymbol));
            let $conditionsSpan = $('<span class="condition"></span>');
            $conditionsSpan.append(`<span class="forecast-data">${todaysData.name}</span>`);
            $conditionsSpan.append(`<span class="forecast-data">${todaysData.forecast.low}${weatherSymbols['Degrees']}/${todaysData.forecast.high}${weatherSymbols['Degrees']}</span>`);
            $conditionsSpan.append(`<span class="forecast-data">${todaysData.forecast.condition}</span>`);
            $currentForecastDiv.append($conditionsSpan);
        }
        appendCurrentConditions();
        
        function appendUpcomingConditions() {
            const $upcomingDiv = $('#upcoming');

            const threeDaysForecast = upcomingForecast.forecast;
            threeDaysForecast.forEach(day => {
                let $upcomingSpan = $('<span class="upcoming"></span>');
                let $symbol = $('<span class="symbol"></span>').html(weatherSymbols[day.condition]);
                let $degrees = $(`<span class="forecast-data">${day.low}${weatherSymbols['Degrees']}/${day.high}${weatherSymbols['Degrees']}</span>`);
                let $condition = $('<span class="forecast-data"></span>').text(day.condition);
                $upcomingSpan.append($symbol).append($degrees).append($condition);
                $upcomingDiv.append($upcomingSpan);
            })
        }
        appendUpcomingConditions();
    });
}