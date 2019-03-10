function addSticker() {
    let title = document.getElementsByClassName('title')[0].value;
    let content = document.getElementsByClassName('content')[0].value;
    if (title === "" || content === ""){
        return;
    }
    let $li = $('<li class="note-content"></li>');
    let $btn = $('<a class="button"></a>').text('x');
    $btn.on('click', () => {
       $li.remove();
    });
    let $title = $('<h2></h2>').text(title);
    let $hr = $('<hr>');
    let $content = $('<p></p>').text(content);
    $li.append($btn).append($title).append($hr).append($content);
    let $notesWrapper = $('#sticker-list');
    $notesWrapper.append($li);

    document.getElementsByClassName('title')[0].value = "";
    document.getElementsByClassName('content')[0].value = "";
}