function attachEvents() {
    const cathcesDiv = $('#catches');
    async function loadData() {
        const loadUrl = 'https://baas.kinvey.com/appdata/kid_BkaAom2uV/biggestCatches';
        let data = [];
        await $.ajax({
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Basic Secret');
            },
            method: "GET",
            url: loadUrl,
            headers: {
                'Authorization': 'Basic Z3Vlc3Q6Z3Vlc3Q=',
            },
            success: loadedData => {
                data = loadedData;
            }
        });
        return data;
    }

    async function updateCatch(id){
        const updateUrl = `https://baas.kinvey.com/appdata/kid_BkaAom2uV/biggestCatches/${id}`;
        let values = $(`div[data-id="${id}"] input`);
        let angler = values.eq(0).val();
        let weight = +values.eq(1).val();
        let species = values.eq(2).val();
        let location = values.eq(3).val();
        let bait = values.eq(4).val();
        let captureTime = +values.eq(5).val();

        let data = {
            "angler": angler,
            "weight": weight,
            "species": species,
            "location": location,
            "bait": bait,
            "captureTime": captureTime
        };
        await $.ajax({
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Basic Secret');
            },
            method : 'PUT',
            url : updateUrl,
            headers: {
                'Authorization': 'Basic Z3Vlc3Q6Z3Vlc3Q='
            },
            contentType : 'application/json',
            data: JSON.stringify(data),
        }).then((data) => console.log(data)).catch(error => console.error(error.message));
    }

    async function removeCatch(id){
        const deleteUrl = `https://baas.kinvey.com/appdata/kid_BkaAom2uV/biggestCatches/${id}`;
        await $.ajax({
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Basic Secret');
            },
            method : 'DELETE',
            url : deleteUrl,
            headers: {
                'Authorization': 'Basic Z3Vlc3Q6Z3Vlc3Q='
            }
        }).then(() => {
            let catchHolder = $(`div[data-id="${id}"]`);
            catchHolder.remove();
        }).catch(() => console.error('error'));
    }

    async function addCatch(){
        const addUrl = 'https://baas.kinvey.com/appdata/kid_BkaAom2uV/biggestCatches';
        let values = $(`#addForm input`);
        let angler = values.eq(0).val();
        let weight = +values.eq(1).val();
        let species = values.eq(2).val();
        let location = values.eq(3).val();
        let bait = values.eq(4).val();
        let captureTime = +values.eq(5).val();

        let data = {
            "angler": angler,
            "weight": weight,
            "species": species,
            "location": location,
            "bait": bait,
            "captureTime": captureTime
        };

        await $.ajax({
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Basic Secret');
            },
            method : 'POST',
            url : addUrl,
            headers: {
                'Authorization': 'Basic Z3Vlc3Q6Z3Vlc3Q='
            },
            contentType : 'application/json',
            data: JSON.stringify(data),
        }).then(() => {
            // $('.load').click();
        }).catch(error => console.error(error.message));
    }
    document.getElementsByClassName('load')[0].addEventListener('click', async () => {
        let catches = await loadData();
        catches.forEach(fish => {
            const $catchDiv = $(`<div class="catch" data-id="${fish._id}"></div>`);
            const $catchData = $(`<label>Angler</label>\n` +
                `            <input type="text" class="angler" value="${fish.angler}"/>\n` +
                `            <label>Weight</label>\n` +
                `            <input type="number" class="weight" value="${fish.weight}"/>\n` +
                `            <label>Species</label>\n` +
                `            <input type="text" class="species" value="${fish.species}"/>\n` +
                `            <label>Location</label>\n` +
                `            <input type="text" class="location" value="${fish.location}"/>\n` +
                `            <label>Bait</label>\n` +
                `            <input type="text" class="bait" value="${fish.bait}"/>\n` +
                `            <label>Capture Time</label>\n` +
                `            <input type="number" class="captureTime" value="${fish.captureTime}"/>\n`);

            const updateBtn = $(' <button class="update">Update</button>');
            const deleteBtn = $('<button class="delete">Delete</button>');

            updateBtn.on('click',async () => {
                await updateCatch(fish._id);
            });
            deleteBtn.on('click', async () => {
               await removeCatch(fish._id);
            });

            $catchDiv.append($catchData);
            cathcesDiv.append($catchDiv);
            $catchDiv.append(updateBtn);
            $catchDiv.append(deleteBtn);
        });
    });

    document.getElementsByClassName('add')[0].addEventListener('click', async () => {
        await addCatch();
    });
}