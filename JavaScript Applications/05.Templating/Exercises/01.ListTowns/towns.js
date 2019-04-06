function attachEvents() {
    document.getElementById('btnLoadTowns').addEventListener('click', async () => {
        const townsListHTML = await $.get('./towns-list.hbs');
        const template = Handlebars.compile(townsListHTML);
        const inputTowns = $('#towns').val();
        const towns = inputTowns.split(',').map(t => t.trim());
        const context = {towns};
        const htmlResult = template(context);
        $('#root').html(htmlResult);
    });
}