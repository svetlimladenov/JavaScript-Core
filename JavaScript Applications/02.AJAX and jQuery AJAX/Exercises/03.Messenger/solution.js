function attachEvents() {
    const textArea = $("#messages");
    async function loadMessages(){
        const url = 'https://messengerapi-3fe7b.firebaseio.com/messenger.json';
        return fetch(url,{
            method : 'GET',
        }).then(response => response.json());
    }

    async function sendMessage(messageContent, messageAuthor, messageTimestamp){
        const url = 'https://messengerapi-3fe7b.firebaseio.com/messenger.json';
        let body = {
            author : messageAuthor,
            content : messageContent,
            timestamp : messageTimestamp,
        };
        await fetch(url,{
            method : 'POST',
            body : JSON.stringify(body),
        }).then(res => console.log(res));
    }
    refreshChat();
    function refreshChat(){
        document.getElementById('refresh').addEventListener('click',async () => {
            let messages = [];
            await loadMessages().then(data => {
                for (let msg in data){
                    messages.push(data[msg]);
                }
            });

            messages = messages.sort((a,b) => a.timestamp - b.timestamp);
            messages.forEach(msg =>{
                console.log(msg);
                let author = msg.author;
                let content = msg.content;
                let currentText = textArea.text();
                currentText += author + ": " + content + "\n";
                textArea.text(currentText);
            })
        });
    }


    document.getElementById('submit').addEventListener('click', () => {
        let author = $('#author').val();
        let message = $('#content').val();
        sendMessage(message,author,Date.now());
    })
}