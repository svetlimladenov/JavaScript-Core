function showInfo(id){
    let btn = $(`#btn${id}`);
    $(`#${id}`).toggle('flip', function () {
        if ($(this).is(':visible')) {
            btn.text('Hide status code');
        } else {
            btn.text('Show status code');
        }
    });
}

$(() => {
    renderCatTemplate();
    async function renderCatTemplate() {
        const catsListHTML = await $.get('./cats-list.hbs');
        const template = Handlebars.compile(catsListHTML);
        const context = {
            cats : window.cats
        };
        const htmlResult = template(context);
        $('#allCats').html(htmlResult);
    }
});
