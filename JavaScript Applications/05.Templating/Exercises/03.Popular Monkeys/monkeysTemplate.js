$(async () => {
    const monkeyTemplateHbs = await $.get('./monkey-template.hbs');
    const template = Handlebars.compile(monkeyTemplateHbs);
    const context = {
        monkeys : monkeys
    };
    const resultHtml = template(context);
    $('.monkeys').html(resultHtml);
    showDetails();

});

function showDetails() {
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const info = $(btn).next().toggle();
            console.log(info);
        });
    })
}