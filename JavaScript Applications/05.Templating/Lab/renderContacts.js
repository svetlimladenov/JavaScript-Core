$(() => {
    Promise.all([
            $.get('./contacts-list.hbs'),
            $.get('./contacts-template.hbs')
    ])
        .then(([contactsListHtml, contactsTemplateHtm]) => {
            Handlebars.registerPartial('contactInfo', contactsTemplateHtm);
            const template = Handlebars.compile(contactsListHtml);
            const context = {contacts};
            const html = template(context);
            $('.contacts').html(html);
        })
        .catch(error => console.error(error));
});

function showDetails(id) {
    $(`#${id}`).toggle();
}