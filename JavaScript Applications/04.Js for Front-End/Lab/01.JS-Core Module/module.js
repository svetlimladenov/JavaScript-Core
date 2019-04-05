$(function() {
    const $body = $('body');
    document.querySelectorAll('#courses .collapse button').forEach(button => {
        button.addEventListener('click', (e) => {
            let courseName = e.target.dataset.course;
            $("#triggerModal").remove();
            $('#exampleModal').remove();
            let context = {courseName : courseName};
            $.get('./modal.hbs').then((modalTempate) =>{
                console.log(modalTempate);
                let template = Handlebars.compile(modalTempate);
                let html = template(context);
                $body.append('<button id="triggerModal" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style="display: none"></button>');4
                $body.append(html);
                $('#triggerModal').click();
            });

        });
    });
});
