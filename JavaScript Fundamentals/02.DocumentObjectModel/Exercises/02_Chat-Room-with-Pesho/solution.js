function solve() {
    document.querySelector("button[name='myBtn']").addEventListener('click', () => AddNewMessage("Me", document.querySelector("#myChatBox").value));

    document.querySelector("button[name='peshoBtn']").addEventListener('click',() => AddNewMessage("Pesho", document.querySelector("#peshoChatBox").value));
    function AddNewMessage(sender, content){
        if (!sender || !content){
            return;
        }
        console.log(sender + " - " + content);
        let currentMessageHolder = document.createElement("div");
        let senderNameSpan = document.createElement("span");
        senderNameSpan.textContent = sender.toString();
        let messageElement = document.createElement("p");
        messageElement.textContent = content;
        currentMessageHolder.appendChild(senderNameSpan);
        currentMessageHolder.appendChild(messageElement);
        if (sender === "Me"){
            currentMessageHolder.style.textAlign = "left";
        }else{
            currentMessageHolder.style.textAlign = "right";
        }
        let chatChronology = document.getElementById("chatChronology");
        chatChronology.appendChild(currentMessageHolder);

        document.querySelector("#myChatBox").value = "";
        document.querySelector("#peshoChatBox").value = "";
    }
}